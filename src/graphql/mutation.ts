export const mutations = `#graphql
    createProduct(name:String, description: String, price:Float): Product
    deleteProduct(id:String): Product
`