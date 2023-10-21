import React from 'react'
import Style from "./Notes.module.scss"
import { useEffect } from 'react'
import { useState } from 'react'

const Notes = () => {

    const [notes , setNotes] = useState([]);

    const changeHandler = (e) => {
        console.log("event",e.target.value)
        setNotes(e.target.value)
        localStorage.setItem("notes", e.target.value)
    }

    useEffect(() => {
        const savedNotes = localStorage.getItem("notes")
        setNotes(savedNotes);
    });

  return (
    <div className={Style.main}>
        <h2 className={Style.h2}>All Notes</h2>
        <textarea 
            name='textarea' 
            value={notes}
            className={Style.textarea} 
            onChange={changeHandler}>
                {notes}
            </textarea>
    </div>
  )
}

export default Notes