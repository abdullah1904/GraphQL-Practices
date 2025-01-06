
const Schema = `#graphql
    type Product{
        id : ID,
       name: String
       description: String
       price: Float
       soldOut: Boolean
    }
    type Query{
        product: Product
    }
`

export default Schema;