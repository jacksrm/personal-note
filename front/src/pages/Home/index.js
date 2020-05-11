import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiTrash2 } from  'react-icons/fi'

import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [notes,setNotes] = useState([]);

  useEffect(() => {
    handleGetNotes();
  },[]);

  async function handleGetNotes() {
    const response = await api.get('notes');
    setNotes(response.data);
  }

  async function handleDelete(id) {

    try {
      await api.delete(`notes/${id}`);

      setNotes(notes.filter( note => note.id !== id));
  
      alert('Deletado com sucesso');
      
    } catch (error) {
      alert('erro ao excluir');
    }
  }

  return (
    <div className="home-container">

      <header>
        <Link className="button" to="/create-note">
          <FiPlus size={25} color="#fff" />
        </Link>
        <span>Personal Notes</span>
      </header>

      <ul>
        { notes.map( note => (

          <li key={note.id}>
            <Link to={`/view-note/${note.id}`}>{ note.note_name }</Link>
            <button onClick={() => handleDelete(note.id) }>
              <FiTrash2 size={18} color="#3F51B4" />
            </button>
          </li>

        ))}

        
      </ul>
    </div>
  );
}