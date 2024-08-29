import { Module } from '@nestjs/common';
import { UpgradesService } from './upgrades.service';
import { UpgradesController } from './upgrades.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [UpgradesController],
  providers: [UpgradesService, PrismaService],
})
export class UpgradesModule {}
