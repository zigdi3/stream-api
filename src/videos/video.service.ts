import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { VideoModel } from './video.entity';
import { VideoRepository } from './video.repository';

@Injectable()
export class VideoService {
  constructor(private readonly videoRepository: VideoRepository) { }

  async loadAndSaveFiles(): Promise<VideoModel[]> {
    const files = fs.readdirSync('./videos_src');
    const jsonFiles = files.filter((file) => file.endsWith('.mp4'));
    const videos = [];
    for (const jsonFile of jsonFiles) {
      const name = jsonFile.replace('.mp4', '');
      if (!await this.videoRepository.findByName(name)) {
        const video = await this.videoRepository.create(name);
        videos.push(video);
      }
    }
    return videos;
  }
}
