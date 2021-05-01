import React from 'react';
import './AdminSideBar.css'
import { Link, useHistory } from 'react-router-dom';
import grid from '../../../icons/grid 1.png';
import edit from '../../../icons/edit 1.png';
import plus from '../../../icons/plus 1.png';


const AdminSidebar = () => {
    let history = useHistory();
    const handleManageBook = () => {
        history.push('/admin/deleteItem');
    }
    const handleAddbook = () => {
        history.push('/admin/addbook');
    }
    const handleEditBook = () => {
        history.push('/admin/editbook');
    }
    return (
        <div className="sidebar-container">
            <h4 className="sidebar-header">ONNOROKOM BOOKSHOP</h4>
            <div className="sidebar-nav">
                <button className="sidebar-btn" onClick={handleManageBook}
                ><i><img src={grid} alt="" /></i>Manage Books</button>
                <button className="sidebar-btn" onClick={handleAddbook}><i><img src={edit} alt="" /></i>Add Book</button>
                <button className="sidebar-btn" onClick={handleEditBook}><i><img src={plus} alt="" /></i>Edit Book</button>
            </div>
        </div>
    );
};

export default AdminSidebar;