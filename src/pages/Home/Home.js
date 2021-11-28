import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CardSubasta } from "../../components/subastas/CardSubasta";

import Logo from '../../assets/img/logo.png'
import "./Home.css";

const initSubastas = [
    {
        _id: "6193d9e62d6da4733d50fb12",
        nombre: "Reliquia Uno",
        foto: "foto.jpg",
        descripcion: "Esta reliquia es del año 200 A.C",
        fecha_cancelacion: "2021-01-20T00:00:00.000Z",
        fecha_inicio: "2021-01-16T17:00:00.000Z",
        hora_inicio: "17:00",
        fecha_fin: "2021-02-16T18:00:00.000Z",
        hora_fin: "17:25",
        monto_inicial: 800000,
        online: true,
        finalizada: false,
        documento_subastador: 1085338002
    },
    {
        _id: "6193d9e62d6da4733d50fb56",
        nombre: "Reliquia Dos",
        foto: "foto.jpg",
        descripcion: "Esta reliquia es del año 500 A.C",
        fecha_cancelacion: "2021-03-20T00:00:00.000Z",
        fecha_inicio: "2021-04-16T17:00:00.000Z",
        hora_inicio: "17:00",
        fecha_fin: "2021-11-16T18:00:00.000Z",
        hora_fin: "17:25",
        monto_inicial: 1200000,
        online: true,
        finalizada: true,
        documento_subastador: 1085338002
    },
    {
        _id: "6193d9e62d6da4733d50f321",
        nombre: "Subasta Full",
        foto: "foto.jpg",
        descripcion: "Esta reliquia es del año 5000 A.C",
        fecha_cancelacion: "2021-11-20T00:00:00.000Z",
        fecha_inicio: "2021-05-16T17:00:00.000Z",
        hora_inicio: "17:00",
        fecha_fin: "2021-06-16T18:00:00.000Z",
        hora_fin: "17:25",
        monto_inicial: 2500000,
        online: false,
        finalizada: false,
        documento_subastador: 1085338002
    }
]

const Home = () => {

    const [subastas, setstate] = useState(initSubastas)

    console.log();

    const add = () => {
        console.log('add');
        setstate(
            [{
                _id: new Date().getTime(),
                nombre: "Subasta Full",
                foto: "foto.jpg",
                descripcion: "Esta reliquia es del año 5000 A.C",
                fecha_cancelacion: "2021-11-20T00:00:00.000Z",
                fecha_inicio: "2021-11-16T17:00:00.000Z",
                hora_inicio: "17:00",
                fecha_fin: "2021-11-16T18:00:00.000Z",
                hora_fin: "17:25",
                monto_inicial: 2500000,
                online: false,
                finalizada: false,
                documento_subastador: 1085338002
            }, ...subastas]
        )
    }

    return (
        <div className="home container-fluid animated fadeIn">
            <div className="home-subsatas container">
                <h1 className="text-center mt-2 fw-bolder">Subastas disponibles</h1>
                <div className="d-flex justify-content-center">
                    <Link to="/new/subasta" className="btn btn-lg btn-outline-success mx-auto mb-4 fw-bolder border-2">
                        <img className="me-1" src={ Logo } alt="Subasta" width={30} height={30} /> Crear subasta
                    </Link>
                </div>

                <button type="button" onClick={ add } className="btn btn-primary mx-a">Agregar</button>

                <div className="d-flex justify-content-between flex-wrap mb-5">
                    {
                        subastas.map( subasta => (
                            <CardSubasta  
                                subasta={subasta}
                                key={ subasta._id }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;