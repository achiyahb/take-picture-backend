import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello world!';
  }

  @Post('picture')
  @UseInterceptors(FileInterceptor('image'))
  async saveImage(
    @UploadedFile() file: Express.Multer.File,
    @Body('roomNumber') roomNumber: string,
  ) {
    return await this.appService.saveImage(file, roomNumber);
  }
}
