import { DateTime } from 'luxon';
import hash from 'object-hash';

const createUserData = (initDataUnsafe) => {
	const metaData = {
		user_id: initDataUnsafe.user.id,
		username: initDataUnsafe.user.username,
		first_name: initDataUnsafe.user.first_name,
		last_name: initDataUnsafe.user.last_name,
		language_code: initDataUnsafe.user.language_code,
		is_premium: initDataUnsafe.user.is_premium,
		allows_write_to_pm: initDataUnsafe.user.allows_write_to_pm,
		photo_url: initDataUnsafe.user.photo_url
	}
	const appData = {
		user_id: initDataUnsafe.user.id,
		inviter_id: initDataUnsafe.start_param,
		friends: 0,
		balance: 0,
		last_claim_time: DateTime.utc().toISO(),
		reactor: 1,
		storage: 1,
		premium: false,
	}
	const dataHash = hash({ metaData, appData })
	return { hash: dataHash, metaData: metaData, appData }
}

export default createUserData;