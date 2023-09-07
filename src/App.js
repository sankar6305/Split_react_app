
//creating routes
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Groups from './components/groups'
import Header from './components/Header'
import Login from './components/login'
import Register from './components/register'
import Activity from './components/activity'
import Settings from './components/settings'
import Group from './components/group'
import EachMemberAnalytics from './components/EachMemberAnalytics'

import './App.css'

const App = () => {



  return (
    <BrowserRouter>
    <div className="main_total_container">
    <Header />
    <div className='Component'>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/groups' element={<Groups />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/groups/:id' element={<Group />} />
        <Route path='/:id/analyse' element={<EachMemberAnalytics />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App