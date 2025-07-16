import { Module } from '@nestjs/common';
import { EstudentsService } from './estudents.service';
import { EstudentsController } from './estudents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Estudent, StudentSchema } from './schemas/estudent.schema';

@Module({
  // importa el esquema estudent especifico para el modulo estudents
  imports: [MongooseModule.forFeature([{name: Estudent.name, schema: StudentSchema}])],
  controllers: [EstudentsController],
  providers: [EstudentsService],
})
export class EstudentsModule {}
