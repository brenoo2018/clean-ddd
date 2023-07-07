import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { FetchAnswerCommentsUseCase } from './fetch-answer-comments';
import { makeAnswerComment } from 'test/factories/make-answer-comment';

let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository;
let sut: FetchAnswerCommentsUseCase;
('');

describe('Fetch Answer Answer Comments', () => {
  beforeEach(() => {
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository();
    sut = new FetchAnswerCommentsUseCase(inMemoryAnswerCommentsRepository);
  });

  it('should be able to fetch answer answer comments', async () => {
    await inMemoryAnswerCommentsRepository.create(
      makeAnswerComment({ answerId: new UniqueEntityID('answer-01') })
    );
    await inMemoryAnswerCommentsRepository.create(
      makeAnswerComment({ answerId: new UniqueEntityID('answer-01') })
    );
    await inMemoryAnswerCommentsRepository.create(
      makeAnswerComment({ answerId: new UniqueEntityID('answer-01') })
    );

    const result = await sut.execute({
      answerId: 'answer-01',
      page: 1,
    });

    expect(result.value?.answerComments).toHaveLength(3);
  });

  it('should be able to fetch paginated answer answer comments', async () => {
    for (let index = 1; index <= 22; index++) {
      await inMemoryAnswerCommentsRepository.create(
        makeAnswerComment({ answerId: new UniqueEntityID('answer-01') })
      );
    }

    const result = await sut.execute({
      answerId: 'answer-01',
      page: 2,
    });

    expect(result.value?.answerComments).toHaveLength(2);
  });
});
