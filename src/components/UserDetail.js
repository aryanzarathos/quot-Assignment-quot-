import React, { useState } from 'react';
import EditUser from './EditUser';

const UserDetail = ({ User }) => {

    const removeUser=()=>{

    }
    const editUser=()=>{

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
                        <h5 className="card-title">{User.title}</h5>
                        :
                        <EditUser id={User.id} title={User.title} editUser={editUser} setTrue={setTrue} />}
                <p className="blockquote-footer">{User.author}</p>
            </div>
        </div>


    );
};

export default UserDetail;