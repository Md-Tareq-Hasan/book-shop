import React, { useContext } from 'react';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import AddBook from '../AddBook/AddBook';
import AdminSidebar from '../AdminSideBar/AdminSidebar';
import DeleteEvent from '../DeleteEvent/DeleteEvent';
import { userCreate } from '../../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    return (
        <div>
            <Router>
                <div className='admin-container'>
                    <div className='sidebar-container'>
                        <div className="sidebar">    <AdminSidebar></AdminSidebar></div>
                    </div>
                    <div className='edit-side-container'>
                        <Switch>
                            <Route path="/admin/addbook">
                                <AddBook></AddBook>
                            </Route>
                            <Route path="/admin/deleteItem">
                                <DeleteEvent></DeleteEvent>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Admin;