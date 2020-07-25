import React, { useState } from 'react';

import './App.css'
import backgroundImage from './assets/background.jpg'
/*
- Componente
- Propriedade
- Estado & Imutabilidade
*/

import Header from './components/Header';

function App(){
  const [projects, setProjects] = useState(['Desenvolvimento de app','Front-end web'])
  
  //useState retorna um array com 2 posições
  //
  //1. variavel com o seu valor inicial
  //2. função para atualizar esse valor

  function handleAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`)

    setProjects([...projects,`Novo Projeto ${Date.now()}`]);

  }
  
  return (
    <>
      <Header title="Projects"/>
      
      <img width={300} src={backgroundImage}/>
      
      <ul>
      {projects.map(projects =><li key={projects}>{projects}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}


export default App;