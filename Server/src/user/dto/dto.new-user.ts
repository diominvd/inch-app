export class NewUserDTO {
	readonly metaData: {
		user_id: number,
		username: string,
		first_name: string,
		last_name: string,
		language_code: string,
		is_premium: boolean,
		allows_write_to_pm: boolean,
		photo_url: string
	};
	readonly appData: {
		user_id: number,
		inviter_id: number,
		friends: number,
		balance: number,
		last_claim_time: any,
		reactor: number,
		storage: number,
		premium: boolean,
	}
}