import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApplicationType, GoogleRecaptchaModule, GoogleRecaptchaNetwork } from '@nestlab/google-recaptcha';
import { IncomingMessage } from 'http';
import { ConfigModule } from '@nestjs/config';
import { TestModule } from './test/test.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            formatError: (err) => {
                console.error(err.message);
                return err;
            },
            bodyParserConfig: { limit: '50mb', type: 'application/json' },
            cors: {
                origin: true,
                credentials: true,
            },
            buildSchemaOptions: {
                numberScalarMode: 'integer',
            },
            context: ({ req, res }) => {
                return { req, res };
            },
        }),
        TestModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
