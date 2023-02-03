import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-components/nav-bar'

const Discover = () => {
  return (
    <div>
      <NavBar />

      {/* 二级路由也需要要懒加载 不然二级路由懒加载每完成之前会显示一级路由的Suspense 造成闪动 */}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Discover
