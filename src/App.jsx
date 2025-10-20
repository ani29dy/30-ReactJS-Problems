import "./App.css";
import Lists from "./Problems/04-Lists";
import One from "./Problems/01-Hello_World";
import Three from "./Problems/03-Forms";
import Two from "./Problems/02-UseState";
import Toggle from "./Problems/05-Toggle";
import Fetch from "./Problems/06-Fetch";
import Time from "./Problems/07-Time";
import TodoList from "./Problems/08-TodoList";
import BgChange from "./Problems/09-BgChange";
import Router from "./Problems/10-Router";
import RandomQoutes from "./Problems/11-RandomQoutes";
import UploadImage from "./Problems/12-UploadImage";
import LoginForm from "./Problems/13-LoginForm";
import WeatherAPI from "./Problems/14-WeatherAPI";
import SearchBar from "./Problems/15-SearchBar";
import Pagination from "./Problems/16-Pagination";
import ColorPicker from "./Problems/17-ColorPicker";
import NavigationMenu from "./Problems/18-NavigationMenu";
import ChangeThemeComp from "./Problems/19-ChangeThemeComp";
import ChangeTheme from "./Problems/19-ChangeTheme";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const item = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Another Item",
    "Another Item 2",
    "Another Item 3",
  ];

  return (
    <>
      {/* <One /> */}
      {/* <Two /> */}
      {/* <Three /> */}
      {/* <Lists /> */}
      {/* <Toggle /> */}
      {/* <Fetch /> */}
      {/* <Time /> */}
      {/* <TodoList /> */}
      {/* <BgChange /> */}
      {/* <Router /> */}
      {/* <RandomQoutes /> */}
      {/* <UploadImage /> */}
      {/* <LoginForm /> */}
      {/* <WeatherAPI /> */}
      {/* <SearchBar items={item} /> */}
      {/* <Pagination items={item} itemsPerPage={2} /> */}
      {/* <ColorPicker /> */}
      {/* <NavigationMenu /> */}
      <ThemeProvider>
        <div className="App">
          <ChangeTheme />
          <ChangeThemeComp />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
