import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
  return (
    <> 
    <div>
      <Header />
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    <MainContent />
      <WelcomeMessage />
      <ProfilePage userData={userData} />;
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
         </>
  )
}

export default App
