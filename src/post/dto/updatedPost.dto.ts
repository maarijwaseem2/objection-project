import { IsString, IsInt, IsOptional } from 'class-validator';

export class updatedPost {
  @IsString()
  @IsOptional()  
  title?: string;

  @IsString()
  @IsOptional()  
  contents?: string;

  @IsString()
  @IsOptional()  
  image?: string;

}
