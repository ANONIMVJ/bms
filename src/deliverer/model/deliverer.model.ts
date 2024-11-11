import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Deliver } from "../../deliver/models/deliver.model"

interface IDelivererAttr{
    first_name:string
    last_name:string
    phone_number:string
    image:string
}

@Table({tableName:"deliverers",timestamps:false})
export class Deliverer extends Model<Deliverer, IDelivererAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "deliverer id number (auto increment)"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id?: number

    @ApiProperty(
        {
            example: "John",
            description: "first name deliverer"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    first_name:string

    @ApiProperty(
        {
            example: "Doe",
            description: "last name deliverer"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    last_name:string

    @ApiProperty(
        {
            example: "+998936565880",
            description: "phone number deliverer"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    phone_number:string

    @ApiProperty(
        {
            example: "deliverer",
            description: "image deliverer"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    image:string

    @HasMany(()=> Deliver)
    delivers: Deliver[]
}