import Book from './Book.js';
export default class EBook extends Book {
	constructor(author, title, year, format) {
		super(author, title, year);
		this.format = format;
	}
	get format() {
		return this._format;
	}
	set format(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Невірний формат');
		}
		this._format = value;
	}

	printInfo() {
		return `Автор: ${this.author} Назва книги: ${this.title} Рік видання: ${this.year} Формат файлу: ${this.format}`;
	}

	static fromBook(bookInstance, format) {
		if (!(bookInstance instanceof Book)) {
			throw new Error('Аргумент повинен бути екземпляром Book.');
		}
		return new EBook(bookInstance.author, bookInstance.title, bookInstance.year, format);
	}
}

// const result = `${ebook1.printInfo()}
// ${ebook2.printInfo()}
// ${ebook3.printInfo()}`;
// console.log(result);
