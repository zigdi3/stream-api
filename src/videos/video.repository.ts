import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra';
import { VideoModel } from './video.entity';

@Injectable()
export class VideoRepository {
  constructor(private repo: PrismaService) { }

  async create(name: string): Promise<VideoModel> {
    const data: VideoModel = { name: name, createdAt: new Date() };
    //    data.createAt = new Date();
    const video: any = await this.repo.prisma.video.create({
      data: {
        id: data.id,
        createdAt: data.createdAt,
        name: name,
      }
    });
    return new VideoModel(video);
  }

  async findByName(name: string): Promise<VideoModel> {
    const result = this.repo.prisma.video.findFirst({
      where: {
        name: name,
      }
    })
    return result;
  }
}
