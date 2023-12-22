
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom';
import axios from 'axios';


{/*Added functional component called carItems to application*/}

      {/*Added the edit functionality for the application. When a user clicks the edit button a
    new window will open with the entire car shown on this new component.*/}

function CarItem(props){

    {/*added a map function to split the array of cars
into individual cars. */}

    return(
        <div>
     {/*Added cars comonents to application*/}

 <Card>
      <Card.Body>{props.mycar.make}</Card.Body>
      {/*link to edit a finished car item */}
      <Link to={"/edit/" +props.mycar._id} className = 'btn btn-primary'>Edit</Link>
      {/*added a delet button */}
            <Button onClick={(e) => {
                e.preventDefault();
                axios.delete('http://localhost:4000/api/car/' +props.mycar._id)
                .then((res)=>{
                    props.reload();
                })
                .catch();

            }}className='btn btn-danger'>Delete</Button>
 </Card>

    <img src={props.mycar.make}></img>
    <p>{props.mycar.model}</p>
        </div>
    );


}
export default CarItem;