import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const Album: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <div>
      <h2>Album</h2>
    </div>
  )
})

export default Album

// 设置一个方便调试的name 可以不写 默认为组件名称
Album.displayName = 'Album'
