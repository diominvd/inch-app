const upgradeDevice = (device) => {
	if (confirm(`Upgrade ${device}?`)) {
		alert('upgraded')
	} else {
		alert('not upgraded')
	}
}

export default upgradeDevice;