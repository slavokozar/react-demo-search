import React, {useState} from 'react';

export default function Results( props ) {
    if ( props.results.length === 0 ) {

        return (
            <p>No results found :(</p>
        )
    }

    return (
        <div className="results">
            {
                props.results.map( result => (
                    <div key={result.id} className="result">
                        <div onClick={(e) => {
                            alert('user clicked on movie', result.imdbID);
                        }}>
                            <img src={result.Poster} alt=""/>
                            <div className="name">{result.Title}</div>
                            <div className="year">{result.Year}</div>
                        </div>
                    </div>
                ) )
            }
        </div>
    )
}