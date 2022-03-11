import mongoose from "mongoose";
import { string } from "yup";
import { UserDocument } from "./user.model";

export interface NotesDocument extends mongoose.Document{
    user : UserDocument['_id'];
    title : string;
    description: string;
    tag : string;
    createdAt : Date;
    updatedAt : Date;
}

const notesSchema = new mongoose.Schema(
    {
        user : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
        title : {type : String, required : true},
        description : {type : String, required : true},
        tag : {type : String}
    },
    {
        timestamps : true,
    }
)

const NotesModel = mongoose.model<NotesDocument>("Notes",notesSchema);

export default NotesModel;