import axios from 'axios';
import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';


const SendInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(store => store.user);
  const { messages } = useSelector(store => store.message);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/send/${selectedUser?._id}`, 
        { message },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.error(error);
    }

    setMessage("");
  };

  return (
    <div className="flex items-center">
      <form className="flex w-full" onSubmit={onSubmitHandler}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow bg-[#222630] px-4 py-3 outline-none text-white rounded-l-lg border-2 border-r-0 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
          name="text"
          placeholder="Send a message .."
          type="text"
        />
        <button type='submit' className="bg-[#222630] px-4 py-3 text-white rounded-r-lg border-2 border-l-0 border-[#2B3040] transition-colors duration-100 hover:bg-[#596A95] flex items-center">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default SendInput;
