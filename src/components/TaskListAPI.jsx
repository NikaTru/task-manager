import { useEffect, useState } from 'react'

function TaskListAPI() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        setTasks(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Ошибка загрузки данных')
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="loading-message">Загрузка задач с сервера...</p>
  if (error) return <p className="error-message">{error}</p>

  return (
    <div className="api-task-list">
      <h3>Задачи из API (JSONPlaceholder)</h3>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-row">
              <span>{task.title}</span>
              <span className="task-status">{task.completed ? '✓' : '✗'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskListAPI