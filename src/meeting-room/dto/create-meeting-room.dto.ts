import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateMeetingRoomDto {
  @IsNotEmpty({
    message: '会议名称不能为空',
  })
  @MaxLength(10, {
    message: '会议室名称最长为 10 个字符',
  })
  name: string;

  @IsNotEmpty({
    message: '容量不能为空',
  })
  capacity: number;

  @IsNotEmpty({
    message: '位置不能为空',
  })
  @MaxLength(50, {
    message: '位置最长为 50 个字符',
  })
  location: string;

  @IsNotEmpty({
    message: '设备不能为空',
  })
  @MaxLength(50, {
    message: '设备最长为 50 个字符',
  })
  equipment: string;

  @IsNotEmpty({
    message: '描述不能为空',
  })
  @MaxLength(100, {
    message: '描述最长为 100 个字符',
  })
  description: string;
}
