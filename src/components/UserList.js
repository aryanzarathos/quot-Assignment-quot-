import React, { useEffect } from 'react';
import UserDetail from './UserDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminCourseList } from '../store/Actions/user/index';
const UserList = () => {

    const dispatch =useDispatch()
    const { GetlistSuccess, GetlistData,GetlistLoading } = useSelector((state) => {
        return {
            GetlistData: state.user.list.data,
            GetlistSuccess: state.user.list.success,
            GetlistLoading: state.user.list.loading,
        }
    })
    useEffect(()=>{
        dispatch(getAdminCourseList())
    },[])
    return (
        <React.Fragment>
            {
               !GetlistLoading && GetlistSuccess ? (
                    GetlistData.length ?
                        <div className="card">

                            {GetlistData.map(item => {
                                return <UserDetail User={item} key={item.id} />

                            })}

                        </div> : <div className="card text-center">
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
