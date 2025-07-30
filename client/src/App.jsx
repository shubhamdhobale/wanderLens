import EmptyPages from "./Components/EmptyPages.jsx";
import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import {Route , RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom';
import MyTreks from "./Pages/MyTreks.jsx";
import TrekDetails from "./Components/TrekDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/*" element={<EmptyPages/>}/>
      <Route path="/treks" element={<MyTreks/>}/>
      <Route path="/treks/:slug" element={<TrekDetails />} />

    </Route>
  )
)

function App() {
  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  );
}

export default App;          