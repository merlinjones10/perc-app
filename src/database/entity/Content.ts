import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export abstract class Content {
  @CreateDateColumn()
  created_at: Date;
}
