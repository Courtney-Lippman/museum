import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import NotePage from './NotePage'
import NotFoundPage from './NotFoundPage'

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/"> 
            <HomePage />
          </Route>
          <Route path="/note/:id">
            <NotePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Routes>
      </Router>
  )
}

export default App