const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = numList
                .filter(n => n % 2 === 0)
                .map(a => a * 10)
                .reduce((a, b) => a + b)
