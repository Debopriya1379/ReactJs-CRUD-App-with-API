import axios from 'axios';
import {useState} from 'react';
import "./AddStudents.css";

const AddStudents = () => {

    const [newStud,setNewStud]=useState(
        {
            stuname : "",
            email : ""
        }
    );
    // const [status,setStatus] =useState();

    function onTextChange(e){
        setNewStud({
            ...newStud,
            [e.target.name] : e.target.value
        })
    }



    async function handleSubmit (e){
        e.preventDefault();
        // if(! stuname || ! email){
        //     alert("Student Name And Email acannot be blanked");
        // }
        // else{
            try{
                await axios.post(`http://localhost:3333/students`,newStud)
                // setStatus(true);
                // e.target.reset();
            }
            catch(error){
                console.log(error);
            }
       // }

    };
    // if(status){
    //     return <Home/>
    // }
    return (
        <div className="AddStudents">
            <h2>Add Students</h2>
            <form onSubmit={e=>handleSubmit(e)}>
                <input type="text" name="stuname" id="stuname" onChange={e => onTextChange(e)} /> <br />
                <input type="text" name="email" id="email" onChange={e => onTextChange(e)} /> <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddStudents
