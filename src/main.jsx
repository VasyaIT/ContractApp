import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifestUrl =
	'https://raw.githubusercontent.com/brokqwiks/tonconnect/master/manifest.json'
ReactDOM.createRoot(document.getElementById('root')).render(
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </TonConnectUIProvider>
)
