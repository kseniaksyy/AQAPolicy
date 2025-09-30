import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Тарас Шевченко", "Кобзар", 1840);
const book2 = new Book("Леся Українка", "Лісова Пісня", 1911);
const book3 = new Book("Оксана Забужко", "Інопланетянка", 2000);
const ebook1 = new EBook("Ольга Кобилянська", "Царівна", 1895, "EPUB");

console.log(book1.printInfo());
console.log(book2.printInfo());
console.log(book3.printInfo());
console.log(ebook1.printInfo());

ebook1.format = "FB2";
console.log("Новий формат:", ebook1.format);

const oldest = Book.findOldestBook([book1, book2, book3, ebook1]);
console.log("Найстарша книга:" + oldest.printInfo());

const ebookFromBook = EBook.fromBook(book3, "MOBI");
console.log(ebookFromBook.printInfo());
