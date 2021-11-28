import React from 'react'
import { ItemNotiUsuario } from './ItemNotiUsuario'

export const NotiUsuarios = () => {
    return (
        <div className="notificaciones-usuarios">
            <h6 className="mb-0 py-2 px-2 text-primary fw-bolder">Recientes</h6>
            <div className="container-notificaciones">
                
                <ItemNotiUsuario />
                
                <div className="notificacion d-flex text-muted pt-2 mx-3 border-top	">
                    <svg
                        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 32x32"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#28B463" />
                    </svg>
                    <p className="pb-2 mb-0 small lh-sm">
                        <strong className="d-block mb-1 text-primary">@UsersBoot:</strong>
                        <strong>Mario Andres Carreño</strong> se ha unido a la subasta
                    </p>
                </div>

                <div className="notificacion d-flex text-muted pt-2 mx-3 border-top	">
                    <svg
                        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 32x32"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#28B463" />
                    </svg>
                    <p className="pb-2 mb-0 small lh-sm">
                        <strong className="d-block mb-1 text-primary">@UsersBoot:</strong>
                        <strong>Mario Andres Carreño</strong> se ha unido a la subasta
                    </p>
                </div>

                <div className="notificacion d-flex text-muted pt-2 mx-3 border-top	">
                    <svg
                        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 32x32"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#28B463" />
                    </svg>
                    <p className="pb-2 mb-0 small lh-sm">
                        <strong className="d-block mb-1 text-primary">@UsersBoot:</strong>
                        <strong>Mario Andres Carreño</strong> se ha unido a la subasta
                    </p>
                </div>

                <div className="notificacion d-flex text-muted pt-2 mx-3 border-top	">
                    <svg
                        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 32x32"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#dc3545" />
                    </svg>
                    <p className="pb-2 mb-0 small lh-sm">
                        <strong className="d-block mb-1 text-primary">@UsersBoot:</strong>
                        <strong>Mario Andres Carreño</strong> ha abanado la subasta
                    </p>
                </div>
            </div>
        </div>
    )
}
