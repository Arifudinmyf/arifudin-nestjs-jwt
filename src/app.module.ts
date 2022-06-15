import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CrudModule } from './crud/crud.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/arifudincrud'),
    UserModule, 
    AuthModule, 
    CrudModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
