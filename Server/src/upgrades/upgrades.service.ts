import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UpgradesService {
	constructor(private readonly prisma: PrismaService) {}

	async returnUpgradesData(userId) {
		try {
			return await this.prisma.users_app_data.findUnique({
				where: {
					user_id: userId,
				},
				select: {
					balance: true,
					reactor: true,
					storage: true,
				}
			})
		} catch (error) {
			return false
		}
	}

	async upgradeReactorLevel(userId) {
		const reactor = await this.prisma.users_app_data.findUnique({
			where: {
				user_id: userId,
			},
			select: {
				reactor: true
			}
		})
		const level = reactor.reactor

		try {
			await this.prisma.users_app_data.update({
				where: {
					user_id: userId,
				},
				data: {
					reactor: {
						increment: 1
					},
					balance: {
						decrement: 150 * 2.2 ** (level - 1) 
					}
				}
			})
		} catch (error) {
			return false
		}
	}

	async upgradeStorageLevel(userId) {
		const storage = await this.prisma.users_app_data.findUnique({
			where: {
				user_id: userId,
			},
			select: {
				storage: true
			}
		})
		const level = storage.storage

		try {
			await this.prisma.users_app_data.update({
				where: {
					user_id: userId,
				},
				data: {
					storage: {
						increment: 1
					},
					balance: {
						decrement: 75 * 2.2 ** (level - 1)
					}
				}
			})
		} catch (error) {
			return false
		}
	}
}
