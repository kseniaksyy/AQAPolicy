const average = 50;

switch (true) {
	case average < 60:
		console.log('Незадовільно');
		break;
	case average >= 60 && average <= 70:
		console.log('Задовільно');
		break;
	case average >= 71 && average <= 80:
		console.log('Добре');
		break;
	case average >= 81 && average <= 90:
		console.log('Дуже добре');
		break;
	case average >= 91 && average <= 100:
		console.log('Відмінно');
		break;
	default:
		console.log('Некоректне значення');
}
