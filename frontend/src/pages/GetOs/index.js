import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './index.css';



export default function GetOs(){
    const [orderServices, setOrderServices ] = useState([]);

    useEffect(()=> {
        async function loadData(){
           const user_id = localStorage.getItem('user');
            const response = await api.get('/getos',{
                headers: { user_id }
            });
                
                console.log(response.data);
                setOrderServices(response.data); 
        }

        loadData();
    },[]);

    return(
        <> 
            <ul className="os-list">
                {orderServices.map(os=>(
                    <li key={os._id}>
                        <header id="head" style={{backgroundImage:`url('../../assets/blood.png')`}}/>                        
                        <strong>{os.doctor}</strong>
                        <p>{os.patient}</p>
                        <p>{os.healthPlan}</p>
                        <p>{os.collectPost}</p><br/>
                    </li>
                ))}
            </ul>

            <Link to="/new">
               <button className="btn">Cadatrar nova Ordem de Serviço </button>
            </Link>







      </>
    )
}