import NotesModel,{NotesDocument} from '../model/notes.model';
import {DocumentDefinition,FilterQuery,QueryOptions,UpdateQuery} from 'mongoose'


export async function createNote(input: DocumentDefinition<Omit<NotesDocument,"createdAt" | "updatedAt">>){
    return NotesModel.create(input);
}

export async function findNote(query : FilterQuery<NotesDocument>, options : QueryOptions = {lean: true}){
        return NotesModel.findOne(query, {}, options);
}

export async function findAndUpdateNote(query: FilterQuery<NotesDocument>, update: UpdateQuery<NotesDocument>, options : QueryOptions){
    return NotesModel.findOneAndUpdate(query, update,options)
}

export async function deleteNote(query: FilterQuery<NotesDocument>){
    return NotesModel.deleteOne(query);
}