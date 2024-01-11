import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { OrderService } from './order.service';
//   import { CreateProductDto } from './dto/create-product-dto';
//   import { UpdateBookDto } from './dto/update-book.dto';
  import { Order } from './order.schema';
  import { MessagePattern } from '@nestjs/microservices';
  
  @Controller('orders')
  export class OrderController {
    constructor(private orderService: OrderService) {}
  
    @Get()
    async getAllOrders(): Promise<Order[]> {
      return this.orderService.findAll();
    }
  
    @Post('addOrder')
    async createOrder(
      @Body()
      order
    //   : CreateProductDto,
    ): Promise<Order> {
      return this.orderService.create(order);
    }
  
    @Get(':id')
    async getOrder(
      @Param('id')
      id: string,
    ): Promise<Order> {
      return this.orderService.findById(id);
    }
  
    @Put(':id')
    async updateOrder(
      @Param('id')
      id: string,
      @Body()
      order
    //   : CreateProductDto,
    ): Promise<Order> {
      return this.orderService.updateById(id, order);
    }
  
    @Delete(':id')
    async deleteOrder(
      @Param('id')
      id: string,
    ): Promise<Order> {
      return this.orderService.deleteById(id);
    }
  }