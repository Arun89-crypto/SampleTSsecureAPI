import { Express,Request, Response} from "express";
import { createNotesHandler, deleteNoteHandler, getNoteHandler, updateNotesHandler } from "./controller/notes.controller";
import { createUserSessionHandler, deleteSessionsHandler, getUserSessionsHandler } from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import requireUser from "./middleware/requireUser";
import validate from "./middleware/validateResources";
import { createNotesSchema, deleteNotesSchema, getNotesSchema, updateNotesSchema } from "./schema/notes.schema";
import { createSessionSchema } from "./schema/session.schema";
import { createUserSchema } from "./schema/user.schema";

export default function (app: Express) {
    app.get("/healthCheck",(req:Request, res:Response) => {
        res.sendStatus(200);
    })

    // USER ROUTES
    //------------

    // Register User
    app.post('/api/register', validate(createUserSchema), createUserHandler);
    // Login User
    app.post('/api/sessions', validate(createSessionSchema), createUserSessionHandler);
    // Get User Sessions
    app.get('/api/sessions',requireUser,getUserSessionsHandler);
    // Delete User Sessions
    app.delete('/api/sessions', requireUser, deleteSessionsHandler);

    // NOTES ROUTES
    //-------------

    // Add Notes
    app.post('/api/notes',[requireUser,validate(createNotesSchema)],createNotesHandler);
    // Update Note
    app.put('/api/notes/:noteId',[requireUser,validate(updateNotesSchema)],updateNotesHandler);
    // Get Product
    app.get('/api/notes/:noteId', [requireUser, validate(getNotesSchema)], getNoteHandler);
    // Delete Product
    app.delete('/api/notes/:noteId', [requireUser,validate(deleteNotesSchema)], deleteNoteHandler);

}