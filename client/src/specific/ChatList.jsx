import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../components/shared/ChatItem'

const ChatList = ({w="100%", chats=[],chatId,onlineUser=[],newMessagesAlert=[{
  chatId:"1",
  cout:0,
},],handleDeleteChat,}) => {
  return (
    <Stack width={w} direction={"column"}>
{chats?.map((data, index)=>{
const {avatar, _id, name, groupChat,members} = data

  return <ChatItem />
})}
    </Stack>
  )
}

export default ChatList