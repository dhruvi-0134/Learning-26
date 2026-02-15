import { Routes, Route } from "react-router-dom";
import { Navbar } from "./compont/Navbar";
import { Homecompont } from "./Homecompont";

// ✅ DEFAULT import (NO curly braces)
import NetflixHome from "./compont/NerflixHome";

import { Netflixmovie } from "./compont/Netflixmovie";
import { Netflixshows } from "./compont/Netflixshows";
import { NetflixSong } from "./compont/NetflixSong";
import { Netflixtv } from "./compont/Netflixtv";
import { Netflixseries } from "./compont/Netflixseries";
import { Watch } from "./compont/Watch";
import { Team } from "./compont/Team";
import { TeamDetail } from "./compont/TeamDetail";
import { ErrorNotFound } from "./compont/ErrorNotFound";
import { UserStateDemo1 } from "./compont/UserStateDemo1";
import { UserStateDemo2 } from "./compont/UserStateDemo2";
import { UserStateDemo3 } from "./compont/UserStateDemo3";
import { FunctionDemo1 } from "./compont/FunctionDemo1";
import { Employees } from "./compont/Employees";
import { Student } from "./compont/Student";
import { InputDemo1 } from "./compont/input/InputDemo1";
import { Inputdemo2 } from "./compont/input/Inputdemo2";
import { Formdemo1 } from "./compont/form/Formdemo1";
import { Formdemo2 } from "./compont/form/Formdemo2";
import { Formdemo3 } from "./compont/form/Formdemo3";
import { Formdemo4 } from "./compont/form/Formdemo4";
import { Formdemo5 } from "./compont/form/Formdemo5";
import { Formdemo6 } from "./compont/form/Formdemo6";
import { Formdemo7 } from "./compont/form/Formdemo7";
import { Formdemo8 } from "./compont/form/Formdemo8";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homecompont />} />
        <Route path="/netflixhome" element={<NetflixHome />} />
        <Route path="/netflixmovies" element={<Netflixmovie />} />
        <Route path="/netflixshows" element={<Netflixshows />} />
        <Route path="/netflixsong" element={<NetflixSong />} />
        <Route path="/netflixtv" element={<Netflixtv />} />
        <Route path="/netflixseries" element={<Netflixseries />} />
        <Route path="/watch/:name" element={<Watch />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:name" element={<TeamDetail />} />

        <Route path="/userstate1" element={<UserStateDemo1 />} />
        <Route path="/userstate2" element={<UserStateDemo2 />} />
        <Route path="/userstate3" element={<UserStateDemo3 />} />
        <Route path="/fuctionDemo1" element={<FunctionDemo1/>}></Route>
        <Route path="/employee" element={<Employees/>}></Route>
       <Route path="/student1"element={<Student/>}></Route>
       <Route path="/inputdemo1"element={<InputDemo1/>}></Route>
        <Route path="/inputdemo2"element={<Inputdemo2/>}></Route>
        <Route path="*" element={<ErrorNotFound />} />
        <Route path="/formdemo1"element={<Formdemo1/>}></Route>
        <Route path="/formdemo2"element={<Formdemo2/>}></Route>
        <Route path="/formdemo3"element={<Formdemo3/>}></Route>
        <Route path="/formdemo4"element={<Formdemo4/>}></Route>
        <Route path="/formdemo5"element={<Formdemo5/>}></Route>
        <Route path="/formdemo6"element={<Formdemo6/>}></Route>
        <Route path="/formdemo7"element={<Formdemo7/>}></Route>
        <Route path="/formdemo8"element={<Formdemo8/>}></Route>
      </Routes>
    </>
  );
}

export default App;
