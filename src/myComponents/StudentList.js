import {useState,useEffect} from 'react';
import "./StudentList.css";
import SinglleStudent from "./SinglleStudent";
import axios from "axios";

const StudentList = () => {

    const [Studs, setStuds] = useState([]);

    useEffect(() => {
        async function getAllStudents() {
            try {
                const students = await axios.get('http://localhost:3333/students')
                console.log("fetching db.json");
                setStuds(students.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getAllStudents();
    }, [])

    return (
        <div className="StudentList">
            <h2>Students List</h2>
            {
                Studs.map((student,i) => {
                    return(
                    <SinglleStudent key={i} stud={student} />
                    )
                })
            }
        </div>
    )
}

export default StudentList
