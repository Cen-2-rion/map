import ErrorRepository from '../app';

// проверочные тесты
describe('ErrorRepository', () => {
  const errorRepository = new ErrorRepository(
    { code: 400, message: 'Bad Request' },
    { code: 401, message: 'Unauthorized' },
    { code: 403, message: 'Forbidden' },
    { code: 404, message: 'Not Found' },
    { code: 500, message: 'Internal Server Error' },
  );

  test('get the error text by code', () => {
    expect(errorRepository.translate(400)).toBe('Bad Request');
    expect(errorRepository.translate(401)).toBe('Unauthorized');
    expect(errorRepository.translate(403)).toBe('Forbidden');
    expect(errorRepository.translate(404)).toBe('Not Found');
    expect(errorRepository.translate(500)).toBe('Internal Server Error');
  });

  test('return default error text if code is not found', () => {
    expect(errorRepository.translate(300)).toBe('Unknown error');
  });
});
