import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/drinks'
const likeUrl= 'http://localhost:3030/data/likes'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (drinkId) => {
    const result = await request.get(`${baseUrl}/${drinkId}`, );

    return result;
}

export const getLatest = async () => {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
    return result
    
}
export const create = async (drinkData) => {
    const result = await request.post(baseUrl, drinkData);

    return result;
};
export const like = async (drinkId) => {
    const result = await request.post(likeUrl, drinkId);
    return result;
};
export const getOneLike = async (drinkId) => {
    const result = await request.get(`${likeUrl}/${drinkId}`, );

    return result;
}
export const getAllLike = async () => {
    const result = await request.get(likeUrl );

    return result;
}
export const allLikes= async(id)=> {
    const result= await request.get(`${likeUrl}?where=drinkId%3D%22${id}%22&distinct=_ownerId&count`)
	return result
}
export const allLikesProfile= async(id)=> {
    const result= await request.get(`${likeUrl}?where=userId%3D%22${id}%22&distinct=_ownerId`)
	return result
}
export const hasLiked = async (drinkId, userId)=>{
    const result= request.get(`${likeUrl}?where=drinkId%3D%22${drinkId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    return result
}
export const getMyDrinks= async(userId)=>{
    const result= await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    return result
}

export const edit = async (drinkId, drinkData) => {
    const result = await request.put(`${baseUrl}/${drinkId}`, drinkData);

    return result;
};

export const remove = async (drinkId) => request.remove(`${baseUrl}/${drinkId}`);
export const unlike = async (likeId) => request.remove(`${likeUrl}/${likeId}`)

