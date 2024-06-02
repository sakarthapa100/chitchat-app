import React from 'react'

const OtherUser = () => {
  return (
    <div>
        <div className="p-1">
      <div className="flex flex-col sm:flex-row gap-2 items-center hover:bg-zinc-100 rounded p-2 cursor-pointer w-full max-w-lg border border-zinc-100 border-opacity-10">
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
        <div className="divider my-0 py-0 h-0 hidden sm:block"></div>
      </div>
    </div> 
    </div>
  )
}

export default OtherUser