import React, { useState, useEffect } from "react";
import {useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";



const TeamChannelList = ({chidren,error=false,loading,type}) => {
    if(error){
        return type==="team"?(
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connections error , Please wait a moment and try again
                </p>
            </div>
        ):null
    }
    if(loading){
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type==="team"?"Channels":"Message"}loading
                </p>
            </div>
        )
    }

    return (
        <div className="team-channel-list">
        <div className="team-channel-list__header">
            <p className="team-channel-list__header__title">
            {type==="team"?"Channels":"Direct Message"}
            </p>
        </div>
        {chidren}
    </div>
    );
}
export default TeamChannelList;