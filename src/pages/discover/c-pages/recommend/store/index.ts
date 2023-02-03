import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylitDetail
} from '../service'

// 定义异步函数发请求
// 获取轮播图
// export const fetchBannerDataAction = createAsyncThunk(
//   'banners',
//   async (arg, { dispatch }) => {
//     const res = await getBanners()
//     // 1.通过reducers将banners存储到state中
//     dispatch(changeBannersAction(res.banners))

//     // 2.通过extraReducers将banners存储到state中
//     // 这里return的数据会传给extraReducers中
//     // return res.banners
//   }
// )

// // 获取热门推荐
// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotRecommend',
//   async (arg, { dispatch }) => {
//     const res = await getHotRecommend(8)
//     dispatch(changeHotRecommendAction(res.result))
//   }
// )

// // 获取新碟上架
// export const fetchNewAlbumAction = createAsyncThunk(
//   'newAlbum',
//   async (arg, { dispatch }) => {
//     const res = await getNewAlbum()
//     dispatch(changeNewAlbumsAction(res.albums))
//   }
// )

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
  }
)

// 飙升榜 19723756
// 新歌榜 3779629
// 原创榜 2884035
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    // 1.每一个请求单独处理
    // for (const id of rankingIds) {
    //   getPlaylitDetail(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜', res)
    //         break
    //       case 3779629:
    //         console.log('新歌榜', res)
    //         break
    //       case 2884035:
    //         console.log('原创榜', res)
    //         break
    //     }
    //   })
    // }
    // 2.三个结果统一放到数组中管理
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylitDetail(id))
    }

    // all可以保证结果的顺序为执行的顺序（promise执行不一定按顺序执行）
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

// 定义类型
export interface IBanner {
  imageUrl: string
  typeTitle: string
}

interface IRecommendState {
  banners: IBanner[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
}

// 定义数据
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    // 轮播图
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    // 热门推荐
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    // 新碟上架
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    // 榜单
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumsAction,
  changeRankingsAction
} = recommendSlice.actions
export default recommendSlice.reducer
