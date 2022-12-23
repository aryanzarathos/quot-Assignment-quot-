import React, { useEffect } from 'react';
// import UserDetail from './UserDetail';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminCourseList, getAdminCourseList } from '../store/Actions/user/index';
import { useHistory } from "react-router-dom";
const UserList = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { GetlistSuccess, GetlistData, GetlistLoading } = useSelector((state) => {
        return {
            GetlistData: state.user.list.data,
            GetlistSuccess: state.user.list.success,
            GetlistLoading: state.user.list.loading,
        }
    })
    

    useEffect(() => {
        dispatch(getAdminCourseList())
    }, [])

    const removeUser=(id)=>{
        dispatch(deleteAdminCourseList(id))
    }
    const EditUser=(id)=>{
        history.push(`/EditUser/${id}`)
        // dispatch(update(id))
    }

    return (
        <React.Fragment>
            {
                !GetlistLoading && GetlistSuccess ? (
                    GetlistData.length ?
                        <div className="card">
                            <table>
                                <thead>
                                    <tr class="row100 head">
                                        <th class="cell100 column2">So. Number</th>
                                        <th class="cell100 column3">Name</th>
                                        <th class="cell100 column4">Contact</th>
                                        <th class="cell100 column5">Edit</th>
                                        <th class="cell100 column6">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {GetlistData.map((item, key) => {
                                        return (
                                            <tr>
                                                <td  style={{ margin: 120 }}>{key+1}</td>
                                                <td  style={{ margin: 120 }}>{item.name}</td>
                                                <td  style={{ margin: 120 }}>{item.contact}</td>
                                                <td><button  style={{ margin: 10 }} onClick={()=>EditUser(item._id)} >Edit</button></td>
                                                <td><button  style={{ margin: 10 }} onClick={() =>removeUser(item._id)}>Remove</button></td>
                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </table>
                        </div> :
                        <div className="card text-center">
                            <div className="card-header">
                                User List
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Currently No Listing</h5>
                                <p className="card-text">Add Your Reading List.</p>
                            </div>
                        </div>
                ) : (
                    "Loading....."
                )
            }
        </React.Fragment>

    );

}
export default UserList;
