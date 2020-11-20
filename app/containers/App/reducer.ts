import produce from 'immer'

const initialState = {}

const appReducer = (state = initialState, action) =>
  // tslint:disable-next-line:no-empty
  produce(state, (draft) => {

  })
export { initialState as appInitialState }
export default appReducer
