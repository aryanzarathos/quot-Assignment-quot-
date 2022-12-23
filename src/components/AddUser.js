import React , { useState }  from 'react'
import { useHistory } from "react-router-dom";

  
const AddUser = () =>{
    const addUser=()=>{

    }
    const [ title ,  setTitleChangeHandler] = useState('')
    const [ author , setAuthorChangeHandler] = useState('')
    
    const history = useHistory();
    const goHome = () => history.push('/');


    const submitHandler =(event) =>{
        event.preventDefault();
        if(title === ''){
            alert('Enter User Name')
        }else if(author === ''){

            alert('Enter Author name')
            
        }else{
            addUser(title , author);
            goHome();
        }
 
        setTitleChangeHandler('');
        setAuthorChangeHandler('');
    }
    return(

        <div style={{ margin:120 }}>

        <form onSubmit={submitHandler} className="form-group"> 
        
            <input style={{ margin:20 }} name="title" className="form-control"
             onChange={(event)=> setTitleChangeHandler(event.target.value)}
            type="text" value={title} placeholder="Enter User Name" />

            <input style={{ margin:20 }} name="author" className="form-control"
            onChange={(event)=> setAuthorChangeHandler(event.target.value)} 
            type="text" value={author} placeholder="Enter Author Name"/>

            <button style={{ margin:20 }} onClick={submitHandler}  className="btn btn-primary" type="submit" > 
                    Submit
            </button>
        </form>
           

        </div>
    )

}

export default AddUser;
