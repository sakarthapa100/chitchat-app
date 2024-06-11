import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';

const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Notfound = lazy(() => import('./components/Notfound'));

function App() {
  const { authUser } = useSelector(store => store.user);
  const { socket } = useSelector(store => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
      let socketInstance;

      if (authUser) {
          socketInstance = io("http://localhost:8000", {
              query: {
                  userId: authUser._id
              }
          });

          dispatch(setSocket(socketInstance));

          socketInstance.on('getOnlineUsers', (onlineUsers) => {
              console.log('Received online users:', onlineUsers);
              dispatch(setOnlineUsers(onlineUsers));
          });

          socketInstance.on('connect', () => {
              console.log('Socket connected:', socketInstance.id);
          });

          socketInstance.on('disconnect', () => {
              console.log('Socket disconnected');
          });
      }

      return () => {
          if (socketInstance) {
              console.log('Closing socket for user:', authUser?._id);
              socketInstance.close();
          } else if (socket) {
              console.log('User logged out, closing socket:', socket.id);
              socket.close();
              dispatch(setSocket(null));
              dispatch(setOnlineUsers([]));
          }
      };
  }, [authUser, dispatch, socket]);

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='*' element={<Notfound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
