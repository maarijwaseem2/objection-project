import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class newPost {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  contents: string;

  @IsString()
  @IsOptional()  
  image?: string;
}
