import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './tabs.css'
import Dashboard from '../popup/screens/Dashboard'
import FavoritesComponent from '../popup/screens/favorites'
import ContaComponent from '../popup/screens/contaPage'
import RecentsComponent from '../popup/screens/recentsScreen'

function Tabs() {
    return (
        <div>
        
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/favorites" element={<FavoritesComponent />} />
                <Route path="/conta" element={<ContaComponent />} />
                <Route path="/recentes" element={<RecentsComponent />} />

            </Routes>
        </div>
    )
}

export default Tabs