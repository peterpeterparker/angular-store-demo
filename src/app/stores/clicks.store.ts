import { createStore } from '@stencil/store';

// const { state, onChange, reset, dispose } = createStore({
//     clicks: 0,
//     count: 0
// });
//
// onChange('clicks', value => {
//     state.count = value * 2;
// });
// export default { state, onChange, reset, dispose };

const state = {
  clicks: 0,
  get count(): number {
    return this.clicks * 2;
  },
  reset(): void {
    this.clicks = 0;
  }
};

export default state;
