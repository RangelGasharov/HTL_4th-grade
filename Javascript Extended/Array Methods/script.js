const products = [
    { name: "Lamp", price: 25 },
    { name: "Refridgerator", price: 500 },
    { name: "Book", price: 10 },
    { name: "Chair", price: 50 },
    { name: "Globe", price: 30 }
]

const filteredProducts = products.filter((product) => {
    return product.price <= 50
})

const productNames = products.map((product) => {
    return product.name;
})

const foundProduct = products.find((product) => {
    return product.name == "Book";
})

const hasInexpensiveProducts = products.some((product) => {
    return product.price <= 100;
})

const hasInexpensiveProductsAll = products.every((product) => {
    return product.price <= 100;
})

const total = products.reduce((currentTotal, product) => {
    return product.price + currentTotal;
}, 0)

console.log(products);
console.log(filteredProducts);
console.log(productNames);
console.log(foundProduct);
console.log(hasInexpensiveProducts);
console.log(hasInexpensiveProductsAll);
console.log(total);

products.forEach((product) => {
    console.log(`${product.name} - ${product.price}$`);
})

const numbers = [1, 2, 3, 4, 5];
const includesThree = numbers.includes(3);

console.log(includesThree);