import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDelivererDto } from "./dto/create-deliverer.dto";
import { UpdateDelivererDto } from "./dto/update-deliverer.dto";
import { Deliverer } from "./model/deliverer.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class DelivererService {
  constructor(
    @InjectModel(Deliverer) private delivererModel: typeof Deliverer
  ) {}
  create(createDelivererDto: CreateDelivererDto) {
    return this.delivererModel.create(createDelivererDto);
  }

  findAll() {
    return this.delivererModel.findAll({
      include: {
        all: true,
      },
    });
  }

  findOne(id: number) {
    return this.delivererModel.findByPk(id);
  }

  async update(
    id: number,
    updateDelivererDto: UpdateDelivererDto
  ): Promise<Deliverer> {
    const deliverer = await this.delivererModel.findByPk(id);

    if (!deliverer)
      throw new NotFoundException(`Deliverer with ID ${id} not found...`);

    deliverer.update(updateDelivererDto);

    return deliverer;
  }

  async remove(id: number): Promise<void> {
    const deliverer = await this.delivererModel.findByPk(id);

    if (!deliverer)
      throw new NotFoundException(`Deliverer with ID ${id} not found...`);

    await deliverer.destroy();
  }
}
