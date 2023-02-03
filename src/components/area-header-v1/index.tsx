import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

import { HeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

export interface IProps {
  children?: ReactElement
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

// memo浅层比较
const AreaHeaderV1: FC<IProps> = memo((props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="text">{item}</span>
                {index < keywords.length - 1 && (
                  <span className="divider">|</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="more">
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
})

export default AreaHeaderV1

// 设置一个方便调试的name 可以不写 默认为组件名称
AreaHeaderV1.displayName = 'AreaHeaderV1'
