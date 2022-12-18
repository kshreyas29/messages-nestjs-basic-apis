import { IsString } from 'class-validator';
export class CreatMessageDto {
  @IsString()
  content: string;
}
