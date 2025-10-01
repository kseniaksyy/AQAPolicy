const average = 99;
if (average < 60) {
	console.log('Незадовільно');
} else if (average >= 60 && average <= 70) {
	console.log('Задовільно');
} else if (average >= 71 && average <= 80) {
	console.log('Добре');
} else if (average >= 81 && average <= 90) {
	console.log('Дуже добре');
} else if (average >= 91 && average <= 100) {
	console.log('Відмінно');
} else {
	console.log('Некоректне значення');
}
