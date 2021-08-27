import "./SingleStudent.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const SinglleStudent = (props) => {

    return (
        <div className="SingleStudent">
            <div>
                {props.stud.stuname}
            </div>
            <div>
                {props.stud.email}
            </div>
            <div>
                <VisibilityIcon /> <EditIcon /> <DeleteIcon />
            </div>
        </div>
    )
}

export default SinglleStudent
