import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstudentsModule } from './estudents/estudents.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:12345@cluster0.hewbekg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    EstudentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
