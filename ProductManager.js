class ProductManager{
    constructor (){
        this.id = 0
        this.products = []
    }


    addProduct = (productToAdd) =>{
        const propsToCheck = ['title', 'description', 'price', 'thumbnail', 'code', 'stock']
        for(let key of propsToCheck ){
            if(!Object.keys(productToAdd).includes(key)){
                console.error('Error: el producto ingresado no cuenta con las propiedades correspondientes.')
                return null
            }
        }
        if(this.products.some(product => product.code === productToAdd.code)){
            console.error('Error: el campo code ya existe.')
            return null
        }
       
        this.products.push({...productToAdd, id: this.id++})
    }
    getProducts = () => this.products
    getProductById = (id) => {
        const productFinded = this.products.find(product =>product.id === id)
        if(!productFinded){
            console.error("Error: product not found")
            return null
        }
        return productFinded
    }
}


/* Pruebas */


const myProductManager = new ProductManager()


myProductManager.addProduct({
    title: 'celular',
    description: 'lorem',
    price: 300,
    thumbnail: '',
    code: 'x-2',
    stock: 3
})


myProductManager.addProduct(
    {
        title: 'celular',
        description: 'lorem',
        price: 300,
        thumbnail: '',
        stock: 4,
        code: 'z-1'
    }
)


console.log(myProductManager.getProductById(1))


console.log(myProductManager.getProducts())
