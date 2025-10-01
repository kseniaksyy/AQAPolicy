const axios = require('axios').default;
const BooksController = require('./bookController.js');
const AccountController = require('./accountController.js');
let bookIsbn;
let token;

const user = {
	userName: 'Kseniia',
	password: 'Kseniia123$',
};

describe('Book Tests', () => {
	beforeAll(async () => {
		await BooksController.removeAllBook(user.userId, token);
		let randomBookIndex = Math.floor(Math.random() * 8);
		user.userId = await AccountController.getUserId(user.userName, user.password);
		token = await AccountController.getAuthToken(user.userName, user.password);
		const booksResponse = await BooksController.getAllBooks();
		const booksResponseData = booksResponse.data;
		bookIsbn = booksResponseData.books[0].isbn;
	});

	test('Request with error', async () => {
		const response = await BooksController.requestWithError();
		expect(response).toBe('Помилка при запиті: Invalid URL');
	});

	test('Get all books and verify length', async () => {
		const response = await BooksController.getAllBooks();
		const responseBody = response.data;
		expect(responseBody.books).toHaveLength(8);
	});
	test('Add new book to user', async () => {
		const response = await BooksController.addBook(user.userId, bookIsbn, token);
		const responseBody = response.data;
		expect(response.status).toBe(201);
		expect(responseBody.books[0].isbn).toBe(bookIsbn);
	});
	test('Remove books from user', async () => {
		const response = await BooksController.removeAllBook(user.userId, token);
		expect(response.status).toBe(204);
	});
	afterAll(async () => {
		const response = await BooksController.removeAllBook(user.userId, token);
		expect(response.status).toBe(204);
	});
});

describe('Account tests', () => {
	test('Generate token', async () => {
		const response = await AccountController.getAuthToken(user.userName, user.password);
		expect(response).toBeDefined();
		expect(typeof response).toBe('string');
	});
});
