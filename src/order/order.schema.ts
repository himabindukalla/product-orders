import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export enum Category {
  CLOTHING = 'Clothing',
  BOOKS = 'Books',
  TOYS = 'Toys',
  BEAUTY = 'Beauty',
}

@Schema({
  timestamps: true,
})
export class Order {
  @Prop()
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }];

  @Prop()
  location: string;

  @Prop()
  expectedDeliveryDate: Date;


}

export const OrderSchema = SchemaFactory.createForClass(Order);