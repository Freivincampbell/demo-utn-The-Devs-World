import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(4, { message: 'Name must not be less than 4 charters' })
  @MaxLength(16, {
    message: 'Name is longer than the maximum allowed length (16)',
  })
  readonly name: string;

  @IsNotEmpty({ message: 'Last Name must not be empty' })
  @IsString({ message: 'Last Name must be a string' })
  @MinLength(4, { message: 'Last name must not be less than 4 charters' })
  @MaxLength(16, {
    message: 'Last name is longer than the maximum allowed length (16)',
  })
  readonly lastName: string;
}
