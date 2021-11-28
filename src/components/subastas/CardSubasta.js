import React from 'react'
import { Link } from 'react-router-dom'
import { prettierFecha, prettierValorCOP } from '../../helpers/format';

// import Reliquia from '../../assets/img/reliquia.jpg'

export const CardSubasta = ( { subasta } ) => {

    const { _id, nombre, foto, descripcion, fecha_inicio, fecha_fin, online, monto_inicial, finalizada } = subasta;

    return (
        <div className="subasta row mb-4 g-0 border rounded overflow-hidden flex-md-row shadow-sm position-relative text-decoration-none text-dark animated fadeIn fast">
            <div className="info-subasta col p-3 d-flex flex-column position-static">

                {
                    finalizada && <span className="badge-subasta position-absolute badge rounded-pill bg-danger p-2 px-3">Finalizada</span>
                }

                {
                    !finalizada && online && <span className="badge-subasta position-absolute badge rounded-pill bg-success p-2 px-3">Online</span>
                }

                {
                    !finalizada && !online && <span className="badge-subasta position-absolute badge rounded-pill bg-primary p-2 px-3">Offline</span>
                }

                <h2 className="nombre-subasta mb-0 fw-bolder">{ nombre }</h2>
                <div className="text-muted small">
                    <strong>Inicia:</strong> { prettierFecha(fecha_inicio) }
                </div>
                <div className="text-muted small">
                    <strong>Finaliza:</strong> { prettierFecha(fecha_fin) }
                </div>
                <p className="card-text mb-auto mt-2">{ descripcion }</p>
                <p className="card-text mb-2 fw-bolder">Monto inicial: { prettierValorCOP(monto_inicial) }</p>
                <Link to={`/subasta/${_id}`} className="stretched-link btn btn-outline-primary mt-auto fw-bold">
                    Ver detalles de la subasta
                </Link>
            </div>
            <div className="img-subasta col-auto d-flex justify-content-center align-items-center overflow-hidden">
                <img className="imagen-subasta animated fadeIn d-block" onError={ (error) => { console.log(error) } } src={ foto } alt={ nombre } width={200} height={250} />
            </div>
        </div>
    )
}
