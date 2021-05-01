import React from 'react';
import './UserOrderItemDetail.css'

const UserOrderItemDetail = (props) => {
    // console.log(props.bookItem);
    const { name, author, imageUrl, price } = props.bookItem;
    return (
        <div>
            <div className="home-container">
                <div className="card card-container border-0 box-shadow-sm">
                    <img className=" p-2" src={imageUrl} alt="" />
                    <div className="card-body p-1 border-0 m">
                        <h5 className="card-title p-0 text-white">{name}</h5>
                        <p className="card-text p-0 text-white">{author}</p>

                    </div>
                    <div class="d-grid gap-2">
                        <button className="btn btn-primary " type="button">${price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrderItemDetail;