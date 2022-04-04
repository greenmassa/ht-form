export interface Tour {
    hotelName: string,
    price: number,
    currency: string
}
export interface Country {
    id: number,
    name: string,
}
export interface Tours {
    tours?: Tour[]
}
export interface ToursWithQuery {
    tours?: Tour[],
    query: {
        departCity: string
    }
}
export interface Query {
    departCity: string,
    country: string,
    date: Date,
    nights: number,
    nightsTo: number
}