import React from "react";
import "./search.css";
import { useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

function SearchBar(props: any) {
    const getInputValue = (e: any) => {
        props.onChange(e.target.value);
    }
    const navigate = useNavigate()
    return (
        <div className="search">
            <div>
                <input className='search-input' type="text" placeholder="Search" name="search" onChange={getInputValue}></input>
                <BsSearch></BsSearch>
            </div>
            <div className="add-employee" onClick={() =>{
                navigate(`/create`)
            }}>
                <span>
                    <MdAdd></MdAdd>
                </span>
                <span>Add employee</span>
            </div>
        </div>
    )
}

export default SearchBar;