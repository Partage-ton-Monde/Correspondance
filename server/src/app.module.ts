import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { ProviderModule } from './database/mysql/provider.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.local', // This one always have the priority
        `${process.cwd()}/.env.${process.env.NODE_ENV}`, // Auto. detect environment file based on the NODE_ENV
      ],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: ProviderModule,
      inject: [ProviderModule],
    }),
  ],
  controllers: [AppController],
  providers: [ProviderModule],
})
export class AppModule {}
