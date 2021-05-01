import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userCreate } from '../../App';
import './BookDetails.css';

const BookDetails = (props) => {
    // console.log(props);
    // console.log(props.bookInfo);
    const { _id, name, author, price, imageUrl } = props.bookInfo;
    const [loggedInUser, setLoggedInUser] = useContext(userCreate)
    return (
        <div>
            <div className="home-container">
                <div className="card card-container border-0 box-shadow-sm">
                    <img className=" p-2" src={imageUrl} alt="" />
                    <div className="card-body p-1 border-0 m">
                        <h5 className="card-title p-0 text-white">{name}</h5>
                        <p className="card-text p-0 text-white">{author}</p>

                    </div>
                    <div className="card-footer d-flex justify-content-between p-2 border-0 bg-transparent">
                        <button className="btn btn-warning " type="button">${price}</button>

                        <Link to={"/checkout/" + _id}> <button className="btn btn-primary btn-buy " type="button">Buy Now</button></Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookDetails;