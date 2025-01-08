export const typedefs = `#graphql
    enum SoldStatus{
        SOLD_OUT
        AVAILABLE
    }
    type Store{
        name: String
    }
    type Product{
        id : ID
        name: String
        description: String
        price: Float
        inventory: Int
        soldOut: SoldStatus
        stores: [Store]!
    }
`