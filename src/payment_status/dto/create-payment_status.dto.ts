import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentStatusDto {
    @ApiProperty(
        {
            example: "payment has been made",
            description: "name payment status"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string

}

