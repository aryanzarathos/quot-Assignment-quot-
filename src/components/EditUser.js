import React , { useState }  from 'react'

const EditUser = (props) =>{
    const [ title ,  setTitleChangeHandler] = useState(props.title)
    const [ id ] = useState(props.id)
    

    const submitHandler =(event) =>{
        event.preventDefault();
        if(title === ''){
            alert('Enter User Name')
        }else{
            props.editUser(id , title);
            props.setTrue(!true);
        }
 
        setTitleChangeHandler('');
    }
    return(

        <div style={{ margin:20 }}>

        <form onSubmit={submitHandler} className="form-group"> 
        
            <input style={{ margin:5 }} name="title" className="form-control"
             onChange={(event)=> setTitleChangeHandler(event.target.value)}
            type="text" value={title} placeholder="Enter User Name" />

     
            <button style={{ margin:20 }} onClick={submitHandler}  className="btn btn-primary" type="submit" > 
                    Update
            </button>
        </form>
           

        </div>
    )

}

export default EditUser;
