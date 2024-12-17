export type ProductRecord = {
    ProductId: string;
    PriceId: string;
    CheckoutUrl: string;
    Name: string;
    Price: number;
}

export type ProductList = {
    Records: ProductRecord[]
}