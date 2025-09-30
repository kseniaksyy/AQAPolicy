export default class Book {
  constructor(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
  get year() {
    return this._year;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Невірний формат імені автора");
    }
    this._author = value;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Невірний фомат назви книги");
    }
    this._title = value;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Невірний формат року");
    }
    this._year = value;
  }

  printInfo() {
    return `Автор: ${this.author} Назва книги: ${this.title} Рік видання: ${this.year}`;
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) return null;
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest,
    );
  }
}

// const result = `${book1.printInfo()}
// ${book2.printInfo()}
// ${book3.printInfo()}`;
// console.log(result);
