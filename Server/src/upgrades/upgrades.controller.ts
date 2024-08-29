import { Controller, Get, Param } from '@nestjs/common';
import { UpgradesService } from './upgrades.service';

@Controller('api/upgrades')
export class UpgradesController {
  constructor(private readonly upgradesService: UpgradesService) {}

  @Get(':userId')
  getUsers(@Param('userId') userId) {
    return this.upgradesService.returnUpgradesData(userId)
  }

  @Get('reactor/:userId')
  upgradeReactor(@Param('userId') userId) {
    return this.upgradesService.upgradeReactorLevel(userId)
  }

  @Get('storage/:userId')
  upgradeStorage(@Param('userId') userId) {
    return this.upgradesService.upgradeStorageLevel(userId)
  }
}
