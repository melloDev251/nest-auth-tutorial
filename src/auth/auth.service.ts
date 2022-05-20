import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const users = require('../users.json');
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signin(dto: AuthDto) {
    // recuperer users
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('Email does not exist');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorect');

    return this.signUser(user.id, user.email, user.password, 'user is here');
  }

  signUser(userId: number, email: string, password: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      password,
      type: type,
    });
  }
}
