const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negativeRowAssert(arr: number[]): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasNeg = arr.some(num => num < 0);
            if (hasNeg) {
                resolve(`row has negative number: [${arr}]`);
            } else {
                reject("no negative number found");
            }
        }, 0);
    });
}

const promises = array2D_3.map((row) => negativeRowAssert(row));
Promise.any(promises)
    .then((results) => console.log(results))
    .catch((e) => console.error(e));