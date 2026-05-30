import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App