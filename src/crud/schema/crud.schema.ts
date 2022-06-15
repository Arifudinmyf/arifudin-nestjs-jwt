import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CrudDocument = Crud & Document;

@Schema()
export class Crud {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    address: string;
}

export const CrudSchema = SchemaFactory.createForClass(Crud);