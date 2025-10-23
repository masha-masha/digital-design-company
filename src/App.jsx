import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage";
import PricePage from "./pages/PricePage";
import BlogPage from "./pages/BlogPage";
import AboutCompanyPage from "./pages/AboutCompanyPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
 return (
  <>
   <Router>
    <Header />
    <main>
     <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutCompanyPage />} />
      <Route path="*" element={<NotFoundPage />} />
     </Routes>
    </main>
    <Footer />
   </Router>
  </>
 );
}

export default App;
