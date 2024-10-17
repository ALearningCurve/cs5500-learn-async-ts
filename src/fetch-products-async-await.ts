async function fetchProducts(): Promise<string> {
    console.log('Begin fetch ... ');
    try {
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        console.log('Fetch done');

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data: { name: string; }[] = await response.json();
        console.log('response created');
        return data[0].name;
    } catch (error) {
        throw new Error(`Failed to fetch products: ${error}`);
    }
}

async function main(): Promise<void> {
    console.log('Begin main ...');
    try {
        const productName = await fetchProducts();
        console.log(productName);
    } catch (err) {
        if (err instanceof Error) {
            console.log(`Failure: ${err.message}`);
        }
    }
}

main();
console.log('End main thread');
