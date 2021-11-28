import React from 'react'

export const FormPuja = () => {
    return (
        <form className="form-puja my-2 px-3">
            <h4 className="text-center text-dark mb-1 fw-bolder">Realizar puja</h4>
            <p className="small text-secondary mb-0 text-center">A continuacion, puede realizar pujas en esta subastas</p>
            <p className="small text-secondary mb-1 text-center">Recuerde que el valor de su puja debe superar el valor actual de la puja ganadora</p>
            <div className="input-group mb-3 mt-2 shadow" style={{ maxWidth: 350, margin: "0 auto" }}>
                <span className="input-group-text bg-success border-success text-white bg-opacity-75">$</span>
                <input type="number" min={0} step={50000} className="form-control shadow-none border-success" placeholder="Valor de su puja" />
                <button className="btn btn-success shadow-none" type="button" id="button-addon2">
                    Enviar
                </button>
            </div>
        </form>
    )
}
