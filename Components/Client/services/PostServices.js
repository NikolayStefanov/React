import api from './apiConstants';

export const getAll = () =>{
    return fetch(api.posts)
    .then(res => res.json())
}