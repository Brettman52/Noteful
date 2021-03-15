import React from 'react';

const NotesContext = React.createContext({
    notes: [],
    folder: [],
    handleDelete: () => {},
    handleAddNote: () =>{},
    handleAddFolder: () =>{}
  })
  
  export default NotesContext