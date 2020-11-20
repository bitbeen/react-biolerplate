import { combineReducers, Reducer, ReducersMapObject } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from 'utils/history'
import globalReducer from 'containers/App/reducer'
import languageProviderReducer from './containers/LanguageProvider/reducer'

/**
 * Creates the main reducer with the dynamically loaded ones
 */
export default function createReducer (injectedReducers: ReducersMapObject = {}): Reducer<any> {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers
  })
  return rootReducer
}
