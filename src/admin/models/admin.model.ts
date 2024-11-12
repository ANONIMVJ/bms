import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Model, Table } from "sequelize-typescript"

interface AdminCreationAttr{
    name:string,
    login:string,
    hashed_password:string,
    is_active:boolean,
    is_creator:boolean,
    hashed_refresh_token: string
}

@Table({tableName:"admin", timestamps:false})
export class Admin extends Model<Admin, AdminCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Admin id number (auto increment)"
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
            example: 2,
            description: "Admin name"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    name:string

    @ApiProperty(
        {
            example: 3,
            description: "Admin login"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    login:string

    @ApiProperty(
        {
            example: 4,
            description: "The hashed password of the admin"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    hashed_password:string

    @ApiProperty(
        {
            example: 5,
            description: "He wrote information about whether the admin is active or not"
        }
    )
    @Column(
    {
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_active:boolean

    @ApiProperty(
        {
            example: 5,
            description: "The admin wrote information about whether he is a creator or not"
        }
    )
    @Column(
    {
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_creator:boolean

    @ApiProperty(
        {
            example: 5,
            description: "Admin wrote information about hashed refresh token"
        }
    )
    @Column(
    {
        type:DataType.STRING
    })
    hashed_refresh_token: string

}