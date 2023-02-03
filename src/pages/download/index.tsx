import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const Download: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <div>
      <h2>Download</h2>
    </div>
  )
})

export default Download

// 设置一个方便调试的name 可以不写 默认为组件名称
Download.displayName = 'Download'
