function handleNum(num) {
  console.log(num);
  while (num > 0) {
    handleNum(num - 1);
    break;
  }
}
handleNum(5);
