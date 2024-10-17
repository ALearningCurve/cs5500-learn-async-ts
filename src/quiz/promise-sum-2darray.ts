const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        // do error handling
        if (arr.length <= rowIdx) {
            return reject(`Row Index ${rowIdx} must be within 0 and ${arr.length - 1}`);
        }
        if (arr[rowIdx].length === 0) {
            return reject("cannot sum an empty row");
        }

        // actually sum the row
        return resolve(arr[rowIdx].reduce((acc, curr) => acc + curr));
    });
}


async function sumOfAnArray(arr: number[][]): Promise<number> {
    // check error conditions
    if (arr.length === 0) {
        throw new Error("cannot sum an empty array");
    }

    // then actually sum the array row-wise
    const rowSumPromises = arr.map((_, index) => sumOfARow(arr, index));
    const rowSums = await Promise.all(rowSumPromises);
    return rowSums.reduce((acc, curr) => acc + curr);
}

// calculate the sum for a given array with error handling.
// returns the status of the sum operation.
async function calculateSum(array: number[][]): Promise<string> {
    try {
        const sum = await sumOfAnArray(array);
        console.log(`Sum = ${sum}`);
        return "done";
    } catch (error) {
        console.error(`Error Msg: ${error}`);
        return "failed";
    }
}

// Sum = 45, done
calculateSum(array2D_1)
    .then(status => console.log(status));

// Error Msg: cannot sum an empty array, failed
calculateSum([])
    .then(status => console.log(status));