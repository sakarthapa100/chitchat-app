import React from 'react'
import { Link } from '../../styles/StyleComponents'

const ChatItem = ({
  avatar=[],
  name,
  _id,
  groupChat= false,
  sameSender,
  isOnline,
  newMessage,
  index=0,
  handleDeleteChatOpen,
}) => {
  return (
    
    <Link to={"/chat"} onContextMenu={(e)=> handleDeleteChatOpen(e,_id,groupChat)} >
    <div style={{
      display:'flex',
      gap:"1rem",
      alignItems:"center",
      padding:"1rem",
      backgroundColor: sameSender ? "black" : "unset",
      color:sameSender ? "white" : "unset",
      justifyContent:"space-between",
    }}></div>
    </Link>
  )
}

export default memo(ChatItem)