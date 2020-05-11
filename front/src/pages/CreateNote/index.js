import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TinyMCE } from '../../components';

import { FiArrowLeft, FiSave } from  'react-icons/fi'

import api from '../../services/api';

import './styles.css';

export default function CreateNote() {
  const [note_name, setNoteName] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();


  async function handleSave() {
    const data = {
      note_name,
      content
    }

    try {
      const response = await api.post('notes', data);

      if(response.status === 200) alert('Salvo com sucesso!');
      
      history.goBack();
    } catch (error) {
      alert('Erro ao salvar');
    }
  }

  return (
    <div className="create-note-container">

      <header>

        <Link className="button" to="/">
          <FiArrowLeft size={25} color="#fff" />
        </Link>

        <button onClick={ () => handleSave()}>
          <FiSave size={25} color="#fff" />
        </button>

      </header>

      <div className="note-content">
        <input 
          type="text" 
          placeholder="Título da nota" 
          value={ note_name } 
          onChange={ event => setNoteName(event.target.value) }
        />

        <TinyMCE
          value={ content }
          onEditorChange={ change => setContent(change)}
        />

      </div>
     </div>
  );
}