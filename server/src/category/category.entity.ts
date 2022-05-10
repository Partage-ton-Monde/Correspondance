import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Forum } from '../forum/forum.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @ManyToMany(() => Forum, (forum) => forum.categories)
  forums: Forum[];
}
