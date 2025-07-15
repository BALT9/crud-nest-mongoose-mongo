import { Test, TestingModule } from '@nestjs/testing';
import { EstudentsController } from './estudents.controller';
import { EstudentsService } from './estudents.service';

describe('EstudentsController', () => {
  let controller: EstudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudentsController],
      providers: [EstudentsService],
    }).compile();

    controller = module.get<EstudentsController>(EstudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
