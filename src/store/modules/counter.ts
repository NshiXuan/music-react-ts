import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  name: string
  direction: 'left' | 'right' | 'up' | 'down'
  hobbies: string[]
}

const initialState: IState = {
  count: 100,
  name: 'zs',
  direction: 'left',
  hobbies: ['吃饭', '睡觉', '打豆豆']
}

// 这三个必选 extraReducers可选
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeName(state, { payload }: PayloadAction<string>) {
      state.name = payload
    }
  }
})

// 把action函数暴露出去给组件dispatch，下面的actions与reducers中的对应
export const { changeName } = counterSlice.actions

// 把reducer暴露出去给index合并模块化，下面的reducer是暴露出去的initialState
export default counterSlice.reducer
