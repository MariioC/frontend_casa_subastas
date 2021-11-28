import React from 'react'
import { NotiUsuarios } from './NotiUsuarios';
import { ListUsuarios } from './ListUsuarios';

export const PanelUsuarios = () => {
    return (
        <div className="usuarios rounded-1 mb-4 shadow p-0 position-relative border border-success">
            <h3 className="titulo text-center text-white py-2 mb-0">Usuarios</h3>
            
            <NotiUsuarios />

            <ListUsuarios />
        </div>
    )
}
