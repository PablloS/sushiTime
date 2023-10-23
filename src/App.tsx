import { Route, Routes } from 'react-router-dom'
import './App.css'
import EmptyPage from './pages/EmptyPage/EmptyPage'
import TablePage from './pages/TablePage/TablePage'
import { Navbar } from './modules/Navbar'

function App() {

  return (
    <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<EmptyPage />} />
        <Route path='/menu/:cityid' element={<TablePage />} />
      </Routes>
    </div>
  )
}

export default App
