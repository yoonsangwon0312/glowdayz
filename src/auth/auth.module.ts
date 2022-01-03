import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// import { SignInService } from 'src/user/signIn/signin.service';
import { ControllerStrategy } from './strategies/Controller.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshStrategy } from './strategies/refresh.strategy';
import { AuthTokenService } from './auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './role/auth.guard';

@Module({
    imports: [PassportModule, JwtModule.register({})],
    providers: [
        AuthTokenService,
        // SignInService,
        JwtStrategy,
        RefreshStrategy,
        ControllerStrategy,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
    exports: [JwtModule],
})
export class AuthModule {}
