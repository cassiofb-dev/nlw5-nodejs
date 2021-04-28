import { getCustomRepository, Repository } from "typeorm";

import Connection from "../entities/Connection";
import ConnectionsRepository from "../repositories/ConnenctionsRepository";

interface IConnectionsCreate {
  id?: string;
  admin_id?: string;
  socket_id: string;
  user_id: string;
}

class ConnectionsService {

  private connectionsRepository: Repository<Connection>;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ id, admin_id, socket_id, user_id }: IConnectionsCreate) {

    const connection = this.connectionsRepository.create({
      admin_id,
      socket_id,
      user_id,
      id,
    });

    await this.connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {

    const connection = await this.connectionsRepository.findOne({ user_id });

    return connection;
  }

  async findWithoutAdmin() {

    const connenctions = await this.connectionsRepository.find({
      where: { admin_id: null },
      relations: ["user"],
    });

    return connenctions;
  }

  async findBySocketId(socket_id: string) {

    const connection = await this.connectionsRepository.findOne({ socket_id });

    return connection;
  }

  async updateAdminId(user_id: string, admin_id: string) {
    await this.connectionsRepository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where("user_id = :user_id", { user_id })
      .execute();
  }
}

export default ConnectionsService;