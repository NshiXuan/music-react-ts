import React, { useEffect, useRef, useState } from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { Slider } from 'antd'

import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { getImageSize, getPlayUrl } from '@/utils/formatCount'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const AppPlayerBar: FC<IProps> = memo(function (props) {
  // const { children } = props
  const [isPlaying, setIsPlaying] = useState(false)

  // 从store中获取当前歌曲数据
  const { currentSong } = useAppSelector((state) => state.player, shallowEqual)

  // 进入页面播放音乐
  useEffect(() => {
    console.log(currentSong)
    console.log(getPlayUrl(2179431622))
    audioRef.current!.src =
      'http://baicizhan.qiniucdn.com/word_audios/favor.mp3'
    audioRef.current
      ?.play()
      .then(() => {
        console.log('播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('播放失败', err)
      })
  }, [currentSong])

  // 获取audioRef播放
  const audioRef = useRef<HTMLAudioElement>(null)

  // 点击播放、暂停按钮播放音乐
  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="wrap-v2 content">
        {/* 播放控制器 */}
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>

        {/* 中间内容 */}
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong.al.picUrl, 34)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span>{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar?.[0]?.name}</span>
            </div>

            {/* 进度条 */}
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">00:52</span>
                <span className="divider">/</span>
                <span className="duration">04:25</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>

        {/* 右边收藏等 */}
        <BarOperator>
          <div className="left">
            {/* <button className="btn pip"></button> */}
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>

      {/* 播放器 */}
      <audio ref={audioRef} />
    </PlayerBarWrapper>
  )
})

export default AppPlayerBar

// 设置一个方便调试的name 可以不写 默认为组件名称
AppPlayerBar.displayName = 'AppPlayerBar'
