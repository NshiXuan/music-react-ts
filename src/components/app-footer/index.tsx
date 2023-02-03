import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const AppFooter: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <div>
      <h2>AppFooter</h2>
    </div>
  )
})

export default AppFooter

// 设置一个方便调试的name 可以不写 默认为组件名称
AppFooter.displayName = 'AppFooter'
