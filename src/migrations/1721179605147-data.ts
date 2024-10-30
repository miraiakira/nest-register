import { MigrationInterface, QueryRunner } from 'typeorm';

export class Data1721179605147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO `users` VALUES (1,'simon','1a100d2c0dab19c4430e7d73762b3423','西蒙','hy44jt@gmail.com',NULL,NULL,1,0,'2023-08-13 11:51:02.777613','2023-09-18 20:04:18.000000'),(2,'zhangsan','e3ceb5881a0a1fdaad01296d7554868d','张三','hy44jt@gmail.com','uploads/1695317972597-325099454-road-8157300.jpg','13233323333',0,1,'2023-08-13 12:26:34.623072','2023-09-21 17:50:02.000000'),(3,'lisi','1a100d2c0dab19c4430e7d73762b3423','里斯','hy44jt@gmail.com','uploads/1695063710002-619764155-cat_coffee.png',NULL,0,0,'2023-08-13 12:26:34.650057','2023-09-18 19:03:13.000000'),(4,'mirai','5b1b68a9abf4d2cd155c81a9225fd158','未来','hy44jt@gmail.com','uploads/1692891494851-917697716-bird.jpg',NULL,1,0,'2023-08-21 17:03:15.561754','2023-09-18 19:08:40.000000');",
    );
    await queryRunner.query(
      "INSERT INTO `meeting_room` VALUES (1,'木星',10,'一层西','白板','',0,'2023-09-23 17:54:21.804738','2023-09-23 17:54:21.804738'),(2,'金星',5,'二层东','白板，电视','',0,'2023-09-23 17:54:21.804738','2023-09-23 17:54:21.804738'),(11,'bb',22,'cc','电视','bb会议室 updated 2',0,'2023-09-24 16:34:43.320000','2023-09-24 16:34:43.320000'),(12,'xxx',0,'xxx','xxx','xxx',0,'2023-10-22 18:49:22.658336','2023-10-22 18:49:22.658336');",
    );
    await queryRunner.query(
      "INSERT INTO `roles` VALUES (1,'管理员'),(2,'普通用户');",
    );
    await queryRunner.query(
      "INSERT INTO `booking`(`id`,`startTime`,`endTime`,`status`,`note`,`userId`,`roomId`,`createTime`,`updateTime`) VALUES (1,'2023-10-23 19:07:25','2023-10-23 20:07:25','审批通过','',1,1,'2023-10-23 10:07:25.072106','2023-10-23 11:08:21.000000'),(2,'2023-10-23 19:07:25','2023-10-23 20:07:25','审批驳回','',2,2,'2023-10-23 10:07:25.087003','2023-10-23 11:09:13.000000'),(3,'2023-10-23 19:07:25','2023-10-23 20:07:25','解除','',2,1,'2023-10-23 10:07:25.096903','2023-10-23 11:10:46.000000'),(4,'2023-10-23 19:07:25','2023-10-23 20:07:25','申请中','',1,2,'2023-10-23 10:07:25.105493','2023-10-23 10:07:25.105493');",
    );
    await queryRunner.query(
      "INSERT INTO `permissions` VALUES (1,'ccc','访问 ccc 接口'),(2,'ddd','访问 ddd 接口');",
    );
    await queryRunner.query(
      'INSERT INTO `role_permissions` VALUES (1,1),(1,2),(2,1);',
    );
    await queryRunner.query('INSERT INTO `user_roles` VALUES (2,1),(3,2);');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE `booking`;');
  }
}
