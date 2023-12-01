
import {get, post} from '../lib/api'
const endpoints= {
    drinks:'/drinks',

}
// const baseUrl= 'http://localhost:3030/jsonstore/drinks'
export async function getAll(){
    const result= await get(endpoints.drinks)
    return Object.values(result)
}

export async function create(data) {
    return post(endpoints.drinks, data);
}