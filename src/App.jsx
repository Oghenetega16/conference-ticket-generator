import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './HomePage'
import TicketPage from './TicketPage'

export default function App() {
    const [previewUrl, setPreviewUrl] = useState("")
    return (
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />} />
                  <Route path="/ticketpage" element={<TicketPage />} />
              </Routes>
          </Router>
    )
}


