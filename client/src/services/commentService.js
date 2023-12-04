import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (drinkId) => {
    const query = new URLSearchParams({
        where: `drinkId="${drinkId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    // TODO: temp solution until migration to collections service 
    // return result.filter(comment => comment.drinkId === drinkId);
    return result
};

export const create = async (drinkId, text) => {
    const newComment = await request.post(baseUrl, {
        drinkId,
        text,
    });

    return newComment;
};
