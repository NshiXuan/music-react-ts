import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
// react ts识别json文件 如果不识别 需要自己声明
import headerTitles from '@/assets/data/header_title.json'

// 导入antd
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const AppHeader: FC<IProps> = memo(function (props) {
  // const { children } = props

  // 展示nav的item
  // function showItem(item: any) {
  //   if (item.type === 'path') {
  //     return (
  //       <NavLink to={item.link}>
  //         {item.title}
  //         <i className="icon sprite_01"></i>
  //       </NavLink>
  //     )
  //   } else {
  //     return (
  //       <a href={item.link} target="_blank" rel="noreferrer">
  //         {item.title}
  //       </a>
  //     )
  //   }
  // }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        {/* 左边 */}
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {item.type === 'path' ? (
                    <NavLink to={item.link}>
                      {item.title}
                      <i className="icon sprite_01"></i>
                    </NavLink>
                  ) : (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </HeaderLeft>

        {/* 右边 */}
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>

      {/* 红色分割线 */}
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default AppHeader

// 设置一个方便调试的name 可以不写 默认为组件名称
AppHeader.displayName = 'AppHeader'
