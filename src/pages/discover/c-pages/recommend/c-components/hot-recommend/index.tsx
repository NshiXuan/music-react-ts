import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import { shallowEqual } from 'react-redux'

import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'
import { HotRecommendWrapper } from './style'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const HotRecommend: FC<IProps> = memo(function (props) {
  // const { children } = props

  const { hotRecommends } = useAppSelector(
    (state) => state.recommend,
    shallowEqual
  )

  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />

      <div className="hot-recommend">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemDate={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend

// 设置一个方便调试的name 可以不写 默认为组件名称
HotRecommend.displayName = 'HotRecommend'
