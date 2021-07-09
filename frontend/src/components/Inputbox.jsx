import React from "react";

function InputBox(props) {
    const [note, setNote] = React.useState({title: "", content: ""});
    const {title, content} = note;
    const handleChange = (event) => {
        const {value, name} = event.target;
        setNote(() => {
            if (name === "title") {
                return({title: value, content: content})
            } else {
                return({title: title, content: value});
            }
        })
    }

    const postRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }
    const handleClick = (event) => {
        event.preventDefault();
        fetch('http://localhost:9000/post', postRequest).then(response => response.json()).then(id => props.addNotes({...note,id}));
        setNote({title: "", content: ""});
    }
    return (
        <div className="inputBox">
            <form>
                <input name="title" type="text" placeholder="Title"
                    onChange={handleChange}
                    value={title}/>
                <textarea name="content" placeholder="Take a note..." rows="3"
                    onChange={handleChange}
                    value={content}/>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default InputBox;
