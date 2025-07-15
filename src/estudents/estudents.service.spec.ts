import { Test, TestingModule } from '@nestjs/testing';
import { EstudentsService } from './estudents.service';

describe('EstudentsService', () => {
  let service: EstudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudentsService],
    }).compile();

    service = module.get<EstudentsService>(EstudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
