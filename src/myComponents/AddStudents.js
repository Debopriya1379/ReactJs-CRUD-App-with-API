import React from 'react';
import "./AddStudents.css";

const AddStudents = () => {
    return (
        <div className="AddStudents">
            <h2>Add Students</h2>
            <form action="">
                <input type="text" /> <br />
                <input type="text" /> <br />
                <input type="button" value="Add" />
            </form>
        </div>
    )
}

export default AddStudents
