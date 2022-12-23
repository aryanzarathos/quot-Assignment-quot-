import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { postAdminCourseList, postAdminCourseListRESET } from '../store/Actions/user';


const AddUser = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const goHome = () => history.push('/');

    const { PostlistSuccess, PostlistData, PostlistLoading } = useSelector((state) => {
        return {
            PostlistData: state.user.create.data,
            PostlistSuccess: state.user.create.success,
            PostlistLoading: state.user.create.loading,
        }
    })
    useEffect(() => {
        if (PostlistSuccess) {
            goHome()
            dispatch(postAdminCourseListRESET())
        }
    }, [PostlistSuccess])

    const [mobileNumber, setMobileNumber] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [img, setImg] = useState('');


    const addUser = (data) => {
        dispatch(postAdminCourseList(data))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (name === '') {
            setNameError(true)
        } else if (mobileNumber === '') {
            setMobileError(true)
           

        } else {
            addUser({ contact: mobileNumber, name: name, img: img });
            goHome();
            setMobileNumber("")
            setName("")
            setImg("")
            setNameError(false)
            setMobileError(false)
        }

      
    }
    return (

        <div style={{ margin: 120 }}>

            <form onSubmit={submitHandler} className="form-group">

                <input style={{ margin: 20 }} name="title" className="form-control"
                    onChange={(event) => setName(event.target.value)}
                    type="text" value={name} placeholder="Enter User Name" />
                {nameError && <p style={{ margin: 20, background: 'red' }}>Enter User Name</p>}

                <input style={{ margin: 20 }} name="User" className="form-control"
                    onChange={(event) => setMobileNumber(event.target.value)}
                    type="text" value={mobileNumber} placeholder="Enter Mobile Number" />
                {mobileError && <p style={{ margin: 20, background: 'red' }}>Enter Mobile Number</p>}


                <input style={{ margin: 20 }} type='file'></input>
                {
                    PostlistLoading ? (
                        <button style={{ margin: 20 }} className="btn btn-primary" type="button" >
                            Loading..
                        </button>
                    ) : (
                        <button style={{ margin: 20 }} onClick={submitHandler} className="btn btn-primary" type="submit" >
                            Submit
                        </button>
                    )
                }

            </form>
        </div>
    )

}

export default AddUser;
