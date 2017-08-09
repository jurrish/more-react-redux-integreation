import {createStore} from 'redux';

import reducer from '../reducer';

//this style is for testing purposes
//every time this function is called it returns function that creates a unique store
export default () => createStore(reducer)
