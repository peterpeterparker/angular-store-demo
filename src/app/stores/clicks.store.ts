import {createStore} from '@stencil/store';

const { state, onChange, reset, dispose } = createStore({
    count: 0,
    clicks: 0
});

onChange('count', value => {
    state.clicks = value ** 2;
});

export default {state, onChange, reset, dispose};
