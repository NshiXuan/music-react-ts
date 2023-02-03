import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

import { NavBarWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const NavBar: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <NavBarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item, index) => {
          return (
            <div className="item" key={index}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
})

export default NavBar

// 设置一个方便调试的name 可以不写 默认为组件名称
NavBar.displayName = 'NavBar'
