import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

import { RankingItemWrapper } from './style'
import { getImageSize } from '@/utils/formatCount'

export interface IProps {
  children?: ReactElement
  itemData?: any
}

// memo浅层比较
const TopRankingItem: FC<IProps> = memo(function (props) {
  const { itemData } = props
  const { tracks } = itemData

  return (
    <RankingItemWrapper>
      {/* 头部图片 */}
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>

      {/* 1~10展示item */}
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="name">{item.name}</div>
              <div className="operator">
                <button className="btn sprite_02 play"></button>
                <button className="btn sprite_icon2 add"></button>
                <button className="btn sprite_02 favor"></button>
              </div>
            </div>
          )
        })}
      </div>

      {/* 更多 */}
      <div className="footer">
        <a href="#/discover/ranking">查看更多&gt;</a>
      </div>
    </RankingItemWrapper>
  )
})

export default TopRankingItem

// 设置一个方便调试的name 可以不写 默认为组件名称
TopRankingItem.displayName = 'TopRankingItem'
