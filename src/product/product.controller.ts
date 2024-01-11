import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ProductService } from './product.service';
//   import { CreateProductDto } from './dto/create-product-dto';
//   import { UpdateBookDto } from './dto/update-book.dto';
  import { Product } from './product.schema';
  import { MessagePattern } from '@nestjs/microservices';
  
  @Controller('products')
  export class ProductController {
    constructor(private productService: ProductService) {}
  
    @Get()
    async getAllProducts(): Promise<Product[]> {
      return this.productService.findAll();
    }
  
    @Post('addProduct')
    async createProduct(
      @Body()
      product
    //   : CreateProductDto,
    ): Promise<Product> {
      return this.productService.create(product);
    }
  
    @Get(':id')
    async getProduct(
      @Param('id')
      id: string,
    ): Promise<Product> {
      return this.productService.findById(id);
    }
  
    @Put(':id')
    async updateProduct(
      @Param('id')
      id: string,
      @Body()
      product
    //   : CreateProductDto,
    ): Promise<Product> {
      return this.productService.updateById(id, product);
    }
  
    @Delete(':id')
    async deleteProduct(
      @Param('id')
      id: string,
    ): Promise<Product> {
      return this.productService.deleteById(id);
    }
  }