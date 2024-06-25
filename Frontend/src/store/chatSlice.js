import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: []
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addChat: (state, action) => {
            const chat = {
                isAuthor: action.payload.isAuthor,
                text: action.payload.text
            }
            state.chats.push(chat)
        },
        setChats: (state, action) => {
            state.chats = action.payload
        }
    }
})

export const { addChat, setChats } = chatSlice.actions

export default chatSlice.reducer