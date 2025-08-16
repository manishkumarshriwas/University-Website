import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, useLocation } from "react-router-dom";

import { TopHeaderBar } from "./components/TopHeaderBar";
import { MainNavBar } from "./components/MainNavBar";
import { Footer } from "./components/Footer";




import HomePage from "./pages/HomePage";
import { AcademicPrograms } from "./pages/AcademicPrograms";
import { AdmissionPage } from "./pages/AdmissionPage";
import { AboutUniversity } from "./pages/AboutUniversity";
import { StudentResources } from "./pages/StudentResources";

import { Research } from './pages/Research';
import { NewsAndEvents } from './pages/NewsAndEvents';
import { ContactUs } from './pages/ContactUs';
import { AdmissionDeadlines } from "./pages/AdmissionDeadlines";
import { UpcomingEvents } from "./pages/UpcomingEvents";
import { LatestNews } from "./pages/LatestNews";  
import NewsArticlePage from "./pages/NewsArticlePage"; 
import { article1 } from "./data/article1";
import { StudentResource } from "./pages/StudentResource";  
import { VirtualTour } from "./pages/VirtualTour";  
import { Department } from "./departments/Department"; 
import { ScienceDepartment } from "./departments/ScienceDepartment"; 
import { Engineering } from "./departments/Engineering"; 
import { Business } from "./departments/Business"; 
import { Humanities } from "./departments/Humanities"; 
import { Medicine } from "./departments/Medicine"; 
import { Law } from "./departments/Law"; 
import { ArtsAndScience } from "./departments/ArtsAndScience"; 
import { ResearchPaperStructure } from "./pages/ResearchPaperStructure";
import { ResearchPaper } from "./pages/ResearchPaper";
import { ApplyPage } from "./pages/ApplyPage";
import { ApplyForm } from "./pages/ApplyForm";
import { ContinueApplication } from "./pages/ContinueApplication";

const ArticleRoute = () => {
  const { articleId } = useParams();
  const articlesMap = { article1 };
  const articleData = articlesMap[articleId];
  return <NewsArticlePage data={articleData} />;
};

function App() {
  const location = useLocation();

  
  return (
    <>
      <TopHeaderBar />
       <MainNavBar />

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academic-programs" element={<AcademicPrograms />} />
            <Route path="/admissions" element={<AdmissionPage />} />
            <Route path="/aboutuniversity" element={<AboutUniversity />} />
            <Route path="/studentresources" element={<StudentResources />} />
            <Route path="/research" element={<Research />} />
            <Route path="/researchpaper" element={<ResearchPaper />} />
            <Route path="/researchpapers/:paperId" element={<ResearchPaperStructure />} />
            <Route path="/newsandevents" element={<NewsAndEvents />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/admissiondeadlines" element={<AdmissionDeadlines />} />
            <Route path="/upcomingevents" element={<UpcomingEvents />} />
            <Route path="/latestnews" element={<LatestNews />} />
            <Route path="/studentresource" element={<StudentResource />} />
            <Route path="/virtualtour" element={<VirtualTour />} />
            <Route path="/departments/department" element={<Department />} />
            <Route path="/departments/sciencedepartment" element={<ScienceDepartment />} />
            <Route path="/departments/engineering" element={<Engineering />} />
            <Route path="/departments/business" element={<Business />} />
            <Route path="/departments/humanities" element={<Humanities />} />
            <Route path="/departments/medicine" element={<Medicine />} />
            <Route path="/departments/law" element={<Law />} />
            <Route path="/departments/artsandscience" element={<ArtsAndScience />} />
            <Route path="/news/:articleId" element={<ArticleRoute />} />
            <Route path="/applypage" element={<ApplyPage />} />
            <Route path="/applyform" element={<ApplyForm />} />
            <Route path="/continueapplication" element={<ContinueApplication />} />

            
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
