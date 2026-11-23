import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HistoriaPage from './pages/historia/HistoriaPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HistoriaPage />
  </StrictMode>,
)
