import React from 'react';

import { InfoSubasta } from '../../components/subastas/InfoSubasta'
import { PanelPujas } from '../../components/pujas/PanelPujas';
import { PanelUsuarios } from '../../components/usuarios/PanelUsuarios';

import './Subasta.css';

const Subasta = () => {
    return (
        <div className="page-subasta container my-3 animated fadeIn">
            <div className="d-flex justify-content-between align-items-start flex-wrap">

                <InfoSubasta />

                <PanelPujas />

                <PanelUsuarios />
            </div>
        </div>
    );
};

export default Subasta;