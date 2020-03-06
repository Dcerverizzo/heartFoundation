import React, {useState} from 'react';
import api from '../../services/api'



export default function Login({ history}){

  const [email, setEmail] = useState('')
  const [protocolo, setProtocolo] = useState('')


  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/sessions',{ email });

    const { _id } = response.data;

    localStorage.setItem('user_id', _id);
    localStorage.setItem('exam_id', '5e564bc51c9d440000bda0da');


    history.push('/getos');

  }

    return (
    <>
        <p>Utilize seu <strong>email</strong> para ter acesso a plataforma </p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email"> E-mail</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              placeholder="Seu melhor e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="protocolo"> Consulte seu Protocolo</label>
            <input 
              type="text" 
              id="protocolo" 
              value={protocolo}
              placeholder="5e564bc51c9d440000bda0da"
              onChange={event => setProtocolo(event.target.value)}
            />            
            
            <button type="submit" className="btn">Entrar</button>

        </form>        
    </>
    )
}