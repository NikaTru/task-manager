function AboutPage() {
  return (
    <div className="about-page">
      <h2>О приложении</h2>
      <p>Это учебное React-приложение для управления списком задач.</p>
      <p>Можно добавлять, удалять и отмечать задачи как выполненные.</p>
      <p>Данные загружаются из JSONPlaceholder API.</p>
      <h3>Стек технологий:</h3>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Vite</li>
        <li>CSS</li>
      </ul>
    </div>
  )
}

export default AboutPage