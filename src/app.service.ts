import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Express } from 'express';

@Injectable()
export class AppService {
  async saveInferenceImage(file: Express.Multer.File, roomNumber: string) {
    const folderPath = path.join(__dirname, '..', 'uploads', roomNumber);
    await fs.promises.mkdir(folderPath, { recursive: true });
    const filePath = path.join(folderPath, file.originalname);
    await fs.promises.writeFile(filePath, file.buffer);
    return filePath;
  }
}
