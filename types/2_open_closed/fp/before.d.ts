export function Product(o: ProductProto): ProductContext;
export type ProductContext = {
    calculate_price: () => number;
};
export type ProductProto = {
    getPrototype: () => string;
    calculate: () => number;
};
