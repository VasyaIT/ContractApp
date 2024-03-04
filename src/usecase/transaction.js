import { beginCell, toNano } from '@ton/ton'

export function buildTransaction(walletAddress, jettonWallet, recipientAddress, amount) {
	const body = beginCell()
		.storeUint(0xf8a7ea5, 32)
		.storeUint(0, 64)
		.storeCoins(amount)
		.storeAddress(recipientAddress)
		.storeAddress(walletAddress)
		.storeUint(0, 1)
		.storeCoins(toNano('0.05'))
		.storeUint(0, 1)
		.endCell()
	return {
		validUntil: Math.floor(Date.now() / 1000) + 120,
		messages: [
			{
				address: jettonWallet.toString(),
				amount: '100000000',
				payload: body.toBoc().toString('base64'),
			},
		],
	}
}
