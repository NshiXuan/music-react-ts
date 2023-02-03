export function formatCount(counter: number) {
  // const counter = parseInt(count)
  if (counter > 100000000) {
    return (counter / 100000000).toFixed(1) + '亿'
  } else if (counter > 10000) {
    return (counter / 10000).toFixed(1) + '万'
  } else {
    return counter + ''
  }
}

// 获取图片大小 height如果不传就默认等于width
export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}x${height}`
}

// 获取歌曲播放的url
export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=367649303.mp3`
}
