const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = 0;
for (let i = 0; i < numList.length; i++) {
    if (numList[i] % 2 === 0) {
        result += (numList[i] * 10)
    }
}
