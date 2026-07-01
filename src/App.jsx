import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout Components
import DSTNavbar from "./components/DST_COE/DSTNavbar";
import DSTFooter from "./components/DST_COE/DSTFooter";
import DSTHeader from "./components/DST_COE/DSTHeader";

// Pages
import DSTHome from "./pages/DST/DSTHome";
import DSTAbout from "./pages/DST/DSTAbout";
import BoardMembers from "./pages/DST/boardMembers";
import DSTIncubation from "./pages/DST/DSTIncubation";
import DSTPrototype from "./pages/DST/DSTPrototype";
import DSTResearch from "./pages/DST/DSTResearch";
import DSTStartups from "./pages/DST/DSTStartups";
import DSTStories from "./pages/DST/DSTStories";
import DSTUpcomingEvents from "./pages/DST/DSTUpcomingEvents";
import Mentors from "./pages/DST/Mentors";
import NewsAndEventsPage from "./pages/DST/NewsAndEventsPage";

// hooks
import ScrollToTop from "./components/DST_COE/ScrollToTop";

function App() {
  return (
    <Router>
      {/* Global Layout Components */}

      <ScrollToTop />
      <main className="min-h-screen">
        <Routes>
          {/* --- BASE REDIRECT --- */}
          <Route path="/" element={<Navigate to="/COEs/DST/Home" replace />} />

          {/* --- OFFICIAL ROUTES (/COEs/DST/...) --- */}
          <Route path="/COEs/DST/Home" element={<DSTHome />} />
          <Route path="/COEs/DST/about" element={<DSTAbout />} />
          <Route path="/COEs/DST/board-members" element={<BoardMembers />} />
          <Route path="/COEs/DST/incubation" element={<DSTIncubation />} />
          <Route path="/COEs/DST/prototype" element={<DSTPrototype />} />
          <Route path="/COEs/DST/research" element={<DSTResearch />} />
          <Route path="/COEs/DST/startups" element={<DSTStartups />} />
          <Route path="/COEs/DST/stories" element={<DSTStories />} />
          <Route
            path="/COEs/DST/upcoming-events"
            element={<DSTUpcomingEvents />}
          />
          <Route path="/COEs/DST/mentors" element={<Mentors />} />
          <Route
            path="/COEs/DST/news-and-events"
            element={<NewsAndEventsPage />}
          />

          {/* --- SHORTCUT FALLBACKS (/DST/...) --- */}
          {/* This catches the exact error you just had and safely moves the user over! */}
          <Route
            path="/DST"
            element={<Navigate to="/COEs/DST/Home" replace />}
          />
          <Route
            path="/DST/about"
            element={<Navigate to="/COEs/DST/about" replace />}
          />
          <Route
            path="/DST/board"
            element={<Navigate to="/COEs/DST/board-members" replace />}
          />
          <Route
            path="/DST/board-members"
            element={<Navigate to="/COEs/DST/board-members" replace />}
          />
          <Route
            path="/DST/mentors"
            element={<Navigate to="/COEs/DST/mentors" replace />}
          />
          <Route
            path="/DST/prototype"
            element={<Navigate to="/COEs/DST/prototype" replace />}
          />
          <Route
            path="/DST/research"
            element={<Navigate to="/COEs/DST/research" replace />}
          />
          <Route
            path="/DST/startups"
            element={<Navigate to="/COEs/DST/startups" replace />}
          />
          <Route
            path="/DST/incubation"
            element={<Navigate to="/COEs/DST/incubation" replace />}
          />
          <Route
            path="/DST/success"
            element={<Navigate to="/COEs/DST/stories" replace />}
          />
          <Route
            path="/DST/stories"
            element={<Navigate to="/COEs/DST/stories" replace />}
          />
          <Route
            path="/DST/upcoming"
            element={<Navigate to="/COEs/DST/upcoming-events" replace />}
          />
          <Route
            path="/DST/upcoming-events"
            element={<Navigate to="/COEs/DST/upcoming-events" replace />}
          />
          <Route
            path="/DST/past"
            element={<Navigate to="/COEs/DST/news-and-events" replace />}
          />

          {/* --- CATCH-ALL 404 REDIRECT --- */}
          {/* If they type absolutely anything else wrong, send them back safely to home */}
          <Route path="*" element={<Navigate to="/COEs/DST/Home" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
