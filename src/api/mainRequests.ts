import { instanceApi } from "./instance";
import type { IProduct } from "../interfaces/product";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const { data } = await instanceApi.get<{ products: IProduct[] }>(
    "products?limit=100"
  );

  return data.products;
};
