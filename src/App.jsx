import { Routes, Route } from "react-router-dom";
import { Navbar } from "./compont/Navbar";
import { Homecompont } from "./Homecompont";
import { NerflixHome } from "./compont/NerflixHome";
import { Netflixmovie } from "./compont/Netflixmovie";
import { Netflixshows } from "./compont/Netflixshows";
import { NetflixSong } from "./compont/NetflixSong";
import { Netflixtv } from "./compont/Netflixtv";
import { Netflixseries } from "./compont/Netflixseries";
import { Watch } from "./compont/Watch";
import { Team } from "./compont/Team";
import { TeamDetail } from "./compont/TeamDetail";
import { ErrorNotFound } from "./compont/ErrorNotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homecompont />} />
        <Route path="/netflixhome" element={<NerflixHome />} />
        <Route path="/netflixmovies" element={<Netflixmovie />} />
        <Route path="/netflixshows" element={<Netflixshows />} />
        <Route path="/netflixsong" element={<NetflixSong />} />
        <Route path="/netflixtv" element={<Netflixtv />} />
        <Route path="/netflixseries" element={<Netflixseries />} />
        <Route path="/watch/:name" element={<Watch />} />

        {/* TEAM ROUTES */}
        <Route path="/team" element={<Team />} />
        <Route path="/team/:name" element={<TeamDetail />} />

        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </>
  );
}

export default App;
