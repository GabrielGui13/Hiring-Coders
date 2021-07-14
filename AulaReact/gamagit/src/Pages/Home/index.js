import React, { useState } from "react";
import axios from "axios";
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('Guilherme')

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>  {
        const repositories = response.data
        const repositoriesName = [];
        repositories.map(repository => {
          repositoriesName.push(repository.name)
        }) 
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName)) //seta dados no armazenamento local do navegador
        
        history.push('/repositories')
      }
    )
    .catch(err => {
      alert(err)
    })
  }

  return (
    <S.Container>
      <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  )
}

export default App;
