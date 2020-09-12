import {createStore} from '@stencil/store';

const { state, onChange, reset, dispose } = createStore({
    clicks: 0,
    count: 0
});

onChange('clicks', value => {
    state.count = value * 2;
});

export default {state, onChange, reset, dispose};
