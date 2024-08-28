export type CartItem = {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
};

export type Cart = {
  id: number;
  buyerId: string;
  items: CartItem[];
  paymentIntentId?: string;
  clientSecret?: string;
};
