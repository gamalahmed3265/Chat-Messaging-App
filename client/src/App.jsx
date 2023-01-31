import React from "react";
import { StreamChat } from 'stream-chat';
import { Chat } from "stream-chat-react";
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';
import "./App.css";

const cookies=new Cookies();

const apiKey = "1232032";
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);

if(authToken){
    client.connectUser({
        username:cookies.get('username'),
        fullname:cookies.get('fullname'),
        userId:cookies.get('userId'),
        phonenum:cookies.get('phonenum'),
        avatarurl:cookies.get('avatarurl'),
        hashePassword:cookies.get('hashePassword')
    },authToken)
}
const App = () => {
    if (!authToken) return <Auth />;
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    );
}

export default App;