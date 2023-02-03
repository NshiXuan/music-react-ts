import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

import { AlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/formatCount'

export interface IProps {
  children?: ReactElement
  itemData?: any
}

// memo浅层比较
const NewAlbumItem: FC<IProps> = memo(function (props) {
  const { itemData } = props

  return (
    <AlbumItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a href="#/discover/album" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
})

export default NewAlbumItem

// 设置一个方便调试的name 可以不写 默认为组件名称
NewAlbumItem.displayName = 'NewAlbumItem'
