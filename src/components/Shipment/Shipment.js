import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userCreate } from '../../App';
import "./Shipment.css"
const Shipment = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser, addCart, setAddCart] = useContext(userCreate);
  const onSubmit = data => {
    // console.log('form submitted', data)
    // const savedCart = getDatabaseCart();
    console.log(addCart);
    const orderDetails = { ...loggedInUser, order: addCart, shipment: data, orderTime: new Date() }
    console.log(orderDetails);
    fetch('https://still-castle-68559.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          // processOrder();
          alert('Oppps!!!Your order placed successfully')
        }
      })
  };



  return (
    <div>
      <div>
        <form className="shipment-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}
          <br />
          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}
          <br />
          <input name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}
          <br />
          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}
          <br />
          <input className="submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;