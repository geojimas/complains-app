// function App() {

//   return (
// <div className="container">
//     <div className="container_header">1</div>
//     <div className="container_left-side">2</div>
//     <div className="container_right-side">3</div>
//     <div className="container_middle-side">4</div>
//     <div className="container_bottom-side">5</div>
// </div>
//   )
// }

// export default App

import { RouterProvider } from 'react-router';
import { router } from './routes/router'; // your createBrowserRouter file

function App() {
  return <RouterProvider router={router} />;
}

export default App;
