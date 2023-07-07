import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository';
import { makeQuestion } from 'test/factories/make-question';
import { FetchRecentsQuestionsUseCase } from './fetch-recents-questions';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: FetchRecentsQuestionsUseCase;

describe('Fetch Recent Questions', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new FetchRecentsQuestionsUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to fetch recent questions', async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2022, 0, 20) })
    );
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2022, 0, 18) })
    );
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2022, 0, 23) })
    );

    const result = await sut.execute({ page: 1 });

    expect(result.value?.questions).toEqual([
      expect.objectContaining({ createdAt: new Date(2022, 0, 23) }),
      expect.objectContaining({ createdAt: new Date(2022, 0, 20) }),
      expect.objectContaining({ createdAt: new Date(2022, 0, 18) }),
    ]);
  });

  it('should be able to fetch paginated recent questions', async () => {
    for (let index = 1; index <= 22; index++) {
      await inMemoryQuestionsRepository.create(makeQuestion());
    }

    const result = await sut.execute({ page: 2 });

    expect(result.value?.questions).toHaveLength(2);
  });
});
