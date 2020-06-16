import React from 'react';
import {axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component{
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                this.setState({friends: res.data})
            })
            .catch(err => console.log(err))
    };
    render(){

        return(
        <div>{this.state.friends.map( (friend) => (
            <div className = 'card'>
            <h2>{friend.name}</h2>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
            </div>
        ))}

         </div>
        )}
}

export default FriendsList;