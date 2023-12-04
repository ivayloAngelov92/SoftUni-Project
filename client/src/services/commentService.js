import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (drinkId) => {
    const query = new URLSearchParams({
        where: `drinkId="${drinkId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    // TODO: temp solution until migration to collections service 
    // return result.filter(comment => comment.drinkId === drinkId);
    return result
};

export const create = async (drinkId, username, text) => {
    const newComment = await request.post(baseUrl, {
        drinkId,
        username, 
        text,
    });

    return newComment;
};
