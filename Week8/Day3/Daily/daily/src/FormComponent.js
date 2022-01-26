import React, { useState } from "react";

export const FormComponent = props => {
    const [data, setData] = useState({destination: 'Thaildand'});

    const handleData = (e) => {
        e.preventDefault();
        props.getinfo(data);

    }
    const inputDataHandler = (e) => {
        if(e.target.type == "checkbox"){        
            data[e.target.name] == "on" 
                ? setData({...data, [e.target.name] : 'off'}) 
                : setData({...data, [e.target.name] : e.target.value});            
        }else{ 
            setData({...data, [e.target.name] : e.target.value})
        }
    }

    return(
        <div>
            <h2>Sample form</h2>
            <form onSubmit={(e)=>{handleData(e)}}>
                <input onChange={(e)=>{inputDataHandler(e)}}type='text' name='firstname' placeholder="firstname"/><br></br>
                <input onChange={(e)=>{inputDataHandler(e)}}type='text' name='lastname' placeholder="lastname"/><br></br>
                <input onChange={(e)=>{inputDataHandler(e)}}type='number' name='age' placeholder="age"/><br></br>
                <label>Male</label>
                <input onChange={(e)=>{inputDataHandler(e)}}type='radio' name='sx' value='Male'/><br></br>
                <label>Female</label>
                <input onChange={(e)=>{inputDataHandler(e)}}type='radio' name='sx' value='Female'/><br></br>

                <label>Select your destination</label>
                <select onChange={(e)=>{inputDataHandler(e)}} name="destination">
                    <option value="Thaildand">Thaildand</option>
                    <option value="Paris">Paris</option>
                    <option value="LosAngeles">Los Angeles</option>
                </select><br></br>
                <label>Dietary restrictions</label><br></br>
                <input onChange={(e)=>{inputDataHandler(e)}} name="nuts" type="checkbox"/> Nuts free<br></br>
                <input onChange={(e)=>{inputDataHandler(e)}} name="lactose" type="checkbox"/> Lactose free<br></br>
                <input onChange={(e)=>{inputDataHandler(e)}} name="vegan" type="checkbox"/> Vegan<br></br>
                <input type="submit" value="submit" name="sumbit"/>
            </form>
            
            

        </div>
    )
}

