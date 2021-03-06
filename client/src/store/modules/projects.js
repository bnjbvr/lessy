import marked from 'marked'

import { getWhileNext } from '../../api/http'

import { formatDate } from '../../utils'

import projectsApi from '../../api/projects'

const state = {
  current: null,
  byIds: {},
}

const getters = {
  findById (state, getters, rootState, rootGetters) {
    return id => {
      const project = state.byIds[id]
      const tasks = rootGetters['tasks/listForProject'](project)
      const finishedTasksCount = tasks.filter(task => task.isFinished).length
      const params = {
        projectName: project.name,
      }
      const isStopped = !!project.stoppedAt
      const isFinished = !!project.finishedAt
      const isStarted = !!project.startedAt && !isStopped
      return {
        ...project,
        isStarted,
        isStopped,
        isFinished,
        mdDescription: marked(project.description, { sanitize: true, breaks: true, smartypants: true }),
        startedAtLabel: isStarted ? formatDate(project.startedAt) : '',
        dueAtLabel: isStarted ? formatDate(project.dueAt) : '',
        stoppedAtLabel: isStopped ? formatDate(project.stoppedAt) : '',
        finishedAtLabel: isFinished ? formatDate(project.finishedAt) : '',
        finishedTasksCount,
        tasksCount: tasks.length,
        urlShow: { name: 'project/show', params },
        urlEdit: { name: 'project/edit', params },
        urlStart: { name: 'project/start', params },
        urlFinish: { name: 'project/finish', params },
      }
    }
  },

  list (state, getters) {
    return Object.keys(state.byIds)
                 .map(getters.findById)
  },

  listNotStarted (state, getters) {
    return getters
      .list
      .filter((project) => !project.isStarted)
      .sort((p1, p2) => {
        if (p1.isStopped === p2.isStopped) {
          return p1.name.localeCompare(p2.name)
        }
        return p1.isStopped < p2.isStopped
      })
  },

  listInProgress (state, getters) {
    return getters.list
                  .filter((project) => project.isInProgress)
                  .sort((p1, p2) => p1.dueAt > p2.dueAt)
  },

  listFinished (state, getters) {
    return getters.list
                  .filter((project) => project.isFinished)
                  .sort((p1, p2) => p1.finishedAt > p2.finishedAt)
  },

  current (state, getters) {
    const projectId = state.current
    if (projectId == null) {
      return null
    }
    return getters.findById(projectId)
  },

  canStartProject (state, getters) {
    const nbStartedProjects = Object.values(state.byIds).reduce((nb, project) => {
      return project.isInProgress ? nb + 1 : nb
    }, 0)
    return nbStartedProjects < 3
  },

  numberCurrent (state, getters) {
    return Object.keys(state.byIds)
      .map(getters.findById)
      .filter((project) => !project.isFinished)
      .length
  },

  numberFinished (state, getters) {
    return Object.keys(state.byIds)
      .map(getters.findById)
      .filter((project) => project.isFinished)
      .length
  },
}

const actions = {
  list ({ commit }) {
    return projectsApi.list()
                      .then(getWhileNext((res) => commit('addList', res.data)))
  },

  create ({ commit }, { name }) {
    return projectsApi
      .create(name)
      .then((res) => {
        commit('addList', [res.data])
        return res.data.id
      })
  },

  update ({ commit }, { project, ...payload }) {
    return projectsApi.update(project, payload)
                      .then((res) => commit('set', res.data))
  },

  start ({ commit }, { project, dueAt }) {
    return projectsApi.start(project, dueAt)
                      .then((res) => commit('set', res.data))
  },

  stop ({ commit }, { project }) {
    return projectsApi.stop(project)
                      .then((res) => commit('set', res.data))
  },

  finish ({ commit, state }, { project, finishedAt }) {
    return projectsApi
      .finish(project, finishedAt)
      .then((res) => {
        commit('set', res.data)
        commit('setNumberFinished', state.numberFinished + 1)
      })
  },
}

const mutations = {
  addList (state, data) {
    let byIds = {}
    data.forEach((element) => {
      byIds[element.id] = {
        id: element.id,
        ...element.attributes,
        userId: element.relationships.user.data.id,
        taskIds: element.relationships.tasks.data.map(task => task.id),
      }
    })

    state.byIds = {
      ...state.byIds,
      ...byIds,
    }
  },

  set (state, data) {
    state.byIds = {
      ...state.byIds,
      [data.id]: {
        id: data.id,
        ...data.attributes,
        userId: data.relationships.user.data.id,
        taskIds: data.relationships.tasks.data.map(task => task.id),
      },
    }
  },

  setCurrent (state, projectName) {
    state.current = Object.keys(state.byIds)
                          .find((id) => state.byIds[id].name === projectName)
  },

  addTaskToProject (state, { projectId, taskId }) {
    const project = state.byIds[projectId]
    if (project != null) {
      const newProject = {
        ...project,
        taskIds: [
          ...project.taskIds,
          taskId,
        ],
      }

      state.byIds = {
        ...state.byIds,
        [project.id]: newProject,
      }
    }
  },

  reset (state) {
    state.current = null
    state.byIds = {}
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
