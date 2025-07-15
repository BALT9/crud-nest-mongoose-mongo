import { Injectable } from '@nestjs/common';
import { CreateEstudentDto } from './dto/create-estudent.dto';
import { UpdateEstudentDto } from './dto/update-estudent.dto';

@Injectable()
export class EstudentsService {
  create(createEstudentDto: CreateEstudentDto) {
    return 'This action adds a new estudent';
  }

  findAll() {
    return `This action returns all estudents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudent`;
  }

  update(id: number, updateEstudentDto: UpdateEstudentDto) {
    return `This action updates a #${id} estudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudent`;
  }
}
