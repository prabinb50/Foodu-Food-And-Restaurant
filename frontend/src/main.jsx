import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes, Route, BrowserRouter } from 'react-router'
import BlogPage from './pages/blogPage.jsx'
import FirstNavbar from './components/firstNavbar.jsx'
import SecondNavBar from './components/secondNavBar.jsx'
import Footer from './components/footer.jsx'
import BlogFoodPage from './pages/blogFoodPage.jsx'
import BlogPizzaPage from './pages/blogPizzaPage.jsx'
import ContactUs from './pages/contactUs.jsx'

export function Root() {
  return (
    <StrictMode>
      <FirstNavbar></FirstNavbar>
      <SecondNavBar></SecondNavBar>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogPage></BlogPage>} />
        <Route path="/blog-food" element={<BlogFoodPage></BlogFoodPage>} />
        <Route path="/blog-pizza" element={<BlogPizzaPage></BlogPizzaPage>} />
        <Route path="/contact-us" element={<ContactUs></ContactUs>}/>
      </Routes>

      <div className='bg-gray-100 pb-10'>
        <Footer></Footer>
      </div>

    </StrictMode>
  )
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter> <Root /> </BrowserRouter>);
