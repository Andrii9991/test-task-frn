export interface IProduct {
  title: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  category: string;
  rating: number;
  id: number;
  count?: number;
  body: string;
  availabilityStatus: string;
  shippingInformation: string;
}
