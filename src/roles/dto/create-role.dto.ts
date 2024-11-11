import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateRoleDto {
    @ApiProperty(
        {
            example:"ADMIN",
            description:"Here is a role for the user"
        }
    )
    @IsString()
    @IsNotEmpty()
    value:string

    @ApiProperty(
        {
            example:"ADMIN role details",
            description:"Full information about the role is write here"
        }
    )
    @IsString()
    @IsNotEmpty()
    description:string
}
