import React from 'react'
import { memo, ReactElement, useEffect } from 'react'
import type { FC } from 'react'

import TopBanner from './c-components/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-components/hot-recommend'
import { useAppDispatch } from '@/store'
import { fetchRankingDataAction, fetchRecommendDataAction } from './store'
import NewAlbum from './c-components/new-album'
import TopRanking from './c-components/top-ranking'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const Recommend: FC<IProps> = memo(function (props) {
  // const { children } = props
  const dispatch = useAppDispatch()

  // 进入recommend页面发请求获取数据
  useEffect(() => {
    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendAction())
    // dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />

      <div className="content wrap-v2">
        <div className="left">
          {/* 热门推荐 */}
          <HotRecommend />

          {/* 新碟上架 */}
          <NewAlbum />

          {/* 排行榜 */}
          <TopRanking />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend

// 设置一个方便调试的name 可以不写 默认为组件名称
Recommend.displayName = 'Recommend'
