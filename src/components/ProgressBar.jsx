function ProgressBar({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter(task => task.completed).length
  const percent = total === 0 ? 0 : (completed / total) * 100

  return (
    <div className="progress-container">
      <div className="progress-label">Прогресс {completed}/{total}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar