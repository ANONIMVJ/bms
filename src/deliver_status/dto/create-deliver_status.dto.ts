import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeliverStatusDto {
    @ApiProperty(
        {
            example: "delivered",
            description: "Here is the status of the delivery service"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string
}
