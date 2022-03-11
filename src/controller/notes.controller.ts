import {Request,Response} from 'express'
import { CreateNotesInput, DeleteNotesInput, UpdateNotesInput } from '../schema/notes.schema';
import { createNote, deleteNote, findAndUpdateNote, findNote } from '../service/notes.service';

export async function createNotesHandler(req: Request<{},{},CreateNotesInput['body']>,res:Response){
    try {
        const userID = res.locals.user._id;
        const body = req.body;
        //@ts-ignore
        const note  = await createNote({...body, user : userID});
        res.send(note);
    } catch (error) {
        console.log(error);
    }
}

export async function updateNotesHandler(req:Request<UpdateNotesInput["params"]>,res:Response){
    const userId = res.locals.user._id;
    const noteId = req.params.noteId;
    const update = req.body;
    
    const note = await findNote({noteId});
    
    if(!note){
        return res.sendStatus(404);
    }

    if(String(note.user) !== userId){
        return res.sendStatus(403);
    }

    const updatedNote = await findAndUpdateNote({noteId}, update,{new : true});
    return res.send(updatedNote);
}

export async function getNoteHandler(req:Request<UpdateNotesInput["params"]>,res:Response){
    const userId = res.locals.user._id;
    const noteId = req.params.noteId;

    const note = await findNote({noteId});
    if(!note){
        return res.sendStatus(404);
    }
    if(String(note.user) !== userId){
        return res.sendStatus(403);
    }
    
    return res.send(note);
}

export async function deleteNoteHandler(req:Request<DeleteNotesInput["params"]>, res:Response){
    const userId = res.locals.user._id;
    const noteId = req.params.noteId;
    
    const note = await findNote({noteId});

    if(!note){
        return res.sendStatus(404);
    }
    if(String(note.user) !== userId){
        return res.sendStatus(403);
    }

    await deleteNote({noteId});
    return res.sendStatus(200);
}