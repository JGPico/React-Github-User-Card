import React from "react";

const UserCard = props => {
    console.log("Props ", props);
    return (
        <div className='card-wrapper'>
            <div className='card-holder'>
                <img width='200' height='200' src={props.user.avatar_url} alt='A user'/>
                <p>{props.user.name}</p>
            </div>
            
            {props.followers.map(element => (
                <div className='card-holder' key={element.id}>
                    <img width='200' height='200' src={element.avatar_url} alt='A user'/>
                    <p>{element.login}</p>
                </div>
            ))}
        </div>
    )
}

export default UserCard;