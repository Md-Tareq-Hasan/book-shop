import React, { useEffect, useState } from 'react';
import Delete from '../../../icons/Group 33150.png';
import './DeleteEvent.css';

const DeleteEvent = () => {
    // const [dummyState,rerender] = React.useState(1);
    const [bookInfo, setBookInfo] = useState([]);
    useEffect(() => {
        fetch('https://still-castle-68559.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBookInfo(data);

            })

    }, [bookInfo])
    const handleDelete = (id) => {
        const uri = `https://still-castle-68559.herokuapp.com/delete/${id}`
        fetch(uri, {
            method: 'Delete'
        })
            .then(res => res.json())

    }
    return (
        <div className="delete-event-container ">
            <table class="table table-striped table-hover tb">
                <thead className="table-info">
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    bookInfo.map(bookInfo =>
                        <tbody>
                            <tr>
                                <td>{bookInfo.name} </td>
                                <td>{bookInfo.author} </td>
                                <td>{bookInfo.price} </td>
                                <td><button className="delete-btn"><img onClick={() => handleDelete(bookInfo._id)} src={Delete} alt="" /></button></td>
                            </tr>
                        </tbody>)}
            </table>
        </div>
    );
};

export default DeleteEvent;