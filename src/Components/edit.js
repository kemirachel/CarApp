import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Edit(props) {

{/*hThe useParams hook returns an object of key/value pairs of */}
{/*the dynamic params from the current URL that were matched by*/}
{/*the <Route path>.*/}
let { id } = useParams();

{/*update arrays using the React useState()*/}
{/*and without the Array objects push() method*/}
const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [color, setColor] = useState('');


{/*useNavigate return a function that we can use to navigate*/}
const navigate = useNavigate();

{/*useEffect Hook is similar componentDidMount*/}
useEffect(() => {
{/*axios is a promised based web client*/}
{/*make a HTTP Request with GET method and pass as part of the*/}
//url.
axios.get('http://localhost:4000/api/car/' + id)
.then((response) => {

// Assign Response data to the arrays using useState.
setMake(response.data.make);
setModel(response.data.model);
setColor(response.data.color);
})
.catch(function (error) {
console.log(error);
})
}, []);
const handleSubmit = (event) => {
event.preventDefault();
const newcar = {
id: id,
make: make,
model: model,
color: color
};

axios.put('http://localhost:4000/api/car/' + id, newcar)
.then((res) => {
console.log(res.data);
navigate('/read');
});
}

return (
<div>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label>Add car Make: </label>
<input type="text"
className="form-control"
value={make}
onChange={(e) => setMake(e.target.value)}
/>
</div>
<div className="form-group">
<label>Add car model: </label>
<input type="text"
className="form-control"
value={model}
onChange={(e) => setModel(e.target.value)}
/>
</div>
<div className="form-group">

<label>Add car color: </label>
<input type="text"
className="form-control"
value={color}
onChange={(e) => setColor(e.target.value)}
/>
</div>
<div className="form-group">
<input type="submit" value="Edit car" className="btn btn-primary" />
</div>
</form>
</div>
);
}