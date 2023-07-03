import Header from './components/Header';
import Body from './components/Body';
import WatchPgae from './components/WatchPage'
import MainComponent from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import ButtonList from './components/ButtonList';
import ButtonListShimmer from './components/ButtonListShimmer';

const approuter = createBrowserRouter([
  {
    path:'/',
    element: <Body/>,
    children:[
      {
        path:'/',
        element: <MainComponent/>,
      },
      {
        path: '/watch',
        element:<WatchPgae/>
      },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={approuter}/>
    </Provider>
  );
}


export default App;
