import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { editAdminCourseList, getSingleAdminCourseList, postAdminCourseListRESET } from '../store/Actions/user';

const EditUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getSingleAdminCourseList(id))
    },[id])

    const goHome = () => history.push('/');

    const { EditSelectionlistData,
        EditSelectionlistSuccess, 
        EditlistLoading,
        EditSelectionlistLoading,
        EditlistSuccess } = useSelector((state) => {
            return {
                EditSelectionlistData: state.user.editSelection.data,
                EditSelectionlistLoading: state.user.editSelection.loading,
                EditSelectionlistSuccess: state.user.editSelection.success,
                EditlistData: state.user.edit.data,
                EditlistLoading: state.user.edit.loading,
                EditlistSuccess: state.user.edit.success,
            }
        })
    useEffect(() => {
        if (EditlistSuccess) {
            goHome()
            dispatch(postAdminCourseListRESET())
        }
    }, [EditlistSuccess])
   

    const [mobileNumber, setMobileNumber] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [img, setImg] = useState('');

    useEffect(() => {
        if (EditSelectionlistSuccess && EditSelectionlistData) {
            setMobileNumber(EditSelectionlistData.contact)
            setName(EditSelectionlistData.name)
            setImg(EditSelectionlistData.img)
        }
    }, [EditSelectionlistSuccess])

    const UpdateUser = (data) => {
        dispatch(editAdminCourseList(data,EditSelectionlistData._id))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (name === '') {
            setNameError(true)
         
        } else if (mobileNumber === '') {
            setMobileError(true)
        } else {
            UpdateUser({ contact: mobileNumber, name: name, img: img });
            setMobileNumber("")
            setName("")
            setImg("")
            setNameError(false)
            setMobileError(false)
        }

    
    }
    return (
        <>{!EditSelectionlistLoading &&
            EditSelectionlistSuccess
        ?(
            <div style={{ margin: 120 }}>
        
            <form onSubmit={submitHandler} className="form-group">
        
                <input style={{ margin: 20 }} name="title" className="form-control"
                    onChange={(event) => setName(event.target.value)}
                    type="text" value={name} placeholder="Enter User Name" />
                {nameError && <p style={{ margin: 20, background: 'red' }}>Enter User Name</p>}
        
                <input style={{ margin: 20 }} name="User" className="form-control"
                    onChange={(event) => setMobileNumber(event.target.value)}
                    type="text" value={mobileNumber} placeholder="Enter User Number" />
                {mobileError && <p style={{ margin: 20, background: 'red' }}>Enter Mobile Number</p>}
        
        
                <input style={{ margin: 20 }} type='file'></input>
                {
                    EditlistLoading ? (
                        <button style={{ margin: 20 }} className="btn btn-primary" type="button" >
                            Loading..
                        </button>
                    ) : (
                        <button style={{ margin: 20 }} onClick={submitHandler} className="btn btn-primary" type="submit" >
                            Update
                        </button>
                    )
                }
        
            </form>
        </div>
        ):(
            "LOADING....."
        )
        }
        </>

       
    )

}

export default EditUser;
