const products = [
    { 
        id: '1', 
        name: 'iphone 12', 
        price: 1000, 
        category: 'celular', 
        img:'https://www.pcfactory.cl/public/foto/39374/4_1000.jpg', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    {   id: '2', 
        name: 'samsung s21', 
        price: 800, 
        category: 'celular', 
        img:'https://www.pcfactory.cl/public/foto/46050/6_1000.jpg', 
        stock: 16, 
        description:'Descripcion de Samsung s21'
    },
    { 
        id: '3', 
        name: 'Ipad 8va generacion', 
        price: 1200, 
        category: 'tablet', 
        img:'https://www.pcfactory.cl/public/foto/47318/2_1000.jpg', 
        stock: 0, 
        description:'Descripcion de Ipad'
    }
]

export const getAllProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsSearch = (term) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((element) => element.name.match(term)))
        }, 1500)
    })
}

export const getProductId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((element) => element.id == id))
        }, 1500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((element) => element.category === category))
        }, 1500)
    })
}