import { useEffect, useState } from 'react';
import Cars from "./Cars";
import axios from "axios";

{/*Added a new component written as a function called cars to our read component. */}

{/*Added the some JSON to the read component and store it in a const variable. */}

function Read(){
    const [data, setData] = useState([]);

{/* Used the react hook, useEffect and synchronized a component with an external system.*/}

{/* Made a http get call that will return the json data */}
{/* Add axios to our project, axios is a Promise based HTTP client.*/}

useEffect(()=>{

    axios.get('http://localhost:4000/api/cars')
    .then(
        (response)=>{
            setData(response.data);
        }
    )
    .catch(
        (error)=>{
            console.log(error);

        }
    );

}, []);

const ReloadData = (e)=>{
    axios.get('http://localhost:4000/api/cars')
    .then(
        (response)=>{
            setData(response.data);
        }
    )
    .catch(
        (error)=>{
            console.log(error);

        }
    );
}

return(
    <div>

        <h2>Hello from my Read component</h2>
        <Cars mycars={data} Reload= {ReloadData}></Cars>

    </div>
    );


}
export default Read; 