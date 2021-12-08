/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'c5f54b708b6fb6f3ba54e236d4546d39847377c3';
const API_BASE = 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/';
const STATE = '?state=RR'
const DATE = '&date=2021-06-25'

let items

let myHeader =  new Headers();
myHeader.append('Authorization', `Token ${API_KEY}`);

let myInit = {
    method: 'GET',
    headers: myHeader
}

const basicFetch = async () => {
    const req = await fetch(`${API_BASE}${STATE}${DATE}`, myInit);
    
    const json = await req.json();
    return json;

}

export default {
    getCaseList: async () =>{
        items = await basicFetch()
        return items.results

    }
}


// (`${API_BASE}${endpoint}`)