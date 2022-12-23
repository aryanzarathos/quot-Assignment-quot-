import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAdminCourseList } from '../store/Actions/user';
import EditUser from './EditUser';

const UserDetail = ({ User }) => {
    const dispatch = useDispatch();

    const removeUser=(id)=>{
  dispatch(deleteAdminCourseList(id))
    }


    const [isEdit, setTrue] = useState(!true)


    return (
        <div className="card" >
            <h5 className="card-header">
                <div onClick={() => removeUser(User.id)} className="btn btn-primary">Delete</div>
                {
                    isEdit === false ?
                        <div onClick={() => setTrue()} className="btn btn-primary ml-5">Edit</div>
                        :
                        <div onClick={() => setTrue(!true)} className="btn btn-primary ml-5">Back</div>
                }
            </h5>
            <div className="card-body">
                {
                    isEdit === false ?
                        <h5 className="card-title">{User.name}</h5>
                        :
                        <EditUser />}
                {/* <p className="blockquote-footer">{User.User}</p> */}
            </div>
        </div>


    );
};

export default UserDetail;