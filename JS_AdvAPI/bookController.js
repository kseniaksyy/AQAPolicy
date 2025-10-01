const { default: axios } = require('axios');
const BaseController = require('./baseController.js');

class BooksController extends BaseController {
	async requestWithError() {
		try {
			// Cпеціально неправильний URL
			await axios.get('/BookStore/v1/Books_wrong');
		} catch (error) {
			return 'Помилка при запиті: ' + error.message;
		}
	}
	async getAllBooks() {
		return await this.axiosInstance.get('/BookStore/v1/Books');
	}

	async addBook(userId, isbn, token) {
		return await this.axiosInstance.post(
			'/BookStore/v1/Books',
			{
				userId: userId,
				collectionOfIsbns: [{ isbn: isbn }],
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
	}

	async removeAllBook(userId, token) {
		return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

module.exports = new BooksController();
