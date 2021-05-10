import React, {useState} from 'react';

import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

import './MessageSender.css';

export default function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender-top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                        className="messageSenderInput" 
                        placeholder={`What's in you mind, ${user.displayName}?`} 
                        onChange= {(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <input 
                        placeholder="image URL (Optional)"
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                    />

                    <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender-bottom">
                <div className="messageSenderOption">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSenderOption">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSenderOption">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
