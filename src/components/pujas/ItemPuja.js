import React from 'react'
import Puja from '../../assets/img/puja.png';


export const ItemPuja = () => {
    return (
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
                <strong className="text-success">Mario Andres Carreño</strong> ha realizado una puja por el valor de: <strong className="text-success">$ 3.000.000</strong>
                <div className="small mb-0 fw-bolder text-primary opacity-75  text-end">12 nov 2021 - 23:27</div>
            </div>
        </div>
    )
}
