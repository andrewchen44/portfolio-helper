const initialState = [
  [5, 10, 15, 30, 40],
  [9, 12, 14, 28, 37],
  [13, 14, 13, 26, 34],
  [17, 16, 12, 24, 31],
  [21, 18, 11, 22, 28],
  [25, 20, 10, 20, 25],
  [29, 22, 9, 18, 22],
  [33, 24, 8, 16, 19],
  [37, 26, 7, 14, 16],
  [41, 28, 6, 12, 13],
];

export default function portfolio(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}