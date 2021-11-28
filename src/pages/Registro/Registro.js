import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

import './Registro.css';

const Registro = () => {

    const [loading, setLoading] = useState(false);

    const [ formaData, handleInputChange, resetData ] = useForm({
        nombre: 'Mario Carreño',
        tipo_documento: 'CC',
        documento: 1085338002,
        correo: 'macb079@gmail.com',
        fecha_nacimiento: '1997-12-06',
        expedicion_documento: '2015-12-15',
        genero: 'Hombre',
        password: '12345678',
        re_password: '12345678',
        tipo_usuario: 'externo'
    })

    const {
        nombre,
        tipo_documento,
        documento,
        correo,
        fecha_nacimiento,
        expedicion_documento,
        genero,
        password,
        re_password,
        tipo_usuario } = formaData;

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            alert('Se registra al usuario');
            
            resetData()
            
            setLoading(false);

        }, 1000);
    }

    return (
        <div className="login container my-4">
            <form className="col-md-6 mx-auto d-flex flex-column border rounded-3 py-3 px-4 shadow animated fadeIn" onSubmit={ handleSubmit }>
                <h2 className="text-center mb-4 fw-bolder">Registrarse</h2>
                <div className="group-registro d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre completo"
                            id="nombre"
                            name="nombre" 
                            value={ nombre } 
                            onChange={ handleInputChange }
                        />
                        <label htmlFor="nombre">Nombre completo</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control"
                            placeholder="Correo electrónico"
                            id="correo"
                            name="correo"
                            value={ correo }
                            onChange={ handleInputChange }
                        />
                        <label htmlFor="correo">Correo electrónico</label>
                    </div>
                </div>
                <div className="group-registro d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <select 
                            className="form-select"
                            id="tipo_documento"
                            name="tipo_documento"
                            value={ tipo_documento }
                            onChange={ handleInputChange }
                        >
                            <option value="" defaultValue>Seleccione...</option>
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="CE">Cédula de extranjería</option>
                            <option value="PS">Pasaporte</option>
                        </select>
                        <label htmlFor="tipo_documento">Tipo de documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Número de identificaión"
                            id="num-documento"
                            name="documento"
                            value={ documento }
                            onChange={ handleInputChange }
                        />
                        <label htmlFor="num-documento">Número de identificaión</label>
                    </div>
                </div>
                <div className="group-registro d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <input 
                            type="date"
                            className="form-control"
                            placeholder="Fecha de expedición documento"
                            id="expedicion_documento"
                            name="expedicion_documento"
                            value={ expedicion_documento }
                            onChange={ handleInputChange }
                        />
                        <label htmlFor="expedicion_documento">Fecha de expedición documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="date"
                            placeholder="Fecha de nacimiento"
                            className="form-control"
                            id="fecha_nacimiento"
                            name="fecha_nacimiento"
                            value={ fecha_nacimiento }
                            onChange={ handleInputChange }
                        />
                        <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                    </div>
                </div>
                <div className="group-registro d-flex  align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <select 
                            className="form-select"
                            id="genero"
                            name="genero"
                            value={ genero }
                            onChange={ handleInputChange }
                        >
                            <option value="" defaultValue>Seleccione...</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <label htmlFor="genero">Género</label>
                    </div>
                    <div className="form-floating mb-3 d-none">
                        <select 
                            className="form-select"
                            id="tipo_usuario"
                            name="tipo_usuario"
                            value={ tipo_usuario }
                            onChange={ handleInputChange }
                        >
                            <option value="" defaultValue>Seleccione...</option>
                            <option value="externo">Externo</option>
                            <option value="interno">Interno</option>
                            <option value="admin">Administrador</option>
                        </select>
                        <label htmlFor="tipo_usuario">Tipo de usuario</label>
                    </div>
                </div>
                <div className="group-registro d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <input 
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            id="password"
                            name="password"
                            value={ password }
                            onChange={ handleInputChange }
                        />
                        <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="password" 
                            className="form-control"
                            placeholder="Confirmar contraseña"
                            id="re_password"
                            name="re_password"
                            value={ re_password }
                            onChange={ handleInputChange }
                        />
                        <label htmlFor="re_password">Confirmar contraseña</label>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <button 
                        type="submit"
                        disabled={ loading }
                        className="btn btn-outline-primary d-flex align-items-center fw-bolder border-2">
                        Registrarse
                        { loading &&
                            <div className="spinner-border text-primary ms-2" role="status" style={{ width: 20, height: 20 }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                    </button>
                </div>
                <p className="text-secondary d-flex mx-auto mt-3">
                    ¿Ya tiene una cuenta?
                    <Link to="/login" className="ms-2 fw-bolder">
                        Iniciar sesión
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Registro;