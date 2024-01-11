// const { NestFactory } = require('@nestjs/core');
// const { Transport } = require('@nestjs/microservices');
// const { AppModule } = require('./app.module');

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice(AppModule, {
//     transport: Transport.TCP,
//     options: {
//       port: 3000, // Change port as needed
//     },
//   });
//   await app.listenAsync();
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
