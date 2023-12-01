import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (drinkId) => {
    const query = new URLSearchParams({
        where: `drinkId="${drinkId}"`
    });

    const result = await request.get(`${baseUrl}`);

    // TODO: temp solution until migration to collections service 
    return Object.values(result).filter(comment => comment.drinkId === drinkId);
};

export const create = async (drinkId, username, text) => {
    const newComment = await request.post(baseUrl, {
        drinkId,
        username, 
        text,
    });

    return newComment;
};
