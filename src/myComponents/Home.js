import React from 'react'
import AddStudents from "./AddStudents";
import StudentList from "./StudentList";
import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <AddStudents />
            <StudentList />
        </div>
    )
}

export default Home
