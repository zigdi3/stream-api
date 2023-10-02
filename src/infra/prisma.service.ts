import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  public readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
