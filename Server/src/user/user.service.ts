import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DateTime } from 'luxon';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async addNewUser(metaData, appData) {
		try{
			await this.prisma.users_meta_data.create({
				data: {
					user_id: metaData.user_id,
					first_name: metaData.first_name,
					last_name: metaData.last_name,
					username: metaData.username,
					language_code: metaData.language_code,
					is_premium: metaData.is_premium,
					allows_write_to_pm: metaData.allows_write_to_pm,
					photo_url: metaData.photo_url,
				}
			})
		} catch (error) {
			return false
		}
		try {
			await this.prisma.users_app_data.create({
				data: {
					user_id: appData.user_id,
					premium: appData.premium,
					inviter_id: appData.inviter_id,
					friends: appData.friends,
					balance: appData.balance,
					last_claim_time: appData.last_claim_time,
					reactor: appData.reactor,
					storage: appData.storage,
				}
			})
		} catch (error) {
			return false
		}
		try {
			await this.prisma.users_app_data.update({
				where: {
					user_id: appData.inviter_id,
				},
				data: {
					balance: {
						increment: 50,
					},
					friends: {
						increment: 1,
					}
				}
			})
		} catch (error) {
			return false
		}
	}

	async updateUser(userId, metaData) {
		try {
			await this.prisma.users_meta_data.update({
				where: {
					user_id: userId,
				},
				data: {
					first_name: metaData.first_name,
					last_name: metaData.last_name,
					username: metaData.username,
					language_code: metaData.language_code,
					is_premium: metaData.is_premium,
					allows_write_to_pm: metaData.allows_write_to_pm,
					photo_url: metaData.photo_url,
				}
			})
		} catch (error) {
			return 'error user update'
		}
		return 'success user update'
	}

	async returnHomeData(userId) {
		return await this.prisma.users_app_data.findUnique({
			where: {
				user_id: userId,
			},
			select: {
				balance: true,
				last_claim_time: true,
				premium: true,
				reactor: true,
				storage: true,
			}
		})
	}

	calculateLoot(lastClaimTime, reactor, storage) {
		const currentTime = DateTime.utc();
		const lastTime = DateTime.fromISO(lastClaimTime);
		const timeDifference = currentTime.diff(lastTime, 'seconds').seconds

		if (timeDifference > storage * 3600) {
			return reactor * 0.001 * storage * 3600
		} else {
			return reactor * 0.001 * timeDifference
		}
	}

	async claim(userId) {
		const data = await this.prisma.users_app_data.findUnique({
			where: {
				user_id: userId
			},
			select: {
				last_claim_time: true,
				reactor: true,
				storage: true,
			}
		})

		const time = data.last_claim_time.toISOString()
		const reactor = data.reactor
		const storage = data.storage

		await this.prisma.users_app_data.update({
			where: {
				user_id: userId,
			},
			data: {
				balance: {
					increment: this.calculateLoot(time, reactor, storage)
				},
				last_claim_time: DateTime.utc().setZone('utc').toISO(),
			}
		})
	}
}
