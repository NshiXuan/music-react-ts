import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './pages/player/app-player-bar'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading...">
        <div>{useRoutes(routes)}</div>
      </Suspense>

      {/* 播放栏 */}
      <AppPlayerBar />
      <AppFooter />
    </div>
  )
}

export default App
