import Redux, {createStore} from 'redux';

const initialState = {
    test: 'redux测试',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //列表数据
        case 'TEST':
            return state;
        default:
            return state;
    }
};
const store = createStore(reducer);
module.exports = store;