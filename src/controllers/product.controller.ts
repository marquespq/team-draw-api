import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  CreateProductInput,
  UpdateProductInput,
} from '../schemas/product.schema';

import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct,
  findProducts,
} from '../services/product.service';

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput['body']>,
  res: Response
) {
  const { _id: user } = res.locals.user;

  const { body } = req;

  const product = await createProduct({ ...body, user });

  res.status(StatusCodes.CREATED).json(product);
}

export async function updateProductHandler(
  req: Request<UpdateProductInput['params']>,
  res: Response
) {
  const { _id: userId } = res.locals.user;
  const { productId } = req.params;
  const update = req.body;

  const product = await findProduct({ productId });

  if (!product) {
    res.sendStatus(StatusCodes.NOT_FOUND);
  }

  if (String(product?.user) !== userId) {
    res.sendStatus(StatusCodes.FORBIDDEN);
  }

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  });

  // O caso de uso comum é retornar 204 como resultado de uma solicitação PUT sem alterar o conteúdo atual da página exibida para o usuário.
  // res.status(StatusCodes.NO_CONTENT);

  // Se a página for alterada para a página recém-atualizada, o 200 deve ser usado em vez disso.
  res.status(StatusCodes.OK).json(updatedProduct);
}

export async function getProductsHandler(req: Request, res: Response) {
  const products = await findProducts({});

  res.status(StatusCodes.OK).json(products);
}

export async function getProductHandler(
  req: Request<UpdateProductInput['params']>,
  res: Response
) {
  const { productId } = req.params;
  const product = await findProduct({ productId });

  if (!product) {
    res.sendStatus(StatusCodes.NOT_FOUND);
  }

  res.status(StatusCodes.OK).json(product);
}

export async function deleteProductHandler(
  req: Request<UpdateProductInput['params']>,
  res: Response
) {
  const { _id: userId } = res.locals.user;
  const { productId } = req.params;

  const product = await findProduct({ productId });

  if (!product) {
    res.sendStatus(StatusCodes.NOT_FOUND);
  }

  if (String(product?.user) !== userId) {
    res.sendStatus(StatusCodes.FORBIDDEN);
  }

  await deleteProduct({ productId });

  res.sendStatus(StatusCodes.NO_CONTENT);
}
