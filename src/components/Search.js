import React, { useState } from "react";
import "../components/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();  


    console.log("You hit the search button >> ", input)

    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })

    navigate("/search")
};


    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__input--icon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

        {!hideButtons ? (
            <div className="search__buttons search__buttons--hidden">
                <Button type="submit" onClick={search} variant="outlined">
                Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        ): (
            <div className="search__buttons search__buttons--hidden">
                <Button type="submit" onClick={search} variant="outlined">
                Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        )}
        </form>
    );
}

export default Search