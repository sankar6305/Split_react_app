
//creating routes
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Groups from './components/groups'
import Header from './components/Header'
import Login from './components/login'
import Register from './components/register'
import Activity from './components/activity'
import Notificationhs from './components/notificationhs'
import Settings from './components/settings'
import Group from './components/group'

import './App.css'

const App = () => {



  return (
    <BrowserRouter>
    <Header />
    <div className='Component'>
      <Routes>
        <Route path='/' element={<Home/>} > </Route> 
        <Route path='/groups' element={<Groups />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register  />} />
        <Route path='/activity' element={<Activity  />} />
        <Route path='/notifications' element={<Notificationhs  />} />
        <Route path='/settings' element={<Settings  />} />
        <Route path='/groups/:id' element={<Group />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App