import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { VideoRepository } from './video.repository';
import { VideoService } from './video.service';

@Module({
  providers: [VideoService, VideoRepository, PrismaService],
})
export class VideosModule {}
