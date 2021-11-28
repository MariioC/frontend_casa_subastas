import React from 'react'
import PujaMayor from '../../assets/img/puja-mayor.png';

export const BestPuja = () => {
    return (
        <>
            <p className="px-4 text-center text-muted lh-sm small">
                A continuación, aparece la puja ganadora actual de la subasta y el historial de todas las pujas que se han realizado durante la subasta
            </p>
            <div className="puja-mayor col-md-8 px-md-4 px-3 mx-auto">
                <div className="puja-ganadora card mx-auto shadow border-success border-2">
                    <h4 className="text-center fw-bolder py-2 text-white bg-success mb-0">Puja mayor</h4>
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-evenly">
                            <div className="flex-shrink-0 mx-2">
                                <img src={ PujaMayor } width={60} height={60} alt="Puja mayor" />
                            </div>
                            <div>
                                <h4 className="fw-normal text-success text-center mb-1 fw-bolder">$ 3.500.000</h4>
                                <p className="text-muted mb-0 fw-bolder text-center lh-1 text-uppercase">Mario Andres Carreño</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
