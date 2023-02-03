import sxRequest from '@/service'

// 轮播图
export function getBanners() {
  return sxRequest.get({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommend(limit = 30) {
  return sxRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewAlbum(limit = 10) {
  return sxRequest.get({
    url: '/album/newest',
    params: {
      limit
    }
  })
}

// 飙升榜 19723756
// 新歌榜 3779629
// 原创榜 2884035
// 榜单数据
export function getPlaylitDetail(id: number) {
  return sxRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
