
import {get} from '../lib/api'
const endpoints= {
    drinks:'/drinks'
}
const baseUrl= 'http://localhost:3030/jsonstore/drinks'
export const getAll= async ()=>{
    const result= await get(endpoints.drinks)
    return Object.values(result)
}

export const create= async(drinkData)=>{
   const response= fetch (`${baseUrl}/drinks`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(drinkData)
    })
    const result= await response.json()
    return result
}