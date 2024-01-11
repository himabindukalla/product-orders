import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  CLOTHING = 'Clothing',
  BOOKS = 'Books',
  TOYS = 'Toys',
  BEAUTY = 'Beauty',
}

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  seller: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;

}

export const ProductSchema = SchemaFactory.createForClass(Product);