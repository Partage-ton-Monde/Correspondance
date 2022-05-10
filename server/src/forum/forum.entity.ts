import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Topic } from '../topic/topic.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Forum {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @ManyToOne(() => Topic)
  topics: Topic[];

  @ManyToMany(() => Category, (category) => category.forums)
  @JoinTable()
  categories: Category[];
}
