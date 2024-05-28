import React, { lazy } from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'

const Home =lazy(()=> import ("./pages/Home"))
const Login =lazy(()=> import ("./pages/Login"))
const Groups =lazy(()=> import ("./pages/Groups"))
const Chat =lazy(()=> import ("./pages/Chat"))
const Notfound =lazy(()=> import ("./pages/Notfound"))

let user = true;

const App = () => {
  return (
  <BrowserRouter>  
  <Routes>
<Route element={<ProtectRoute user={user}/>}> 
    <Route path='/' element={<Home />}></Route>
  
    <Route path='/groups' element={<Groups />}></Route>
    <Route path='/chat' element={<Chat />}></Route> 


 </Route>

     <Route path='/login' element={
     <ProtectRoute user={!user} redirect='/'>
       <Login />
     </ProtectRoute>
    }></Route>

<Route path='*' element={<Notfound />}></Route>

  </Routes>
  </BrowserRouter>
  )
}

export default App