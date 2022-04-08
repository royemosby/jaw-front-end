import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

//import { ContactDetails } from './contacts/ContactDetails'
import { Contacts } from './contacts/Contacts'
import { EditContact } from './contacts/EditContact'
import { EditUser } from './user/EditUser'
import { EditJob } from './jobs/EditJob'
import { Footer } from './common/Footer'
import { Header } from './common/Header'
//import { JobDetails } from './jobs/JobDetails'
import { Jobs } from './jobs/Jobs'
import { Login } from './login/Login'
import { NewContact } from './contacts/NewContact'
import { NewUser } from './user/NewUser'
import { NewJob } from './jobs/NewJob'
import { NotFound } from './common/NotFound'
import { User } from './user/User'

import logo from './wrangler.svg'
import './App.css'

const styles = ['min-h-screen', 'grid', 'justify-center', 'text-slate-100', 'content-between', 'p-1'].join(' ')
function App() {
  return (
    <div className={styles}>
      <Router>
        <Header className="justify-self-start"></Header>
        <main className="m-auto text-center max-w-6xl	flex flex-col items-stretch h-full border-2 border-slate-600 shadow-cover p-2">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route index element={<Jobs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/user" element={<User />} />
            <Route path="/x" element={<NewContact />} />
            <Route path="/y" element={<EditContact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
