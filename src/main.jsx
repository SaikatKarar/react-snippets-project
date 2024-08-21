import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home.jsx';
import One from './component/snippets_project/One.jsx';
import Two from './component/snippets_project/Two';
import Three from './component/snippets_project/Three.jsx';
import Four from './component/snippets_project/Four.jsx';
import Five from './component/snippets_project/Five/Five';
import Six from './component/snippets_project/Six.jsx';
import Seven from './component/snippets_project/Seven/Seven.jsx';
import { Eight } from './component/snippets_project/Eight.jsx';
import Nine from './component/snippets_project/Nine/Nine.jsx';
import Ten from './component/snippets_project/Ten.jsx';
import Eleven from './component/snippets_project/Eleven.jsx';
import Search_input from './component/snippets_project/Search_input.jsx';
import DisplayItem from './component/snippets_project/DisplayItem.jsx';
import ToggleSwitch from './component/snippets_project/ToggleSwitch.jsx';
import FetchesData from './component/snippets_project/FetchesData.jsx';
import CountsDown from './component/snippets_project/CountsDown.jsx';
import TodoMine from './component/snippets_project/TodoMine.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/one",
        element: <One />,
      },
      {
        path: "/two",
        element: <Two />,
      },
      {
        path: "/three",
        element: <Three />,
      },
      {
        path: "/four",
        element: <Four />,
      },
      {
        path: "/five",
        element: <Five />,
      },
      {
        path: "/six",
        element: <Six />,
      },
      {
        path: "/seven",
        element: <Seven />,
      },
      {
        path: "/eight",
        element: <Eight />,
      },
      {
        path: "/nine",
        element: <Nine />,
      },
      {
        path: "/ten",
        element: <Ten />,
      },
      {
        path: "/eleven",
        element: <Eleven />,
      },
      {
        path: "/search_input",
        element: <Search_input />,
      },
      {
        path: "/display_item",
        element: <DisplayItem />,
      },
      {
        path: "/toggle_switch",
        element: <ToggleSwitch />,
      },
      {
        path: "/fetches_data",
        element: <FetchesData />,
      },
      {
        path: "/counts_down",
        element: <CountsDown />,
      },
      {
        path: "/to_do",
        element: <TodoMine />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
