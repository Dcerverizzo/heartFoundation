import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function Os(){
    const [orderServices, setOrderServices ] = useState([]);
    const [user, setUser] = useState([]);
    const [exam, setExam] = useState([]);


    useEffect(()=> {
        async function loadData(){
           const user_id = localStorage.getItem('user_id');
           const exam_id = localStorage.getItem('exam_id');


            const response = await api.get('/os',{
                headers: { user_id, exam_id }
            });
                
                setOrderServices(response.data); 
                setExam(response.data.exam);
                setUser(response.data.user);
        }

        loadData();
    },[]);

    return(
        <> 
            <h4>Paciente</h4>

            <ul className="os-list">
                    <li key={user._id}>ID Paciente: {orderServices.user}</li><br/>              
            </ul>   

            <h4>Dados do Exame:</h4><br/>

            <ul className="os-list">
                    <li key={orderServices._id}>Código Exame: {orderServices.exam}</li><br/>
                    <li>Tipo de exame: {exam.description}</li>
                    <li>Total:R$ {exam.price}</li>                
            </ul>
            
            <Link to="/getos">
               <button className="btn">Ver todas OS</button>
            </Link>

      </>
    )
}