import { IsInt, IsString, Length } from 'class-validator';


export class CreatePropertyDto {
  @IsString()
  @Length(2, 15, { groups: ['create'] })
  @Length(2, 15, { groups: ['update'] })
  name: string;
  @IsString()
  description: string;
  @IsInt()
  area: number;
}
