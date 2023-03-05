import * as AuthActionCreators from './authCreateAction'
import * as MoveActionCreators from './moveCreateAction'

export default {
	...AuthActionCreators,
	...MoveActionCreators
}