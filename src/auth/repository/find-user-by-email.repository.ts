import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.datebase";

@Injectable()
export class FindUseByEmailRepository {
    constructor(private readonly prisma: PrismaService){}

    async findByEmail(email: string){
        return await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }
}