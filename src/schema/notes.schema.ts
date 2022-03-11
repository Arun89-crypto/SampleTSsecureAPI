import {object, string, TypeOf} from 'zod';

const payload = {
    body : object({
        title : string({
            required_error : "Title is required"
        }),
        description : string({
            required_error : "Description is required"
        }),
        tag : string({})
    })
}

const params = {
    params : object({
        noteId : string({
            required_error : "Note ID is required"
        })
    })
}

export const createNotesSchema = object({...payload});
export const updateNotesSchema = object({...payload, ...params});
export const deleteNotesSchema = object({...params});
export const getNotesSchema = object({...params});

export type CreateNotesInput = TypeOf<typeof createNotesSchema>;
export type UpdateNotesInput = TypeOf<typeof updateNotesSchema>;
export type DeleteNotesInput = TypeOf<typeof deleteNotesSchema>;
export type GetNotesInput = TypeOf<typeof getNotesSchema>;