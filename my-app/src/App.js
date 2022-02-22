import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
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
              <Dialogs
                dialogs={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route path="/news" element={() => <News />} />
          <Route path="/music" element={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route
            path="/friends"
            element={<Friends sidebar={props.state.sidebar} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
