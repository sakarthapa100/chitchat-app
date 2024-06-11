import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const generatePlaceholderImageUrl = (user) => {
  if (user.gender === "male") {
    return `https://avatar.iran.liara.run/public/boy?username=${user.username}`;
  } else if (user.gender === "female") {
    return `https://avatar.iran.liara.run/public/girl?username=${user.username}`;
  } else {
    return "https://avatar.iran.liara.run/public";
  }
};

const OtherUser = ({ user }) => {
  const placeholderImageUrl = generatePlaceholderImageUrl(user);

  const dispatch = useDispatch();
  
  const {selectedUser, onlineUsers} = useSelector(store=> store.user)
  const isOnline = onlineUsers.includes(user._id)
  const selectedUserHandler = (user) => {

    dispatch(setSelectedUser(user));
    
  };

  return (
    <div className="p-1">
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${selectedUser?._id ===user?._id ? 'bg-zinc-100 ': ''}flex flex-col sm:flex-row gap-2 items-center hover:bg-zinc-100 rounded p-2 cursor-pointer w-full max-w-lg border border-zinc-100 border-opacity-10`}
      >
        <div className={`avatar ${isOnline ? 'online' : ''} online`}>
          <div className="w-12 rounded-full">
            <img
              src={user.profilePhoto || placeholderImageUrl}
              alt="profile-img"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 text-center sm:text-left">
          <div className="flex gap-1">
            <p className="text-xl">{user.username}</p>
          </div>
        </div>
        <div className="divider my-0 py-0 h-0 hidden sm:block"></div>
      </div>
    </div>
  );
};

export default OtherUser;
