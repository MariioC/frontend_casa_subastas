import { api } from './config.api'

export const _login = async ( data ) => {
    return await api.post('usuarios/login', data)
}