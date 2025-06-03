import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './HomePage'
import TicketPage from './TicketPage'

export default function App() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        github: ""
  })
  const [previewUrl, setPreviewUrl] = useState("")

    return (
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage formData={formData} setFormData={setFormData} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />} />
                  <Route path="/ticketpage" element={<TicketPage formData={formData} setFormData={setFormData} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />} />
              </Routes>
          </Router>
    )
}


