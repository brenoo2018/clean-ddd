import { InMemoryAnswerssRepository } from 'test/repositories/in-memory-answers-repository';
import { AnswerQuestionUseCase } from './answer-question';

let inMemoryAnswerssRepository: InMemoryAnswerssRepository;
let sut: AnswerQuestionUseCase;

describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswerssRepository = new InMemoryAnswerssRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswerssRepository);
  });

  test('create an answer', async () => {
    const { answer } = await sut.execute({
      content: 'nova resposta',
      questionId: '1',
      instructorId: '1',
    });

    expect(answer.content).toEqual('nova resposta');
    expect(inMemoryAnswerssRepository.items[0].id).toEqual(answer.id);
  });
});
