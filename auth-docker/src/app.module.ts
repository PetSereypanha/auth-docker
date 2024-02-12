import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {KeycloakConnectModule, PolicyEnforcementMode, TokenValidation} from "nest-keycloak-connect";
import {dataBaseConfigAsync} from "./config/dataBase.config";
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(dataBaseConfigAsync),
  UserModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
