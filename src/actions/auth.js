import { _login } from "../api/usuarios.api"
import { types } from "../types/types"  
import { finishLoading, startLoading } from "./ui"

export const startLogin = (documento, password) => {
    return async ( dispatch ) => {
        // Hago la petición para iniciar sesión
        dispatch( startLoading() )

        const { data } = await _login({ documento, password });

        console.log( data );

        if(data.error) {
            dispatch(finishLoading());
            return;
        }
        const { usuario, token } = data;
        usuario['logged'] = true;

        dispatch( login(usuario) )
        dispatch( finishLoading() )

        // setTimeout(() => {

        //     dispatch( login({ nombre: 'Mario Carreño', logged: true }) )
        //     dispatch( finishLoading() )

        // }, 5000)
    }    
}

export const verifyLoggin = (documento, password) => {
    return ( dispatch ) => {
        // Hago la petición para iniciar sesión
        dispatch( startLoading() )

        setTimeout(() => {

            dispatch( login({ nombre: 'Mario Carreño', logged: true }) )
            dispatch( finishLoading() )

        }, 5000)
    }    
}

export const login = ( usuario = {} ) => ({
    type: types.login,
    payload: usuario
})