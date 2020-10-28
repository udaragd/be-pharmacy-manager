import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'jwtPrivateKey',
        });
    }

    async validate(payload: JwtPayload, done: VerifiedCallback) {
        const user = await this.authService.getUserByEmail(payload.email);
        if (!user) {
            return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
        }

        return done(null, user, payload.iat);
    }
}
