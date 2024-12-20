import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { LoginUserDto } from './login-user.dto';

export class RegisterUserDto extends PickType(LoginUserDto, [
  'username',
  'password',
]) {
  @IsNotEmpty({
    message: '昵称不能为空',
  })
  @ApiProperty()
  nickName: string;

  @IsNotEmpty({
    message: '邮箱不能为空',
  })
  @IsEmail(
    {},
    {
      message: '不合法的邮箱',
    },
  )
  @ApiProperty()
  email: string;

  @IsNotEmpty({
    message: '验证码不能为空',
  })
  @ApiProperty()
  captcha: string;
}
