import '@babel/polyfill'
import 'url-search-params-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'utils/history'

import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import LanguageProvider from 'app/containers/LanguageProvider'
import { translationMessages } from 'app/i18n'
import moment from 'moment'
import 'moment/src/locale/zh-cn'
import '!file-loader?name=[name].[ext]!../app/favicon.ico'
import 'file-loader?name=[name].[ext]!../app/.htaccess'
import 'react-grid-layout/css/styles.css'


import configureStore from 'app/configureStore'

moment.locale('zh-cn')

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('app')

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <LocaleProvider locale={zh_CN}>
          <ConnectedRouter history={history}>
            <h1>share</h1>
          </ConnectedRouter>
        </LocaleProvider>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  module.hot.accept(['../app/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(translationMessages)
  })
}

interface IWindow extends Window {
  Intl: any
  __REACT_DEVTOOLS_GLOBAL_HOOK__: any
}
declare const window: IWindow

if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'))
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err
    })
} else {
  render(translationMessages)
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  // disable react developer tools in production
  if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => void 0
  }
}
