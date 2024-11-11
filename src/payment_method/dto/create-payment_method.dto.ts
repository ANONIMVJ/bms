import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @ApiProperty(
        {
            example: "here the payment method is selected",
            description: "name payment method"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string
}
