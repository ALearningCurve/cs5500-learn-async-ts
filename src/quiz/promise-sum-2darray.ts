const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumRow(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            return reject('Cannot sum an empty array');
        }
        setTimeout(() => {
            resolve(arr.reduce((acc, curr) => acc + curr));
        }, 0);
    });
}

function sum2DArrayConcurrent(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            return reject('Cannot sum an empty array');
        }
        const promises = arr.map(row => sumRow(row));
        Promise.all(promises)
            .then(res => resolve(res.reduce((acc, curr) => acc + curr)))
            .catch(err => reject(err));
    });
}

const sumConcurrent = sum2DArrayConcurrent(array2D_1);
sumConcurrent
    .then(res => console.log(res))
    .catch(err => console.error(err));