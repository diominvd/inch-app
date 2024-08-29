import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { NewUserDTO } from './dto/dto.new-user';
import { UpdateUserDTO } from './dto/dto.update-user';
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add_user')
  createUser(@Body() DTO: NewUserDTO) {
    const metaData = DTO.metaData
    const appData = DTO.appData
    return this.userService.addNewUser(metaData, appData)
  }

  @Post('update_user')
  updateUser(@Body() DTO: UpdateUserDTO) {
    const userId = DTO.user_id
    return this.userService.updateUser(userId, DTO)
  }

  @Get('home/:userId')
  getUsers(@Param('userId') userId: string) {
    return this.userService.returnHomeData(userId)
  }

  @Get('claim/:userId')
  claim(@Param('userId') userId: string) {
    this.userService.claim(userId)
  }
}
