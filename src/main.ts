import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VideoService } from './videos/video.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const videoService = app.get(VideoService);
  const videos = await videoService.loadAndSaveFiles();
  console.log(videos);
}
bootstrap();
