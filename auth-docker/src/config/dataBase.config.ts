import {TypeOrmModuleAsyncOptions, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import * as process from "process";


export default class  DataBaseConfig {
    static getConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: configService.get('POSTGRES_HOST'),
            port: parseInt(configService.get('POSTGRES_PORT')),
            password: configService.get('POSTGRES_PASSWORD'),
            username: configService.get('POSTGRES_USER'),
            database: configService.get('POSTGRES_DB'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            // autoLoadEntities: true,
            synchronize: true, //Do Not Use In Production
        }
    }
};

export const dataBaseConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> =>
        DataBaseConfig.getConfig(configService),
    inject: [ConfigService]
}