import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { User } from '../../user/user.entity';
import { Category } from '../../category/category.entity';
import { Chatroom } from '../../chatroom/chatroom.entity';
import { Message } from '../../message/message.entity';
import { Post } from '../../post/post.entity';
import { Role } from '../../role/role.entity';
import { Topic } from '../../topic/topic.entity';
import { Forum } from '../../forum/forum.entity';

@Injectable()
export class ProviderModule implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log(this.configService.get('DB_DRIVER'));
    console.log(this.configService.get('DB_HOST'));
    console.log(this.configService.get('DB_PORT'));
    console.log(this.configService.get('DB_USER'));
    console.log(this.configService.get('DB_PASSWORD'));
    console.log(this.configService.get('DB_NAME'));
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      type: this.configService.get<string>('DB_DRIVER'),
      host: this.configService.get<string>('DB_HOST'),
      port: parseInt(this.configService.get<string>('DB_PORT')),
      username: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [User, Category, Chatroom, Message, Post, Role, Topic, Forum],
      synchronize: true,
    };
  }
}
