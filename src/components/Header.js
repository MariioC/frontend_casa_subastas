import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/img/logo.png';
import Hombre from '../assets/img/hombre.png';
// import Mujer from '../assets/img/mujer.png';

import './Header.css'
import { useSelector } from 'react-redux';

export const Header = () => {

    const { logged } = useSelector( state => state.auth );

    return (
        <nav className="header navbar navbar-expand-lg navbar-dark bg-primary py-3 border-bottom border-primary shadow animated fadeIn">
            <div className="container">
                <NavLink to='/' className="navbar-brand fw-bolder">
                    <img className="me-1" src={ Logo } alt="Logo" width={35} height={35} /> Subastas S.A.S
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    {
                        logged
                            ?  <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to='/' className="btn btn-primary fw-bolder mx-1">Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/reportes' className="btn btn-primary fw-bolder mx-1">Reportes</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <div className="flex-shrink-0 dropdown mx-1">
                                            <a href="/"
                                                className="d-block position-relative btn btn-primary fw-bolder dropdown-toggle d-flex align-items-center justify-content-center"
                                                id="notificaciones"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <span className="badge rounded-circle bg-danger" style={{ marginRight: 2 }}>
                                                    5
                                                </span>
                                                Notificaciones
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end py-0 overflow-hidden text-small shadow animated fadeIn fast" aria-labelledby="notificaciones" style={{ width: 300 }}>
                                                <div className="container-notificaciones list-group list-group-flush border-bottom scrollarea">
                                                    <Link to='/subasta' className="notificacion list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                                            <strong className="mb-1 text-primary">@NotiBoot</strong>
                                                            <small className="text-muted mb-1">Nov 12 2021 - 22:55</small>
                                                        </div>
                                                        <hr className="dropdown-divider mt-0" />
                                                        <div className="col-12 mb-1 small px-2" style={{ textAlign: "justify" }}>
                                                            <strong>Mario Andres Carreño</strong> canceló su puja, ahora eres el ganador temporal de la subasta <strong>Nombre subasta</strong>
                                                        </div>
                                                    </Link>
                                                    <Link to='/subasta' className="notificacion list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                                            <strong className="mb-1 text-primary">@NotiBoot</strong>
                                                            <small className="text-muted mb-1">Nov 12 2021 - 22:55</small>
                                                        </div>
                                                        <hr className="dropdown-divider mt-0" />
                                                        <div className="col-12 mb-1 small px-2" style={{ textAlign: "justify" }}>
                                                            <strong>Mario Andres Carreño</strong> canceló su puja, ahora eres el ganador temporal de la subasta <strong>Nombre subasta</strong>
                                                        </div>
                                                    </Link>
                                                    <Link to='/subasta' className="notificacion active list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                                            <strong className="mb-1 text-primary">@NotiBoot</strong>
                                                            <small className="text-muted mb-1">Nov 12 2021 - 22:55</small>
                                                        </div>
                                                        <hr className="dropdown-divider mt-0" />
                                                        <div className="col-12 mb-1 small px-2" style={{ textAlign: "justify" }}>
                                                            <strong>Mario Andres Carreño</strong> canceló su puja, ahora eres el ganador temporal de la subasta <strong>Nombre subasta</strong>
                                                        </div>
                                                    </Link>
                                                    <Link to='/' className="notificacion active list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                                            <strong className="mb-1 text-primary">@NotiBoot</strong>
                                                            <small className="text-muted mb-1">Nov 12 2021 - 22:55</small>
                                                        </div>
                                                        <hr className="dropdown-divider mt-0" />
                                                        <div className="col-12 mb-1 small px-2" style={{ textAlign: "justify" }}>
                                                            <strong>Mario Andres Carreño</strong> canceló su puja, ahora eres el ganador temporal de la subasta <strong>Nombre subasta</strong>
                                                        </div>
                                                    </Link>
                                                    <Link to='/' className="notificacion active list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                                            <strong className="mb-1 text-primary">@NotiBoot</strong>
                                                            <small className="text-muted mb-1">Nov 12 2021 - 22:55</small>
                                                        </div>
                                                        <hr className="dropdown-divider mt-0" />
                                                        <div className="col-12 mb-1 small px-2" style={{ textAlign: "justify" }}>
                                                            <strong>Mario Andres Carreño</strong> canceló su puja, ahora eres el ganador temporal de la subasta <strong>Nombre subasta</strong>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="flex-shrink-0 dropdown mx-1">
                                            <Link to="/" className=" d-block btn btn-primary fw-bolder py-1 dropdown-toggle d-flex align-items-center" id="perfil" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img className="rounded-circle img-fluid me-1" src={ Hombre } alt="mdo" width={28} height={28} />
                                                Mario
                                            </Link>
                                            <ul className=" dropdown-menu dropdown-menu-end py-0 overflow-hidden text-small shadow animated fadeIn fast" aria-labelledby="perfil">
                                                <li>
                                                    <NavLink to='/perfil' className="text-center dropdown-item py-2 fw-bolder">
                                                        Ver peril
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider my-0" />
                                                </li>
                                                <li>
                                                    <Link to='/' className=" text-center dropdown-item py-2 fw-bolder">
                                                        Cerrar sesión
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            :   <ul className="navbar-nav animated fadeIn fast">
                                    <li className="nav-item">
                                        <NavLink to='/login' className="btn btn-primary fw-bolder mx-1">Iniciar sesión</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/registro' className="btn btn-primary fw-bolder mx-1">Registrarse</NavLink>
                                    </li>
                                </ul>
                    }
                </div>
            </div>
        </nav>
    );
};
