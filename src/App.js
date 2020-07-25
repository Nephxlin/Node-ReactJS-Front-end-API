import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css'
/*
- Componente
- Propriedade
- Estado & Imutabilidade
*/

import Header from './components/Header';

function App(){
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  },[])
  
  //useState retorna um array com 2 posições
  //
  //1. variavel com o seu valor inicial
  //2. função para atualizar esse valor

  async function handleAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`)

    //setProjects([...projects,`Novo Projeto ${Date.now()}`]);

    const response = await api.post('projects',{
      title : `Novo Projeto ${Date.now()}`,
      owner : "Luther"
    })

    const project = response.data;

    setProjects([...projects, project])

  }
  
  return (
    <>
      <Header title="Projects"/>
      
      <ul>
      {projects.map(project =><li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}


export default App;