import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: [true, 'Name must not be empty'],
    minlength: 4,
    maxlength: 16,
  })
  name: string;

  @Prop({
    required: [true, 'Last Name must not be empty'],
    minlength: 4,
    maxlength: 16,
  })
  lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// This part here (see https://mongoosejs.com/docs/guide.html#es6-classes)
UserSchema.loadClass(User);
