import React from 'react';

import { Avatar } from '@material-ui/core';

import './Story.css';

export default function Story({ image, profileSrc, title }) {
    return (
        <div className="story" style={{backgroundImage: `url(${image})`}}>
            <Avatar className="story-avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}
