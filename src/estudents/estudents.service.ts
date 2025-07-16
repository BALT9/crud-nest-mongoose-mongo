import { Injectable } from '@nestjs/common';
import { CreateEstudentDto } from './dto/create-estudent.dto';
import { UpdateEstudentDto } from './dto/update-estudent.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Estudent } from './schemas/estudent.schema';
import { Model } from 'mongoose';

@Injectable()
export class EstudentsService {

  // injectamos el modelo 
  constructor(
    @InjectModel(Estudent.name) private studentModel: Model<Estudent>
  ) { }

  async create(createEstudentDto: CreateEstudentDto) {
    // aqui mandamos los datos a la base de datos 
    const createDStudent = new this.studentModel(createEstudentDto);
    return createDStudent.save();
  }

  async findAll() {
    return this.studentModel.find().exec();
  }

  async findOne(id: string) {
    return this.studentModel.findById(id).exec();
  }

  async update(id: string, updateEstudentDto: UpdateEstudentDto) {
    return this.studentModel.findByIdAndUpdate(id, updateEstudentDto, {new: true}).exec();
  }

  async remove(id: string) {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
