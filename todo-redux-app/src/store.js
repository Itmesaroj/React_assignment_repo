import { legacy_createStore} from 'redux';
import TodoReduse from './TodoReduse';
let store=legacy_createStore(TodoReduse);

export default store