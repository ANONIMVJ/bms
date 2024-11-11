import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Deliver } from "../../deliver/models/deliver.model"

interface IDeliverStatusAttr{
    name:string
}

@Table({tableName:"deliver_status",timestamps:false})
export class DeliverStatus extends Model<DeliverStatus, IDeliverStatusAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "deliver status id number (auto increment)"
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
            example: "delivered",
            description: "Here is the status of the delivery service"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    name:string

    @HasMany(()=> Deliver)
    delivers: Deliver[]
}