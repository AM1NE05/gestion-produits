import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { ConfigModule } from "@nestjs/config";
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
imports: [ConfigModule.forRoot(), ProductsModule],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
 