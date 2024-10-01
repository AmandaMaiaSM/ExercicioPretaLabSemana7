import { Document, model, Schema } from "mongoose";

export interface Animals extends Document {
    id: string;
    created_at: string;
    name: string;
    description?: string;
    value?: number;
    age?: number;
    breed?: string ;
    color?: string;
    status?: "read" | "unread" | "archived" | "deleted" | "donated"; 
}

const AnimalsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    value: { type: Number },
    age: { type: Number, default: null }, 
    breed: { type: String, default: null },
    color: { type: String, default: null },
    status: { type: String, enum: ['read', 'unread', 'archived', 'deleted'], default: 'unread' },
    created_at: { type: Date, default: Date.now },
  });

export const AnimalsModel = model<Animals>('Animals', AnimalsSchema);