import { Route, Switch,Routes } from 'react-router-dom';
import { Layout } from './componet/layout/Layout';
import { AllMettupsPage } from "./pages/AllMettups";
import { FavouritesPage } from "./pages/Favourites";
import { NewMeetupsPage } from "./pages/NewMeetups";


function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavouritesPage/>
        </Route>
      </Switch> */}
      <Layout>
      <Routes>
        <Route exact path="/" element={<AllMettupsPage/>}/>
        <Route exact path="/Favourite" element={<FavouritesPage/>}/>
        <Route exact path="/newmwwtups" element={<NewMeetupsPage/>}/>
        
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
