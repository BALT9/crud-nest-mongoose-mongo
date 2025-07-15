import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudentSchema = HydratedDocument<Estudent>

@Schema()
export class Estudent {
    @Prop()
    name: string

    @Prop()
    age: number

    @Prop()
    countrie: string
}

export const StudentSchema = SchemaFactory.createForClass(Estudent);