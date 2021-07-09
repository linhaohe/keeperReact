import React from 'react';

function note(props) {
    const handleClick= ()=>{
        props.deleteNotes(props.id);
    }
    return (
        <div className="note">
            <h1 style={
                {
                    fontSize: "1.1rem",
                    marginBottom: "6px"
                }
            }>
                {
                props.title
            }</h1>
            <p style={{paddingBottom:"20px"}}>{
                props.content
            }</p>
            <button className="button" onClick={handleClick}>delete</button>
        </div>
    );
}

export default note;
