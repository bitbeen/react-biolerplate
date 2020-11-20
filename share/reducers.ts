
/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers, Reducer, ReducersMapObject } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from 'utils/history'

import languageProviderReducer from 'app/containers/LanguageProvider/reducer'

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer (injectedReducers: ReducersMapObject = {}): Reducer<any> {
  return combineReducers({
    route: connectRouter(history),
    language: languageProviderReducer,
    ...injectedReducers
  })
}
