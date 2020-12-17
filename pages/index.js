import React from 'react';

const { HandCashConnect, Environments } = require('@handcash/handcash-connect');
const authToken = '';

async function init() {
	const client = new HandCashConnect('5fd3d563259c4b5bfebdabe5', Environments['beta']);
	const cloudAccount = client.getAccountFromAuthToken(authToken);

	console.log({ client, cloudAccount });

	const profile = await cloudAccount.profile.getCurrentProfile();

	console.log({ profile });
}

export default function Home() {
	React.useEffect(() => {
		init();
	}, []);

	return <div>Handcash Test</div>;
}
