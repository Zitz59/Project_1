import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            }
          />
          <Route path="/profile" element={<Profile posts={props.posts} />} />
          <Route path="/news" element={() => <News />} />
          <Route path="/music" element={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
