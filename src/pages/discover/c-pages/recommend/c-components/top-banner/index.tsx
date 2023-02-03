import React, { useEffect, memo, ReactElement, useRef, useState } from 'react'
import type { FC, ElementRef } from 'react'
import { shallowEqual } from 'react-redux'

// antd
import { Carousel } from 'antd'

import { BannerControl, BannerLeft, BannerRight, BannersWrapper } from './style'
import { useAppSelector } from '@/store'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const TopBanner: FC<IProps> = memo(function (props) {
  // 从store中获取轮播图数据
  const { banners } = useAppSelector((state) => state.recommend, shallowEqual)

  // 获取Carousel的Ref 只有获取了Ref才能调用里面的next prev方法切换轮播图
  // ref绑定组件 需要获取到组件的类型
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 保存当前轮播图的下标
  const [currentIndex, setCurrentIndex] = useState(0)

  // 轮播图方法
  // 上一页
  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  // 下一页
  function handleNextClick() {
    bannerRef.current?.next()
  }

  // 切换
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  // 获取背景图片
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannersWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        {/* 左边轮播图 */}
        <BannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            effect="fade"
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>

        {/* 右边下载 */}
        <BannerRight></BannerRight>

        {/* 轮播图切换控制器 */}
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannersWrapper>
  )
})

export default TopBanner

// 设置一个方便调试的name 可以不写 默认为组件名称
TopBanner.displayName = 'TopBanner'
