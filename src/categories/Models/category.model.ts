import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"

interface CategoryAttr{
    category_name:string,
    parentId:number,
}

@Table({tableName:"category",timestamps:false})
export class Category extends Model<Category, CategoryAttr>{
    @Column(
    {
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id?: number

    @Column(
    {
        type:DataType.STRING(100),
        allowNull: false,
    })
    category_name:string
    
    @ForeignKey(() => Category)
    @Column(
    {
        type:DataType.INTEGER,
    })
    parentId:number

    @BelongsTo(()=> Category)
    category:Category

}