// import React, { useEffect } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import axios from 'axios'
// import { setMessages } from '../redux/messageSlice'

// const useGetMessages = () => {
//   const {selectedUser } = useSelector(store => store.user)
//   const dispatch = useDispatch()
//  useEffect(()=> {
// const fetchMessages = async ()=> {
//   try {
//     axios.defaults.withCredentials = true
//     const res = await axios.get(`http://localhost:8000/api/v1/message/${selectedUser?._id}`)
//     console.log(res)
//     dispatch(setMessages(res.data))
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchMessages()
//  },[selectedUser])
// }

// export default useGetMessages

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setMessages } from '../redux/messageSlice';

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id) return;

      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8000/api/v1/message/${selectedUser._id}`);
        console.log(res);
        dispatch(setMessages(res.data));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Log detailed error information
          console.error('Axios error:', error.message);
          console.error('Error code:', error.code);
          console.error('Error response:', error.response?.data);
        } else {
          // Log generic error information
          console.error('Error:', error.message);
        }
        // Optionally, dispatch an error action or show a notification to the user
      }
    };

    fetchMessages();
  }, [selectedUser, dispatch]);
};

export default useGetMessages;
