import * as AuthActionCreators from './authCreateAction'
import * as MoveActionCreators from './moveCreateAction'
import * as CommentCreateAction from './commentCreateAction'

export default {
	...AuthActionCreators,
	...MoveActionCreators,
	...CommentCreateAction
}