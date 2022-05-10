import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Topic } from '../topic/topic.entity';
import { Post } from '../post/post.entity';
import { Message } from '../message/message.entity';
import { Chatroom } from '../chatroom/chatroom.entity';
import { Role } from '../role/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  plainPassword: string;

  @Column({ type: 'date' })
  birthdate: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Topic, (topic) => topic.user)
  topics: Topic[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];

  @ManyToMany(() => Chatroom, (chatroom) => chatroom.user)
  @JoinTable()
  chatrooms: Chatroom[];

  @ManyToOne(() => Role)
  role: Role;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
