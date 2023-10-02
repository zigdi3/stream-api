
export class VideoModel {
  id?: number;
  name: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(data: VideoModel) {
    this.id = data.id;
    this.name = data.name;
    this.createdAt = data.createdAt as Date;
    this.updatedAt = data.updatedAt as Date;
  }
}
