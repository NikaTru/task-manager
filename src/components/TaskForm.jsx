import { useState } from 'react'

function TaskForm({ addTask }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(text)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите новую задачу..."
      />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default TaskForm