import React from "react";
import { Link } from 'react-router-dom';
import { MdAdd } from "react-icons/md";
import "./search.css";
import { BsSearch } from "react-icons/bs";
/**
 * @param props: the method to pass the input value to Home component
 * @returns a Search component to search the employees in the application 
 */
function SearchBar(props: any) {
    const getInputValue = (e: any) => {
        props.onChange(e.target.value);
    }
    return (
        <div className="search">
            <div>
                <input className='search-input' type="text" placeholder="Search" name="search" onChange={getInputValue}></input>
                <BsSearch></BsSearch>
            </div>


 <div>
                        <Link to='/create'>
                            <span>
                                <MdAdd></MdAdd>
                            </span>
                            <span>Add employee</span>
                        </Link>
                    </div>
        </div>
    )
}

export default SearchBar;