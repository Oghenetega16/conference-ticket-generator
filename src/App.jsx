import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import TicketPage from './TicketPage'

export default function App() {
    return (
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/ticketpage" element={<TicketPage />} />
              </Routes>
          </Router>
    )
}


