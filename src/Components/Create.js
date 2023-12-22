import { useState } from "react";
import axios from "axios";

{/*create application*/}


function Create(){

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Make "+make+
        "model: "+model+
        "Color: "+color);

{/*I added a post method on the Express Server that will console log both the title, cover abd author.*/}
        const car = {
            make:make,
            model:model,
            color:color,
        };
        axios.post('http://localhost:4000/api/cars', car)
        .then()
        .catch();

    }


{/*Modifed the Create component so that it includes a form that will upload data
to a server.*/}

    return(
        <div>
            <h2>Hello from my Create component</h2>
            <form onSubmit={handleSubmit}>


                <div className="from-group">
                    <label>Add Car Make</label>
                    <input type="text"
                    className="from-control"
                    value={make}
                    onChange={(e) => {setMake(e.target.value)}}

                    />
                </div>

                <div className="from-group">
                    <label>Add Car Model</label>
                    <input type="text"
                    className="from-control"
                    value={model}
                    onChange={(e) => { setModel(e.target.value)}}
                    
                    />
                </div>

                <div className="from-group">
                    <label>Add Car Color</label>
                    <input type="text"
                    className="from-control"
                    value={color}
                    onChange={(e) => {setColor(e.target.value)}}
                    
                    />
                </div>
<div>

    {/*made a submit button*/}

                <input
                type="submit"
                value="Create car">
                </input>
                </div>

            </form>

        </div>
        );
    
    
    }
    export default Create;