function isPalindrome(input) {
    var inputArray = input.split("");
    var length = input.length;
    var midLength = Math.round(length / 2);
    var checkArray1 = [];
    var checkArray2 = [];
    console.log(midLength);
    for (i=0; i <= midLength; i++) {
        checkArray1.push(inputArray[i]);
    }
    for (i=length; i <= midLength; i--) {
        checkArray2.push(inputArray[i]);
    }
    console.log(checkArray1, checkArray2);
    if (checkArray1 === checkArray2) {
        console.log("true");
        return true;
    }
}