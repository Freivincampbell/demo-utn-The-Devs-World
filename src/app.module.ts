import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

const url = process.env.MONGO_URL || 'localhost';
@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${url}:27018/demoUTN`, {
      useNewUrlParser: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
