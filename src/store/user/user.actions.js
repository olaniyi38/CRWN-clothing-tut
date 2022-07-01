import { createAction } from '../../utils/reducer/reducer.utils'
import { USER_ACTION_TYPES } from './user.types'

export const setCurrentUser = (currentUser) => createAction(USER_ACTION_TYPES.setCurrentUser, currentUser)