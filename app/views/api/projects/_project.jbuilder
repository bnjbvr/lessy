json.type 'project'
json.id project.id
json.attributes do
  json.extract! project, :name, :description
  json.started_at project.started_at.to_i
  json.due_at project.due_at.to_i
  json.stopped_at project.paused_at.to_i
  json.finished_at project.finished_at.to_i
  json.is_in_progress project.started?
end
json.relationships do
  json.user do
    json.data do
      json.type 'user'
      json.id project.user_id
    end
  end
  json.tasks do
    json.data project.tasks.not_abandoned do |task|
      json.type 'task'
      json.id task.id
    end
  end
end
