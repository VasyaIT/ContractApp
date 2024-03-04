import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react'
import { Address, JettonMaster, TonClient } from '@ton/ton'
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { Address as DefaultAddress } from '@ton/core'
import { buildTransaction } from './transaction'

export function SendJetton() {
    const [tonConnectUI] = useTonConnectUI()
    const wallet = useTonWallet()
    const isConnected = !!wallet?.account.address
    if (!isConnected) {
        return
    }

    const walletAddress = Address.parse(wallet.account.address)
    const planktonJettonMaster = 'EQATgD7dao9jWBdz_qKL-UJZCXZGQvV5HJVUC85ssgmHKWll'
    const jettonDecimals = 9
    const amountJettons = 10
    const send = async () => {
        const masterAddress = DefaultAddress.parse(planktonJettonMaster)
        const client = new TonClient({endpoint: await getHttpEndpoint({network: 'mainnet'})})
        const jettonMaster = client.open(JettonMaster.create(masterAddress))
        const jettonWallet = await jettonMaster.getWalletAddress(DefaultAddress.parse(walletAddress.toString()))
        const jettonWalletAddress = Address.parse(jettonWallet.toString())
        const recipientAddress = Address.parse('UQDfjvpxcsiCy0oDS0BJI7xiBdhvZe73PWX7AZKBER9FJswo')
        const amount = amountJettons * 10 ** jettonDecimals
        const transaction = buildTransaction(walletAddress, jettonWalletAddress, recipientAddress, amount)
        tonConnectUI.sendTransaction(transaction)
    }

    return (
        <div>
            <button className='send-btn' onClick={send}>Send Planktons</button>
        </div>
    )
}
