import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch import

const MessageContainer = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <>
      {
        selectedUser !== null ? (
          <div className='md:min-w-[550px] flex flex-col'>
            <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
              <div className={`avatar ${isOnline ? 'online' : ''}`}>
                <div className='w-12 rounded-full'>
                  <img src={selectedUser?.profilePhoto} alt="user-profile" />
                </div>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='flex justify-between gap-2'>
                  <p>{selectedUser?.fullName}</p>
                </div>
              </div>
            </div>
            <Messages />
            <SendInput />
          </div>
        ) : (
          <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>Hi, {authUser?.username} </h1>
            <h1 className='text-2xl text-white'>Let's start conversation</h1>
          </div>
        )
      }
    </>
  );
}

export default MessageContainer;

{/* // <div>
//   <div className="flex flex-col h-screen">
//     <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
//       <h2 className="font-semibold">Dummy User</h2>
//       <span className="text-sm">Last seen recently</span>
//     </div>
//     <div className="flex-grow overflow-y-auto p-4 bg-gray-900" style={{ backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="flex flex-col space-y-4">
//         <div className="flex items-start">
//           <div className="w-8 h-8 rounded-full bg-gray-700 mr-2"></div>
//           <div className="bg-gray-800 rounded-lg p-2 max-w-xs">
//             <p className="text-gray-300">Hey there!</p>
//           </div>
//         </div>
//         <div className="flex items-end justify-end">
//           <div className="bg-green-700 text-white rounded-lg p-2 max-w-xs">
//             <p>Hi! How can I help you?</p>
//           </div>
//           <div className="w-8 h-8 rounded-full bg-gray-700 ml-2"></div>
//         </div>
//         <div className="flex items-start">
//           <div className="w-8 h-8 rounded-full bg-gray-700 mr-2"></div>
//           <div className="bg-gray-800 rounded-lg p-2 max-w-xs">
//             <p className="text-gray-300">I need help with a project.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="flex items-center p-4 bg-gray-800">
//       <input
//         className="flex-grow border rounded-lg px-4 py-2 focus:outline-none bg-gray-700 text-white"
//         type="text"
//         placeholder="Type your message..."
//       />
//       <button className="ml-2 bg-green-700 text-white rounded-lg px-4 py-2">
//         Send
//       </button>
//     </div>
//   </div>
// </div> */}
