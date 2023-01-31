import React from "react";
import {ChannelList,useChatContext} from "stream-chat-react";
import Cookies from 'universal-cookie';
import HospitalIcon from "../assets/hospital.png";
import LogoutlIcon from "../assets/logout.png";

import { ChannelSearch,TeamChannelList,TeamChannelPreview } from "./";
const SliderBar=()=>
    (
        <div className="channel-list__sidebar">
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src={HospitalIcon} alt="hospital" width="30" />
                </div>
            </div>
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src={LogoutlIcon} alt="logout" width="30" />
                </div>
            </div>
        </div>
    );


const CompanyHeader=()=>{
    return (
            <div className="channel-list__header">
                <p className="channel-list__header__text">Medical Paper</p>
            </div>
    );
}
const ChannelListContainer=()=>{
    return (
        <>
            <SliderBar/>
            <div className="channel-list__list__wrapper">
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listPros)=>(
                        <TeamChannelList
                        {...listPros}
                        type="team"
                        
                        />
                    )}
                    Preview={(previewProps)=>(
                        <TeamChannelPreview
                        {...previewProps}
                        type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listPros)=>(
                        <TeamChannelList
                        {...listPros}
                        type="messaging"
                        
                        />
                    )}
                    Preview={(previewProps)=>(
                        <TeamChannelPreview
                        {...previewProps}
                        type="team"
                        />
                    )}
                />
            </div>
        </>
    );
}

export default ChannelListContainer;