import React, { useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function New({history}){

    const [doctor, setDoctor] = useState('')
    const [healthPlan, setHealthPlan] = useState('')
    const [patient, setPatiente] = useState('')
    const [exam, setExam] = useState('')
    const [collectPost, setCollectPost] = useState('')



    async function handleSubmit(e){

        e.preventDefault();

        const user_id = localStorage.getItem('user_id');
        const exam_id = localStorage.getItem('exam_id');

        await api.post('/os', {doctor,healthPlan,patient,collectPost}, {
            headers: { user_id, exam_id }
        });

        history.push('/os');
    }

    return (
        <form onSubmit={handleSubmit}>


            <label htmlFor="doctor">Doutor *</label>
            <input type="text"
            placeholder="Médico"
            id="doctor"
            value={doctor}
            onChange={e=>setDoctor(e.target.value)}
            />


            <label htmlFor="healthPlan">Plano de Saúde *</label>
            <input type="text"
            placeholder="Plano de Saúde"
            id="healthPlan"
            value={healthPlan}
            onChange={e=>setHealthPlan(e.target.value)}
            />


            <label htmlFor="patient">Paciente *</label>
            <input type="text"
            placeholder="Nome do Paciente"
            id="patient"
            value={patient}
            onChange={e=>setPatiente(e.target.value)}
            />    

            <label htmlFor="collectPost">Posto de Coleta*</label>
            <input type="text"
            placeholder="UBS: São Paulo"
            id="collectPost"
            value={collectPost}
            onChange={e=>setCollectPost(e.target.value)}
            />                


            <label htmlFor="exam">Tipo de Exame *</label>
            <input type="text"
            placeholder="Tipo de Exame"
            id="exam"
            value={exam}
            onChange={e=>setExam(e.target.value)}
            />    

            <button className="btn">Cadastrar</button>
        </form>
    );
}