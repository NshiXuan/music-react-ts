import React from 'react'
import { memo, ReactElement, ElementRef, useRef } from 'react'
import type { FC } from 'react'

import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import NewAlbumItem from '@/components/new-album-item'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const NewAlbum: FC<IProps> = memo(function (props) {
  // const { children } = props

  // 从store中获取新碟数据
  const { newAlbums } = useAppSelector((state) => state.recommend, shallowEqual)

  // 获取轮播图Ref
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 上一个
  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  // 下一个
  function handleNextClick() {
    bannerRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />

      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>

        {/* 轮播图内容 */}
        <div className="banner">
          <Carousel ref={bannerRef} speed={2000}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>

        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
})

export default NewAlbum

// 设置一个方便调试的name 可以不写 默认为组件名称
NewAlbum.displayName = 'NewAlbum'
