export const QueryResolvers = {
    products: () => {
        return [
            {
                id: "1",
                name: "Product 1",
                description: "Description 1",
                price: 100,
                soldOut: "AVAILABLE",
                inventory: 100,
                stores: [{
                    name: "Store 1"
                }]
            },
            {
                id: "2",
                name: "Product 2",
                description: "Description 2",
                price: 200,
                soldOut: "SOLD_OUT",
                inventory: 200,
                stores: [{
                    name: "Store 2"
                }]
            }
        ]
    },
    stores: () => {
        return [
            {
                name: "Store 1"
            },
            {
                name: "Store 2"
            }
        ]
    },
    product: (_: any, payload: { id: string }) => {
        return {
            id: payload.id,
            name: `Product ${payload.id}`,
            description: `Description ${payload.id}`,
            price: 100 * parseInt(payload.id),
            soldOut: parseInt(payload.id) % 2 === 0 ? "SOLD_OUT" : "AVAILABLE",
            inventory: 100 * parseInt(payload.id),
            stores: [{
                name: `Store ${payload.id}`
            }]
        }
    }
}

export const MutationResolvers = {
    createProduct: (_: any, payload: { name: string, description: string, price: number }) => {
        return {
            id: "1",
            name: payload.name,
            description: payload.description,
            price: payload.price,
            soldOut: "AVAILABLE",
            stores: [
                {
                    name: "Store 1"
                },
                {
                    name: "Store 2"
                }
            ]
        }
    },
    createStore: (_: any, payload: { name: string }) => {
        return {
            name: payload.name
        }
    }
}