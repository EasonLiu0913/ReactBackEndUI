import { combineReducers } from 'redux'

import { orderlistData } from '../pages/component/ship/reducers'

// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const rootReducer = combineReducers({ orderlistData })

export { rootReducer }
