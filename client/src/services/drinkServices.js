const baseUrl= 'http://localhost:3030/jsonstore'

export const create= async(drinkData)=>{
   const response= fetch (`${baseUrl}/drinks`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(drinkData)
    })
    const result= (await response).json()
    return result
}