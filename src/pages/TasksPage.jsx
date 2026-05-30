import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import TaskListAPI from '../components/TaskListAPI'

function TasksPage() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    if (taskText.trim() === '') return
    const newTask = {
      id: Date.now(),
      title: taskText.trim(),
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(updated)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2 className="page-title">Мои задачи</h2>
      <ProgressBar tasks={tasks} />
      <TaskForm addTask={addTask} />
      {tasks.length === 0 ? (
        <p className="empty-list">Задач пока нет. Добавьте первую задачу!</p>
      ) : (
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      )}
      <TaskListAPI />
    </div>
  )
}

export default TasksPage