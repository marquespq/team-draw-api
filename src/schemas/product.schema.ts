import { object, string, number, InferType } from 'yup';

const payload = {
  body: object({
    title: string().defined('Title is required'),
    description: string()
      .defined('Description is required')
      .min(120, 'Description should be at least 120 characters long'),
    price: number()
      .defined('Price is required')
      .typeError('Price must be a number'),
    image: string().url('Image must be a valid url').default(''),
  }).defined(),
};

const params = {
  params: object({ productId: string().defined('productId is required') }),
};

export const createProductSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...payload,
  ...params,
});

export const deleteProductSchema = object({
  ...params,
});

export const getProductSchema = object({
  ...params,
});

export type CreateProductInput = InferType<typeof createProductSchema>;
export type UpdateProductInput = InferType<typeof updateProductSchema>;
export type ReadProductInput = InferType<typeof getProductSchema>;
export type DeleteProductInput = InferType<typeof deleteProductSchema>;
