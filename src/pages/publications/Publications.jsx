import React from 'react';
import "./Publications.css";
import contents from './Contents';
import {Main_Content} from './Post'
const Profile = () => {
    return (
        <div className='App'>
            {contents.map(contents => (
                <Main_Content
                    key={contents.id}
                    photo={contents.photo}
                    name={contents.name}
                    nickname={contents.nickname}
                    content={contents.content}
                    date={contents.date}
                />
            ))}
        </div>
    );
};

export default Profile;