function handleEven() {
    console.log("number is even")
}

function handleOdd() {
    console.log("number is odd")
}


function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven()
    }
    else handleOdd()
}


handleNum(39, handleEven, handleOdd)
handleNum(108, handleEven, handleOdd)