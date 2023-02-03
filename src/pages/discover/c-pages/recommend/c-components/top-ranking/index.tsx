import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import TopRankingItem from '../top-ranking-item'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const TopRanking: FC<IProps> = memo(function (props) {
  // const { children } = props

  // 从store中获取榜单rankings数据
  const { rankings } = useAppSelector((state) => state.recommend, shallowEqual)

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return (
            <div className="item" key={item.id}>
              <TopRankingItem itemData={item} />
            </div>
          )
        })}
      </div>
    </RankingWrapper>
  )
})

export default TopRanking

// 设置一个方便调试的name 可以不写 默认为组件名称
TopRanking.displayName = 'TopRanking'
