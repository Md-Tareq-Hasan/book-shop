import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { userCreate } from '../../../App';
import "./AddBook.css";

const AddBook = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    const onSubmit = data => {
        // console.log(data.name);
        console.log(imageURL);
        const eventData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imageUrl: imageURL
        }
        const newData = { ...loggedInUser, ...eventData }
        // console.log(eventData);
        alert('subit sucess')

        const uri = `https://still-castle-68559.herokuapp.com/addEvent`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
            .then(res => console.log("object"))
    }
    const handleImageUpload = event => {
        // console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '1e64657ee4dd11c6052c4bae8611f09f');
        imageData.set('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="form-container">
            <h4 className="input-header">Add Book</h4>
          <div className="form">
          <form  onSubmit={handleSubmit(onSubmit)}>
         <div className="input-container">
         <div className="input-container-div">
             <h5 className="input-header">Book Name</h5>
                    <input className="form-input" name="name" defaultValue=""  ref={register} />
                </div>
                    <div>
                    <h5 className="input-header">Author Name</h5>
                        <input className="form-input" name="author"  defaultValue=""  ref={register} />
                    </div>
                <div>
                    <h5 className="input-header">Add Price</h5>
                    <input className="form-input" name="price"  defaultValue=""  ref={register} />
                </div>

                <div className="upload-img">
                    <h5 className="input-header">Add Book Cover Image</h5>
                    <input className="img-upload-submit" onChange={handleImageUpload} name="imageURL"   id ="file" type='file' ref={register} />
                    <label className="label" for="file">
                    <i className="fas fa-image"></i>&nbsp;Choose a Photo
                    </label>
                </div>
         </div>

              <div className="btn-submit">  <input className="input-submit" type="submit" /></div>
            </form>
          </div>
        </div>
    );
};

export default AddBook;