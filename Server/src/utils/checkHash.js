const hash = require('object-hash');

const checkHash = (objHash, obj) => {
	if (hash(obj) === objHash) {
		return true;
	} else {
		return false
	}
}

module.exports = checkHash;