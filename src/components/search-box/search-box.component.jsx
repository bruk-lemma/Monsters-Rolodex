import react from "react";
import './style.css';

export const SearchBox=({placeholder,handlechange})=>{
    return(
        <input className="search" type="search" placeholder={placeholder}
    onChange={handlechange} />
    );
}