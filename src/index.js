import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from 'App'
import Store from 'store/Store'
import CustomThemeProvider from 'theme'

const { store, persistor } = Store()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <CustomThemeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CustomThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.register()
