function delayedLog(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}

delayedLog("This is a test text message", 4000);
