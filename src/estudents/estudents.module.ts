import { Module } from '@nestjs/common';
import { EstudentsService } from './estudents.service';
import { EstudentsController } from './estudents.controller';

@Module({
  controllers: [EstudentsController],
  providers: [EstudentsService],
})
export class EstudentsModule {}
