import React from 'react'

import Hombre from '../../assets/img/hombre.png';
// import Mujer from '../../assets/img/mujer.png';

export const ItemListUsuario = () => {
    return (
        <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
            <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                <img src={ Hombre} alt="hombre" width={40} height={40} className="d-block" />
            </div>
            <h6 className="mx-2 text-muted fw-bold mb-0">Mario Andrés Carreño</h6>
        </div>
    )
}
