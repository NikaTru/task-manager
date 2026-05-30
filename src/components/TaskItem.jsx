function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-row">
        <label className="task-content">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />
          <span>{task.title}</span>
        </label>
        <button className="delete-btn" onClick={() => deleteTask(index)}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="0" y1="0" x2="12" y2="12" stroke="#fff" strokeWidth="2"/>
            <line x1="12" y1="0" x2="0" y2="12" stroke="#fff" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </li>
  )
}

export default TaskItem