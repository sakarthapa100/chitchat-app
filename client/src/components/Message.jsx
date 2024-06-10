import React, { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";

const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const isSenderMessage = message?.senderId === authUser?._id;

    return (
        <div ref={scroll} className={`chat ${isSenderMessage ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={isSenderMessage ? authUser?.profilePhoto : selectedUser?.profilePhoto} />
                </div>
            </div>
            <div className={`chat-bubble ${isSenderMessage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                {message?.message}
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50">12:45</time>
            </div>
        </div>
    )
}

export default Message