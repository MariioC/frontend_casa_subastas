import React from 'react'

import { BestPuja } from './BestPuja';
import { FormPuja } from './FormPuja';
import { ListPujas } from './ListPujas';

export const PanelPujas = () => {
    return (
        <div className="panel-pujas rounded-1 mt-4 mb-4 overflow-hidden shadow-lg border border-primary p-0">
            <h3 className="titulo text-center bg-primary text-white py-2 mb-0 shadow">Panel de pujas</h3>
            <FormPuja />

            <hr className="dropdown-divider m-4 border-2" />

            <div className="container-pujas row g-0">

                <BestPuja />

                <hr className="dropdown-divider mt-4 border-2" />

                <ListPujas />

            </div>
        </div>
    )
}
