import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository';
import { AnswerQuestionUseCase } from './answer-question';

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it('should be able create an answer', async () => {
    const { answer } = await sut.execute({
      content: 'nova resposta',
      questionId: '1',
      instructorId: '1',
    });

    expect(answer.content).toEqual('nova resposta');
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id);
  });
});
