import { BrowserRouter, Route , Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";

function App() {

  const useStyles = makeStyles(()=>({
    App:{
       backgroundColor: "#14161a",
       color:"white",
       minHeight: "100vh"
    },
  }));

    const Classes = useStyles()

  return (
    <BrowserRouter>
      <div className={Classes.App}>
        <Header/>
        <Routes>
        <Route path='/' component={Homepage} exact/>
        <Route path="/coins/:id" component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
