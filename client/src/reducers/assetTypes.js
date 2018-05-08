const initialState = ['Stocks', 'Property', 'Bonds', 'Treasuries', 'Cash'];

export default function assetTypes(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}