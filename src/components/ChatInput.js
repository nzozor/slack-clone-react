import { Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from 'firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function ChatInput({channelId, channelName, chatRef}) {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);
  const sendMessage = e => {
    e.preventDefault(); // prevents refresh 
    if (!channelId) {
      return false;
    } 
    console.log(firebase.firestore.FieldValue.serverTimestamp());
    db.collection('rooms').doc(channelId).collection("messages").add({
      message: input,
      timestamp: new Date(),
      user: user.displayName,
      userImage: user.photoURL
    });

    chatRef.current.scrollIntoView({
      behaviour: "smooth"
    })
    
    setInput('');
  }
  return (
    <ChatInputContainer>
      <form>
        <input value={input} onChange={ e => setInput(e.target.value)}placeholder={`Message #${channelName} `}/>
        <Button hidden type='submit' onClick={sendMessage} />
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput


const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    height: 40px;
    border: 1px solid gray;
    border-radius:3px;
    outline: none;
  }
`;