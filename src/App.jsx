import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { SendJetton } from './usecase/send'

const mainStyle = {
	float: 'right',
}

function App() {
	return (
		<div className='App'>
			<main style={mainStyle}>
				<TonConnectButton />
				<SendJetton />
			</main>
		</div>
	)
}

export default App
