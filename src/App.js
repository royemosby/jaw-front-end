import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'
import { Contacts } from './contacts/Contacts'
import { NewContact } from './contacts/NewContact'
import { EditContact } from './contacts/EditContact'
import { Footer } from './common/Footer'
import { Header } from './common/Header'
import { Jobs } from './jobs/Jobs'
import { NewJob } from './jobs/NewJob'
import { EditJob } from './jobs/EditJob'
import { Login } from './user/Login'
import { NewUser } from './user/NewUser'
import { EditUser } from './user/EditUser'
import { NotFound } from './common/NotFound'
import { User } from './user/User'
import { ContactDetails } from './contacts/ContactDetails'

const wrapperStyles =
  'min-h-screen grid justify-center text-slate-100 content-between p-1'
const mainStyles =
  'm-auto text-center max-w-6xl	flex flex-col items-stretch h-full border-2 border-slate-600 shadow-cover p-2'

//TODO: fix routes needing :id
function App() {
  const user = useSelector((state) => state.user)
  const protectedRoutes = () => {
    if (user.jwt) {
      return (
        <>
          <Route index element={<Jobs />} />
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="contacts/:contactId" element={<ContactDetails />} />
          <Route path="contacts/new" element={<NewContact />} />
          <Route path="contacts/edit" element={<EditContact />} />
          <Route path="user" element={<User />} />
          <Route path="user/edit" element={<EditUser />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/edit" element={<EditJob />} />
          <Route path="jobs/new" element={<NewJob />} />
          <Route path="*" element={<NotFound />} />
        </>
      )
    } else {
      return (
        <>
          <Route index element={<Login />} />
          <Route path="*" element={<Login />} />
        </>
      )
    }
  }

  return (
    <div className={wrapperStyles}>
      <Router>
        <Header />

        <main className={mainStyles}>
          <Routes>
            {protectedRoutes()}
            <Route path="/user/new" element={<NewUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
