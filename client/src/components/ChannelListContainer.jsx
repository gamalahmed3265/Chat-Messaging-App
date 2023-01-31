import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from 'universal-cookie';
import HospitalIcon from "../assets/hospital.png";
import LogoutlIcon from "../assets/logout.png";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

const cookies = new Cookies();

const SliderBar = ({logout}) =>
(
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner" onClick={logout} >
                <img src={LogoutlIcon} alt="logout" width="30" />
            </div>
        </div>
    </div>
);


const CompanyHeader = () => {
    return (
        <div className="channel-list__header">
            <p className="channel-list__header__text">Medical Paper</p>
        </div>
    );
}
const ChannelListContainer = () => {
    const logout = () => {
            cookies.remove('username');
            cookies.remove('fullname');
            cookies.remove('userId');
            cookies.remove('phonenum');
            cookies.remove('avatarurl');
            cookies.remove('hashePassword');
            cookies.remove('token');

            window.location.reload();
    }
    return (
        <>
            <SliderBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listPros) => (
                        <TeamChannelList
                            {...listPros}
                            type="team"

                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listPros) => (
                        <TeamChannelList
                            {...listPros}
                            type="messaging"

                        />
                    )}
                    Preview={(previewProps) => (
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