import { URL_API } from './Api';
import { handleResponse } from './handle-response';

export const apiService = {
    getAll,
};

function getAll(name, status) {
    const requestOptions = { 
        method: 'GET', 
    };

    return fetch(`${URL_API.BASE}/character/?name=${name}&status=${status}`, requestOptions).then(handleResponse);
}