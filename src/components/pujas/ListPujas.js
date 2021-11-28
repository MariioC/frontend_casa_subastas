import React from 'react'
import Puja from '../../assets/img/puja.png';
import { ItemPuja } from './ItemPuja';


export const ListPujas = () => {
    return (
        <div className="pujas-hechas col-md-10 mx-auto mb-md-4 mt-3">
            <h4 className="text-center fw-bolder py-2 text-white bg-primary mb-0 rounded-top">
                Pujas: <span className="ms-2">7</span>
            </h4>
            <div className="historial-pujas mx-auto border border-primary rounded-bottom">
                <ItemPuja />
                <div className="notificacion d-flex text-muted pt-2 px-3 border-top border-primary bg-primary bg-opacity-10 position-relative">
                    <img src={ Puja } className="mt-1 bd-placeholder-img flex-shrink-0 me-2 rounded" width={35} height={35} alt="Puja" />
                    <div className="pb-2 mb-0 small lh-sm">
                        <strong className="d-block mb-1 text-primary">@PujasBoot:</strong>
                        <strong className="text-success">Andrea Basante</strong> ha realizado una puja por el valor de: <strong className="text-success">$ 2.800.000</strong>
                        <div className="small mb-0 fw-bolder text-primary opacity-75  text-end">12 nov 2021 - 23:25</div>
                    </div>
                </div>
                <div className="notificacion d-flex text-muted pt-2 px-3 border-top border-primary bg-primary bg-opacity-10 position-relative">
                    <button
                        type="button"
                        className="position-absolute btn btn-sm btn-danger small py-0 px-2 fw-bolder hint--bottom-left"
                        aria-label="Cancelar puja"
                        style={{ top: 5, right: 5 }}
                    >
                        X
                    </button>
                    <img src={ Puja } className="mt-1 bd-placeholder-img flex-shrink-0 me-2 rounded" width={35} height={35} alt="Puja" />
                    <div className="pb-2 mb-0 small lh-sm">
                        <strong className="d-block mb-1 text-primary">@PujasBoot:</strong>
                        <strong className="text-success">Mario Andres Carreño</strong> ha realizado una puja por el valor de: <strong className="text-success">$ 2.700.000</strong>
                        <div className="small mb-0 fw-bolder text-primary opacity-75  text-end">12 nov 2021 - 23:23</div>
                    </div>
                </div>
                <div className="notificacion d-flex text-muted pt-2 px-3 border-top border-primary bg-primary bg-opacity-10 position-relative">
                    <button
                        type="button"
                        className="position-absolute btn btn-sm btn-danger small py-0 px-2 fw-bolder hint--bottom-left"
                        aria-label="Cancelar puja"
                        style={{ top: 5, right: 5 }}
                    >
                        X
                    </button>
                    <img src={ Puja } className="mt-1 bd-placeholder-img flex-shrink-0 me-2 rounded" width={35} height={35} alt="Puja" />
                    <div className="pb-2 mb-0 small lh-sm">
                        <strong className="d-block mb-1 text-primary">@PujasBoot:</strong>
                        <strong className="text-success">Mario Andres Carreño</strong> ha realizado una puja por el valor de: <strong className="text-success">$ 2.700.000</strong>
                        <div className="small mb-0 fw-bolder text-primary opacity-75  text-end">12 nov 2021 - 23:23</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
