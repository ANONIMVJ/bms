import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateOrderStatusDto {
    @ApiProperty(
        {
            example: "ordered",
            description: "Here is the status of the order"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string
}
