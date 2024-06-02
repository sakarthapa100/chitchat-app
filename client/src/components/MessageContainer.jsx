import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
const MessageContainer = () => {
  return (

<div className='md:min-w-[950px] text-black flex flex-col px-4 py-2 mb-2 rounded-lg shadow-lg " '>

        <div className="p-1 bg-zinc-50 " >
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://imgs.search.brave.com/jLTwrBSRPcoyhBJs1uPbMl500isS1N2O0JlI3BLUQoY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"
              alt="profile-img"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1  text-center sm:text-left">
          <div className="flex gap-1 ">
            <p className="text-xl ">Ram badhur</p>
          </div>
        </div>
       
      </div>
    </div> 
    <Messages />
<SendInput />
</div>

    // <div>
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
    // </div>
  );
};

export default MessageContainer;
