import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudentDto } from './create-estudent.dto';

export class UpdateEstudentDto extends PartialType(CreateEstudentDto) {}
