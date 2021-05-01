import React, { useContext, useEffect, useState } from 'react';
import { userCreate } from '../../../App';
import UserOrderItemDetail from '../UserOrderItemDetail/UserOrderItemDetail';
import './UserOrderItem.css';

const UserOrderItem = () => {
    const [bookCart, setBookCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    useEffect(() => {
        fetch('https://still-castle-68559.herokuapp.com/oderBook?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookCart(data);

            })
    }, []);
    console.log(bookCart);
    return (
        <div>
        <div className="order-item">
        {
               bookCart.map((bookItem,index)=><UserOrderItemDetail bookItem={bookItem.order} key={index}></UserOrderItemDetail>)
           }
        </div>
        </div>
    );
};

export default UserOrderItem;