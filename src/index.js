import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@material-ui/core/styles'
import App from 'App'
import Store from 'store/Store'
import { Theme } from 'theme'

const { store, persistor } = Store()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={Theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.register()
