import './dashboard.css';
import React from 'react';


export const Dashboard = () => {
    function validaLogin() {
        console.log("aqui debe estar la logica para validar los datos del  user");
    }

    validaLogin();
    return <>
        <div>

            <div className='bg-primary w-60'>
                claro debe tener contenido
            </div>
            <div className=''>
                este tambien debe tener cn
            </div>
        </div>
    </>
}