import { Link } from 'react-router-dom'
import catIcon from '../assets/task-icon.svg'

function Header() {
  return (
    <header className="header">
      <img src={catIcon} alt="Кот" className="header-icon" />
      <h1 className="header-title">Мой список задач</h1>
      <nav className="header-nav">
        <Link to="/">Задачи</Link>
        <Link to="/about">О приложении</Link>
      </nav>
    </header>
  )
}

export default Header