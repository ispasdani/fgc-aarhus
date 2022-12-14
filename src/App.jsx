import { MainLayout } from "./layout/MainLayout";
import { Homepage } from "./pages/homepage/Homepage";
import { MatchMaking } from "./pages/matchMaking/MatchMaking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SelectedMatch } from "./pages/selectedMatch/SelectedMatch";
import { RandomMatch } from "./pages/randommatch/RandomMatch";
import { RandomMatchResult } from "./pages/randomMatchResult/RandomMatchResult";
import { InviteConfirm } from "./pages/inviteConfirm/InviteConfirm";
import { Contact } from "./pages/contact/Contact";
import { Events } from "./pages/events/Events";
import { Ranking } from "./pages/ranking/Ranking";
import { About } from "./pages/aboutUs/About";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/fgc-aarhus/match-making" element={<MatchMaking />} />
            <Route
              path="/fgc-aarhus/selected-match"
              element={<SelectedMatch />}
            />
            <Route path="/fgc-aarhus/random-match" element={<RandomMatch />} />
            <Route
              path="/fgc-aarhus/random-match-result"
              element={<RandomMatchResult />}
            />
            <Route
              path="/fgc-aarhus/invitation-send"
              element={<InviteConfirm />}
            />
            <Route path="/fgc-aarhus/contact" element={<Contact />} />
            <Route path="/fgc-aarhus/events" element={<Events />} />
            <Route path="/fgc-aarhus/ranking" element={<Ranking />} />
            <Route path="/fgc-aarhus/about" element={<About />} />
            <Route path="/fgc-aarhus/profile" element={<Profile />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
