import { BaseModel } from './base.model';

export class PostModel extends BaseModel {
  static tableName = 'posts';
  title: string;
  contents: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
