import React from 'react'

import Reliquia from '../../assets/img/reliquia2.jpg';

export const InfoSubasta = ( { subasta } ) => {
    return (
        <div className="informacion rounded-1 shadow p-0 overflow-hidden border border-warning">
            <h3 className="titulo text-center text-white py-2 mb-0 shadow">Información subasta</h3>
            <div className="img-subasta">
                <img className="img-fluid d-block" src={ Reliquia } height={255} alt="Foto subasta" />
            </div>
            <div className="info-subasta py-3 px-4">
                <h3 className="mb-0 text-center fw-bolder mb-3">Subasta - Número uno</h3>
                <p className="text-secondary mb-3" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus enim quae, maiores amet quia reprehenderit neque modi explicabo et saepe alias perferendis quam quaerat
                    veritatis ipsum? Voluptatibus at voluptatem ab.
                </p>
                <p className="text-primary mb-0 small" style={{ textAlign: "justify" }}>
                    <strong>Fecha inicio:</strong> 2021-11-16 a las 17:00
                </p>
                <p className="text-primary mb-0 small" style={{ textAlign: "justify" }}>
                    <strong>Fecha fin:</strong> 2021-11-17 a las 17:00
                </p>
                <p className="text-dakr mb-0 mt-3 text-center" style={{ textAlign: "justify" }}>
                    <strong>Monto inicial:</strong> $ 850.000
                </p>
                <div className="alert alert-info small py-1 px-3 mb-0 mt-2">
                    <strong>Fecha límite de cancelación:</strong> 2021-11-20 hasta las 23:59
                </div>
            </div>
        </div>                                                                                                                                                                                                      
    )
}
