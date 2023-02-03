import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

import { MenuItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/formatCount'

export interface IProps {
  children?: ReactElement
  itemDate?: any
}

// memo浅层比较
const SongMenuItem: FC<IProps> = memo(function (props) {
  const { itemDate } = props

  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemDate.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemDate.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>

      <div className="bottom">{itemDate.name}</div>
    </MenuItemWrapper>
  )
})

export default SongMenuItem

// 设置一个方便调试的name 可以不写 默认为组件名称
SongMenuItem.displayName = 'SongMenuItem'
