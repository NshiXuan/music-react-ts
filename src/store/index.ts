import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from '@/pages/discover/c-pages/recommend/store'
import PlayerReducer from '@/pages/player/store'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: PlayerReducer
  }
})

/*            获取redux的state类型                */
// store.getState可以获取redux中state的类型
// const state = store.getState()
// 1.获取函数类型
type GetStateFnType = typeof store.getState
// 2.通过TS的工具ReturnType获取函数返回值类型
export type IRootState = ReturnType<GetStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

/*         获取redux的dispatch类型封装自己的useDispatch         */
// 1.获取原本dispatch类型
type DispatchType = typeof store.dispatch
// 构造自己的dispatch
export const useAppDispatch: () => DispatchType = useDispatch

export default store
