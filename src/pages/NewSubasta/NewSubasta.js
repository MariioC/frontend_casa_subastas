import React, { useState } from 'react';

import './NewSubasta.css';

const NewSubasta = () => {

    const [loading, setLoading] = useState(false);
    const [previewImg, setPreviewImg] = useState('');

    console.log(setLoading, setPreviewImg);

    return (
        <div className="crear-subasta container my-4">
            <form className="col-md-6 mx-auto d-flex flex-column border rounded-3 py-3 px-4 shadow animated fadeIn">
                <h2 className="text-center mb-4 fw-bolder">Nueva subasta</h2>
                <div className="group-subasta d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre subasta" />
                        <label htmlFor="nombre">Nombre subasta</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id="online">
                            <option value="" defaultValue>Seleccione...</option>
                            <option value="true">Online</option>
                            <option value="false">Offline</option>
                        </select>
                        <label htmlFor="online">Tipo subasta</label>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <textarea type="text" className="form-control" id="descripcion" placeholder="Descripción subasta" defaultValue={""} />
                    <label htmlFor="descripcion">Descripción subasta</label>
                </div>
                <div className="group-subasta d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="fecha-inicio" placeholder="Fecha inicio" />
                        <label htmlFor="fecha-inicio">Fecha inicio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="time" className="form-control" id="hora-inicio" placeholder="Hora inicio" />
                        <label htmlFor="hora-inicio">Hora inicio</label>
                    </div>
                </div>
                <div className="group-subasta d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="fecha-fin" placeholder="Fecha fin" />
                        <label htmlFor="fecha-fin">Fecha fin</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="time" className="form-control" id="hora-fin" placeholder="Hora fin" />
                        <label htmlFor="hora-fin">Hora fin</label>
                    </div>
                </div>
                <div className="group-subasta d-flex align-items-center flex-wrap">
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="fecha-cancelacion" placeholder="Fecha límite cancelación" />
                        <label htmlFor="fecha-cancelacion">Fecha límite cancelación</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="monto" placeholder="Monto inicial" />
                        <label htmlFor="monto">Monto inicial</label>
                    </div>
                </div>
                <div className="group-subasta d-flex align-items-center flex-wrap mb-3">
                    <input type="file" className="form-control" id="foto" placeholder="Confirmar contraseña" />
                </div>
                
                { previewImg && 
                    <div className="preview-img col-md-6 mx-auto mb-3">
                        <img className="img-fluid d-block img-thumbnail shadow border-2 animated fadeIn" src="@/assets/img/reliquia3.jpg" alt ="Foto subasta"/>
                    </div>
                }
                <div className="d-flex align-items-center justify-content-center mb-2">
                    <button type="submit" className="btn btn-outline-primary d-flex align-items-center fw-bolder border-2">
                        Crear subasta
                        { loading &&
                            <div className="spinner-border text-primary ms-2" role="status" style={{ width: 20, height: 20 }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewSubasta;