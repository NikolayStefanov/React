export const getAll = (category = '')=> {
    let url= 'http://localhost:5000/pets';

    url = category ? url+'?'+category : url;

    return fetch(url)
        .then(res => res.json())
        .catch(console.log('ERROR'));
}