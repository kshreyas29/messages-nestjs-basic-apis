import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreatMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  //Controller is automatiaccly added to the DI container as it has to be triggered by module by default
  constructor(public messagesService: MessagesService) {}
  @Get()
  listMessage() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreatMessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }
}
