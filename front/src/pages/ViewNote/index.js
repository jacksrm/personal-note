import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { TinyMCE } from '../../components';

import { FiArrowLeft, FiEdit, FiXCircle, FiSave } from  'react-icons/fi'

import './styles.css';
import api from '../../services/api';

export default function ViewNote() {
  const { id } = useParams();
  const [note_name,setNoteName] = useState('')
  const [content,setContent] = useState('')
  const [editMode,setEditMode] = useState(false);

  const icon = editMode ? <FiXCircle size={25} color="#fff" /> : <FiEdit size={25} color="#fff" />;
  const history = useHistory()
  
  useEffect(() => {
    handleGetNote();
  },[]);

  async function handleGetNote() {
    const {data} = await api.get(`/notes/${id}`);
    setNoteName(data.note_name);
    setContent(data.content);
  }




  function toggleEdit(){
    editMode ? setEditMode(false) : setEditMode(true);
  }

  async function handleSave() {
    const data = {
      note_name,
      content
    }

    try {
      const response = await api.put(`notes/${id}`, data);

      if(response.status === 200) alert('Salvo com sucesso!');
      
      history.goBack();
    } catch (error) {
      alert('Erro ao salvar');
    }
  }

  return (
    <div className="view-note-container">

      <header>
        <Link className="button" to="/">
          <FiArrowLeft size={25} color="#fff" />
        </Link>
        <button onClick={() => toggleEdit()}>
          { icon }
        </button>

        <button onClick={ () => handleSave()}>
          <FiSave size={25} color="#fff" />
        </button>
      </header>

      <div className="note-content">
        <input 
          type="text" 
          readOnly={ editMode ? false : true } 
          placeholder="Título da nota" 
          value={note_name}
          onChange={event => setNoteName(event.target.value)}
        />

        <TinyMCE 
          disabled={ !editMode }
          value={ content }
          onEditorChange={ change => setContent(change)}
        />

      </div>
     </div>
  );
}