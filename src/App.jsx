import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { UserContext } from './components/UserContext'
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
            <Routes>
                <UserContext.Provider value={{formData, setFormData, previewUrl, setPreviewUrl}}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ticketpage" element={<TicketPage />} />
                </UserContext.Provider>
            </Routes>
    )
}


