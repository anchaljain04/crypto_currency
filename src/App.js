import { BrowserRouter, Route , Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";




  const useStyles = makeStyles(()=>({
    App:{
       backgroundColor: "#14161a",
       color:"white",
       minHeight: "100vh"
    },
  }));

  const App= () => {
    const Classes = useStyles();

  return (
   
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div className={Classes.App}>
          <Header/>
          <Homepage/>
        </div>
        }/>
        {/* <Route  path='/coins/:id' element={<CoinPage/>}/> */}
        <Route  path='/coins/:id' element={
        <div className={Classes.App}>
        <Header/>
        <CoinPage/>
        </div>
        }/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
