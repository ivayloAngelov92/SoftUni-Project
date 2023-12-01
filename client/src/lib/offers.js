import { get, post, put, del } from "./api.js";

const endpoints = {
    dashboard: "/data/games?sortBy=_createdOn%20desc",
    byId: '/data/games',
    homePage: '/data/games?sortBy=_createdOn%20desc&distinct=category'
}
export async function homePageGames(){
    return get(endpoints.homePage);
}

export async function getAllOffers() {
    return get(endpoints.dashboard);
}

export async function getOfferById(id) {
    return get(`${endpoints.byId}/${id}`);
}

export async function createOffer(data) {
    return post(endpoints.byId, data);
}
export async function updateOffer(id, data) {
    return put(`${endpoints.byId}/${id}`, data);
}
export async function deleteOffer(id) {
    return del(`${endpoints.byId}/${id}`)
}