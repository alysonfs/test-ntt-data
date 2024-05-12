import React from 'react'
import ReactDOM from 'react-dom/client'
import '@ntt-data/ui/theme-default.scss'
import { ThemeProviderFactory } from '@ntt-data/ui/components'
import HomePage from './pages/home/home.page'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AnonymousLayout } from './layout/anonymous'
import { Provider } from 'react-redux'
import appStore from './store/configure-store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ThemeProviderFactory>
        <AnonymousLayout>
          <RouterProvider router={router} />
        </AnonymousLayout>
      </ThemeProviderFactory>
    </Provider>
  </React.StrictMode>
)
