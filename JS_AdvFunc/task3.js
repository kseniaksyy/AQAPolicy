function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Не можна ділити на нуль!");
  }
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Введіть число!");
  }
  return numerator / denominator;
}

try {
  console.log(divide(25, 5));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(25, 0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide("25", "five"));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена");
}
