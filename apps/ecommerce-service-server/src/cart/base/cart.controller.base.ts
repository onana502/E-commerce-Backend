/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CartService } from "../cart.service";
import { CartCreateInput } from "./CartCreateInput";
import { Cart } from "./Cart";
import { CartFindManyArgs } from "./CartFindManyArgs";
import { CartWhereUniqueInput } from "./CartWhereUniqueInput";
import { CartUpdateInput } from "./CartUpdateInput";

export class CartControllerBase {
  constructor(protected readonly service: CartService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cart })
  async createCart(@common.Body() data: CartCreateInput): Promise<Cart> {
    return await this.service.createCart({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        items: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Cart] })
  @ApiNestedQuery(CartFindManyArgs)
  async carts(@common.Req() request: Request): Promise<Cart[]> {
    const args = plainToClass(CartFindManyArgs, request.query);
    return this.service.carts({
      ...args,
      select: {
        createdAt: true,
        id: true,
        items: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cart(
    @common.Param() params: CartWhereUniqueInput
  ): Promise<Cart | null> {
    const result = await this.service.cart({
      where: params,
      select: {
        createdAt: true,
        id: true,
        items: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCart(
    @common.Param() params: CartWhereUniqueInput,
    @common.Body() data: CartUpdateInput
  ): Promise<Cart | null> {
    try {
      return await this.service.updateCart({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          items: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCart(
    @common.Param() params: CartWhereUniqueInput
  ): Promise<Cart | null> {
    try {
      return await this.service.deleteCart({
        where: params,
        select: {
          createdAt: true,
          id: true,
          items: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
