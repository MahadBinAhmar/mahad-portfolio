import React from 'react';
// 1. React Router imports ('Navigate' bhi add kiya hai redirect ke liye)
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import Sidebar from './components/Global/Sidebar';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';

// Page Components
// Make sure yeh path sahi ho aur file exist karti ho!
import Home from './components/HomePage/Home';
import ProjectsArchGrid from './components/Projects/ProjectsArchGrid';

// Placeholders
const BlogPlaceholder = () => <div className="h-screen flex items-center justify-center text-3xl font-bold uppercase">Blog Page Coming Soon</div>;
const ContactPagePlaceholder = () => <div className="h-screen flex items-center justify-center text-3xl font-bold uppercase">Dedicated Contact Page</div>;


function App() {
  return (
    // Global Layout Shell
    <div className="h-screen w-screen overflow-hidden bg-[#cecece] flex font-sans relative">

      <Navbar />
      <Sidebar />

      <div className="flex-1 h-full ml-0 md:ml-16 flex flex-col">

        {/* Scrollable Content Area */}
        <div className="flex-1 mt-16 overflow-y-auto flex flex-col bg-white">

          {/* ROUTING DEFINITIONS */}
          <Routes>

            {/* Path: "/" -> Show Homepage */}
            <Route path="/" element={<Home />} />

            {/* Path: "/projects" -> Show Projects Page */}
            <Route path="/projects" element={<ProjectsArchGrid />} />

            <Route path="/blog" element={<BlogPlaceholder />} />
            <Route path="/contact" element={<ContactPagePlaceholder />} />

            {/* --- NEW FIX: CATCH-ALL ROUTE --- */}
            {/* Agar koi aur URL ho jo upar define nahi hai, toh wapis "/" (Home) par bhej do */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>

          <Footer />

        </div>

      </div>

    </div>
  );
}

export default App;