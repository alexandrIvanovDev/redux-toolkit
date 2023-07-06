import React from 'react';
import './App.css';
import {UserList} from './components/UserList';
import {PostsList} from './components/PostsList';
import {PostsList2} from './components/PostsList2';

function App() {
    return (
        <div className="App">
            <UserList/>
            <div style={{display: 'flex'}}>
                <PostsList/>
                {/*<PostsList2/>*/}
            </div>
        </div>
    );
}

export default App;