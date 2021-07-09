import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import InputBox from "./Inputbox.jsx";

function App() {
    const [notes, setNotes] = React.useState([]);
    const addNotes = (item) => {
        setNotes(pre => ([
            ...pre,
            item
        ]));
    }

    const deleteNotes = (target) =>{
        console.log(target)
        setNotes(pre=>(
            pre.filter((current,index)=>(
                index!==target
            ))
        ))
        const deleteRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(target)
        }
        // attempt to delete the notes from the server
        // fetch('http://localhost:9000/delete', deleteRequest).then(response => response.json()).then(data=>console.log(data));

    }
    const notespad = notes.map((current,index) => (
        <Note key={
                index
            }
            id={
                index
            }
            deleteNotes={
                deleteNotes
            }
            title={
                current.title
            }
            content={
                current.content
            }/>
    ));

    React.useEffect(()=>{
        fetch('http://localhost:9000/get').then(response=>response.json()).then(data=>setNotes(data))
    },[]);
    return (
        <div>
            <Header/>
            <InputBox addNotes={addNotes}/> {notespad}
            <Footer />
        </div>
    );
}

export default App;
