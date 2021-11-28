import React from 'react'

import Hombre from '../../assets/img/hombre.png';
import Mujer from '../../assets/img/mujer.png';
import { ItemListUsuario } from './ItemListUsuario';

export const ListUsuarios = () => {
    return (
        <div className="all-usuarios">
            <h6 className="mt-2 mb-0 pb-2 px-2 text-success fw-bolder border-bottom	">
                Participantes - <span className="badge rounded-pill bg-success fw-bolder small">15</span>
            </h6>

            <ItemListUsuario />

            <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
                <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                    <img src={ Hombre} alt="hombre" width={40} height={40} className="d-block" />
                </div>
                <h6 className="mx-2 text-muted fw-bold mb-0">Mario Andrés Carreño</h6>
            </div>
            <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
                <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                    <img src={ Mujer } alt="hombre" width={40} height={40} className="d-block" />
                </div>
                <h6 className="mx-2 text-muted fw-bold mb-0">Andrea Basante</h6>
            </div>
            <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
                <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                    <img src={ Mujer } alt="hombre" width={40} height={40} className="d-block" />
                </div>
                <h6 className="mx-2 text-muted fw-bold mb-0">Dayanis Torres</h6>
            </div>
            <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
                <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                    <img src={ Hombre} alt="hombre" width={40} height={40} className="d-block" />
                </div>
                <h6 className="mx-2 text-muted fw-bold mb-0">Mario Andrés Carreño</h6>
            </div>
            <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
                <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                    <img src={ Mujer } alt="hombre" width={40} height={40} className="d-block" />
                </div>
                <h6 className="mx-2 text-muted fw-bold mb-0">Andrea Basante</h6>
            </div>
            <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
                <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                    <img src={ Hombre} alt="hombre" width={40} height={40} className="d-block" />
                </div>
                <h6 className="mx-2 text-muted fw-bold mb-0">Mario Andrés Carreño</h6>
            </div>
            <div className="usuario d-flex justify-content-start align-items-center p-3 py-2 border-bottom">
                <div className="img-usuario border border-2 rounded-circle d-flex justify-content-center align-items-center overflow-hidden">
                    <img src={ Mujer } alt="hombre" width={40} height={40} className="d-block" />
                </div>
                <h6 className="mx-2 text-muted fw-bold mb-0">Andrea Basante</h6>
            </div>
        </div>
    )
}
