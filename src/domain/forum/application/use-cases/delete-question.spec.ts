import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository';
import { makeQuestion } from 'test/factories/make-question';
import { DeleteQuestionUseCase } from './delete-question';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: DeleteQuestionUseCase;

describe('Delete question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new DeleteQuestionUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to delete a question', async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityID('author-01') },
      new UniqueEntityID('question-01')
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await sut.execute({
      authortId: 'author-01',
      questionId: 'question-01',
    });

    expect(inMemoryQuestionsRepository.items).toHaveLength(0);
  });

  it('should be able to delete a question from another user', async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityID('author-01') },
      new UniqueEntityID('question-01')
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    expect(() => {
      return sut.execute({
        authortId: 'author-02',
        questionId: 'question-01',
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
