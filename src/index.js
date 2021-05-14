import React from 'react';
import ReactDom from 'react-dom';
import profile1 from './image/1.jpg';
import profile2 from './image/2.png';
import profile3 from './image/3.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className="ui comments">
            <UserCard>
                <SingleComment name="Alex"
                date="Today at 5:00pm"
                text = "Its amazing"
                picture = {profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment name="Jack" 
                date="Today at 6:00pm" 
                text = "Nice bro"
                picture = {profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment name="Sarah" 
                date="Today at 7:00pm" 
                text = "Dope work"
                picture = {profile3}
                />
            </UserCard>
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)