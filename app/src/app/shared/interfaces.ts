export interface Tour {
    hotelName: string,
    price: number,
    currency: string
}
export interface Country {
    id: number,
    name: string,
}
export interface ToursRes {
    tours: Tour[],
    query:
      {departCity: string | '',
       country: string | '',
       date: Date | undefined,
       nights: string,
       nightsTo: string}
}
