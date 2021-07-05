import React, {useEffect, useState} from 'react';
import Results from "./Results";

export default function Search( props ) {
    const [term, setTerm] = useState( '' );
    const [results, setResults] = useState( null );

    const onInputChange = ( e ) => {
        setTerm( e.target.value );
    }

    const onFormSubmit = ( e ) => {
        e.preventDefault();
    }

    const doSearch = async ( term ) => {
        setResults(null);
        if(term === '') return;

        const response = await fetch( 'https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=1cb1aa6d&r=json&s=' + encodeURIComponent( term ), {
            method:  'GET',
            headers: {
                'Accept':       'application/json',
                'Content-type': 'application/json'
            }
        } );

        const data = await response.json();

        if(data.Response === "True"){
            setResults(data.Search);
        }
    }

    useEffect(() => {
        doSearch(term);
    }, [term])

    return (
        <form className="search-form" onSubmit={onFormSubmit}>
            <label htmlFor="">
                Search (with React):<br/>
                <input
                    type="text"
                    name="s"
                    value={term}
                    onChange={onInputChange}
                    placeholder="Enter term"
                />
            </label>

            {
                results !== null && (
                    <Results results={ results } />
                )
            }
        </form>
    )
}