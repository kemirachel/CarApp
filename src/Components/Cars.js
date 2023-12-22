
import CarItem from "./CarItem";

{/*car application*/}


function Cars(props){
    return props.mycars.map(
        (car) => {
            return <CarItem mycar={car} key={car.id} reload={() =>(props.Reload())}></CarItem>
        }
        
        );
    
    
    }
    export default Cars;