import { SetMetadata } from '@nestjs/common';
import { Role } from './entities/role.entities';

export type AllowedRoles = keyof typeof Role | 'Any';

export const Roles = (roles: AllowedRoles) => SetMetadata('roles', roles);
