// класс внутри которого хранится Map
export default class ErrorRepository {
  constructor(...errors) {
    this.map = new Map();

    // добавляем набор ошибок в Map, в котором ключ - код ошибки, а значение - текстовое описание
    errors.forEach((error) => this.map.set(error.code, error.message));
  }

  // метод получения описания ошибки по коду, если код отсутствует возвращать строку 'Unknown error'
  translate(code) {
    return this.map.get(code) || 'Unknown error';
  }
}
