import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
const App = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback='loading...'>
      <App/>
    </Suspense>
  </BrowserRouter>,
)