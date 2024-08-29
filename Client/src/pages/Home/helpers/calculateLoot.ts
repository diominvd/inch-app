import { DateTime } from 'luxon';

const calculateLoot = (lastClaimTime, reactor, storage) => {
	const currentTime = DateTime.utc();
	const lastTime = DateTime.fromISO(lastClaimTime);
	const timeDifference = currentTime.diff(lastTime, 'seconds').seconds

	if (timeDifference > storage * 3600) {
		return reactor * 0.001 * storage * 3600
	} else {
		return reactor * 0.001 * timeDifference
	}
}

export default calculateLoot;