import React, { useState, useEffect } from "react";
import {useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";



const ChannelSearch = () => {
    const [quary,setQuary]=useState('');
    const [loading,setLoading]=useState(false)

    const getChannel=async (text)=>{
        try{
            console.log(text);
        }catch(error){
            setQuary('');
        }
    }
    const onSearch=(event)=>{
        event.preventDefault();
        setLoading(true);
        setQuary(event.target.value);
        getChannel(event.target.value);
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>
                <input
                    placeholder="Search"
                    className="channel-search__input__text"
                    type="text"
                    value={quary}
                    onChange={onSearch}
                />
            </div>
        </div>
    );
}
export default ChannelSearch;