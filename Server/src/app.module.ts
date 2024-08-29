import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UpgradesModule } from './upgrades/upgrades.module';

@Module({
  imports: [UserModule, UpgradesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
