import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .addOAuth2(
          {
            type: 'oauth2',
            flows: {
              password: {
                tokenUrl: `http://localhost:3000/auth/realms/Master/protocol/openid-connect/token`,
                authorizationUrl: `http://localhost:3000/api/auth/auth/realms/Master/protocol/openid-connect/auth`,
                scopes: {}
              }
            }
          }
      )
      .setTitle('Median')
      .setDescription('The Median API description')
      .setVersion('0.1')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
    swaggerOptions: { // <-- I found this by chance in a question here
      oauth: {
        clientID: 'openId connect',
        realm: 'Client details',
        appName: 'swagger-ui'
      }
    }
  });
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
