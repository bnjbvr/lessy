export default {
  errors: {
    Project: {
      base: {
        already_finished: 'This project has already been finished',
        already_started: 'This project has already been started',
        already_stopped: 'This project has already been stopped',
        missing: 'Project is required. It may be an application’s problem, please contact developers.',
        not_found: 'Project does not exist',
        reached_max_started: 'You cannot start more than 3 projects',
      },
      dueAt: {
        before_started_at: 'The due date cannot be set before the started date',
        missing: 'Due date is required',
      },
      finishedAt: {
        missing: 'Finished date is required',
        outside_started_at_and_today: 'Finished date must be between started date and today',
      },
      name: {
        blank: 'Name is required',
        invalid: 'Name does not match required pattern (only letters, numbers, underscores and hiphens are accepted)',
        missing: 'Name is required',
        taken: 'This name is not available',
        too_long: 'Name is too long (max 100 caracters)',
      },
    },

    Task: {
      label: {
        missing: 'Label is missing',
      },
    },

    User: {
      base: {
        login_failed: 'Oops we failed to log you, it seems your credentials were wrong…',
        missing: 'User is required. It may be an application’s problem, please contact developers.',
        not_found: 'User does not exist',
      },
      email: {
        missing: 'Email is required',
        taken: 'This email address is not available',
      },
      password: {
        missing: 'Password is required',
      },
      username: {
        exclusion: 'Username is a reserved word',
        invalid: 'Username does not match required pattern (only lowercase letters, underscore and hiphen are accepted)',
        missing: 'Username is required',
        taken: 'This username is not available',
        too_long: 'Username is too long (max 25 caracters)',
      },
    },
  },

  fields: {
    password: {
      tip: 'Show password in plain text',
    },
  },

  forms: {
    activateUser: {
      passwordLabel: 'Password',
      submit: 'Activate my account',
      usernameLabel: 'Username',
      usernameTip: 'Only lowercase letters, underscore and dash',
    },

    createProject: {
      cancel: 'Cancel',
      submit: 'Create',
    },

    createTask: {
      cancel: 'Cancel',
      submit: 'Create',
    },

    editProject: {
      cancel: 'Cancel',
      descriptionLabel: 'Description',
      descriptionTip: 'Description supports Markdown',
      dueLabel: 'Due on',
      nameLabel: 'Name',
      nameTip: 'Only lowercase letters, numbers, underscore and dash',
      submit: 'Validate',
    },

    editTask: {
      cancel: 'Cancel',
      submit: 'Update',
    },

    finishProject: {
      cancel: 'No, I lied :(',
      finishedLabel: 'Finished on',
      finishedTip: 'It cannot be after today',
      submit: 'I did it!',
    },

    login: {
      passwordLabel: 'Password',
      submit: 'Login',
      usernameLabel: 'Username',
    },

    register: {
      emailLabel: 'Email',
      submit: 'Let me in',
    },

    startProject: {
      cancel: 'Cancel',
      dueLabel: 'Due on',
      dueTip: 'The due date have to be after today',
      nameLabel: 'Name',
      submit: 'Start it now',
    },
  },

  layout: {
    login: 'Login',
    logout: 'Logout',
    lessy: 'Lessy',

    project: {
      dashboard: 'Dashboard',
      projectsInbox: 'Projects inbox',
      settings: 'Settings',
    },

    projects: {
      inbox: 'Inbox',
    },

    sidebar: {
      dashboard: 'Dashboard',
      projects: 'Projects',
      tasks: 'Tasks',
    },

    tasks: {
      backlog: 'Backlog',
    },
  },

  pages: {
    activateUser: {
      intro: 'To continue, you have to pick a unique username and a password so you can login to your account later.',
      title: 'Activate your account',
    },

    dashboard: {
      activationInstructions: 'We sent you an email at {email}.<br />Follow its instructions to be able to access your projects later.',
      backlog: 'pick some from backlog',
      createTask: 'add tasks for today',
      datesDescription: 'Started on <b>{start}</b><br />Due on <b>{due}</b>',
      dueOn: 'Due on <b>{date}</b>',
      or: 'or',
      shouldAddTasks: 'You should add tasks to this project to make sure it is progressing',
      shouldAddMoreTasks: 'You should add more tasks to this project or close it if it’s finished',
      tasksCount: 'Tasks: {finishedCount} / {totalCount}',
    },

    error: {
      title: 'Oops…',
    },

    home: {
      intro: 'A new era begins for the project managers.',
      title: 'Welcome on Lessy!',
    },

    loading: {
      inProgress: 'Loading, please wait…',
    },

    login: {
      title: 'Login',
    },

    notFound: {
      home: 'Home page',
      intro: "It looks like this page doesn't exist…",
      title: 'Page not found',
    },

    projects: {
      inbox: {
        createProject: 'create a project',
        finishedLabel: '(finished on {date})',
        hideFinishedProjects: 'Hide your project | Hide your projects',
        projectsPlaceholder: "You don't have any project yet, what are you working on?",
        seeFinishedProjects: 'See your finished project | See your {count} finished projects',
        stoppedOn: '(stopped on {date})',
      },

      finish: {
        intro: "Really? You've finished <b>{projectName}</b>? That's great!<br />Let us know when you finished it:",
      },

      show: {
        askEdit: 'Edit?',
        confirmStop: 'Oh? The project will be marked as stopped. Can you confirm?',
        dueLabel: 'Due on',
        finishedLabel: 'Finished on',
        finishProject: 'Finish it',
        noDescription: 'There is no description for this project yet.',
        reachedMaxInProgress: 'You already reached the maximum of started projects',
        startedLabel: 'Started on',
        startProject: 'Start this project',
        stoppedLabel: 'Stopped on',
        stopProject: 'Stop it, now',
      },
    },
  },

  tasks: {
    abandon: 'Abandon',
    confirmAbandon: 'Oh? The task will me marked as abandoned and will disappear from the list. Can you confirm?',
    createdSinceWeeks: 'You’ve created this task 1 week ago | You’ve created this task {count} weeks ago, it may be time to abandon it, don’t you think?',
    dueOn: 'due on {date}',
    edit: 'Edit',
    emptyList: 'There is no task here…',
    plan: 'Plan for today',
    replan: 'Replan for today',
    restarted: 'You’ve restarted this task once | You’ve restarted this task {count} times, what about splitting or renaming it so it would be easier to achieve?',
  },
}
