import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudentsService } from './estudents.service';
import { CreateEstudentDto } from './dto/create-estudent.dto';
import { UpdateEstudentDto } from './dto/update-estudent.dto';

@Controller('estudents')
export class EstudentsController {
  constructor(private readonly estudentsService: EstudentsService) {}

  @Post()
  create(@Body() createEstudentDto: CreateEstudentDto) {
    return this.estudentsService.create(createEstudentDto);
  }

  @Get()
  findAll() {
    return this.estudentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudentDto: UpdateEstudentDto) {
    return this.estudentsService.update(+id, updateEstudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudentsService.remove(+id);
  }
}
