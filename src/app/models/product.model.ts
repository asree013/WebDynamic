export class Product {
    name: string = '';
    price: number = 0;
    stock: number = 0;
    image: any;
}

export interface ProductResponse {
    id: number;
    name: string;
    image: string;
    stock: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}