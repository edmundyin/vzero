const products = [
    {
        id: "1",
        title: "Kaizen Pants",
        size: "XS",
        price: 80.00,
        quantity: 10
    },
    {
        id: "2",
        title: "Kaizen Pants",
        size: "S",
        price: 80.00,
        quantity: 20
    },
    {
        id: "3",
        title: "Kaizen Pants",
        size: "M",
        price: 80.00,
        quantity: 20
    },
    {
        id: "4",
        title: "Kaizen Pants",
        size: "L",
        price: 80.00,
        quantity: 10
    },
]

function getProductData(id: string){
    let productData = products.find(product => product.id === id);

    if(productData == undefined) {
        console.log("Product data does not exist for ID :" + id);
        return undefined;
    }

    return productData;
}


export { products, getProductData };