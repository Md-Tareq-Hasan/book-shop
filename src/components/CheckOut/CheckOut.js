import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { userCreate } from '../../App';
import './CheckOut.css';


const CheckOut = () => {
  const [loggedInUser, setLoggedInUser, addCart, setAddCart] = useContext(userCreate);
  // console.log(addCart);
  // console.log(addCart.name);
  const { id } = useParams();
  const history = useHistory();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const uri = `https://still-castle-68559.herokuapp.com/books/${id}`
    console.log(uri);
    fetch(uri)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [])
  console.log(order);
  const handleCheckOut = (bookData) => {
    setAddCart(bookData);
    history.push('/shipment');
  }
  // const total = addCart.reduce((total,bk)=>total+bk.price,0)
  // const total = addCart.reduce((total,prd)=>total+prd.price*prd.quantity ||1 ,0)
  // const cart =addCart.bookData;
  // console.log(addCart);

  return (
    <div>
      <div className="container mt-5 pe-5 ps-5 table-container">
        {
          order.map(addCart =>
            <table class="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{addCart.name}</td>
                  <td>1</td>
                  <td>{addCart.price}</td>
                </tr>
                <tr>
                  <td colspan="2">Total</td>
                  <td>{addCart.price}</td>
                </tr>
              </tbody>
            </table>
          )}
        <button onClick={() => handleCheckOut(order[0])} className="btn btn-primary btn-buy " type="button">CheckOut</button>
      </div>
    </div>
  );
};

export default CheckOut;