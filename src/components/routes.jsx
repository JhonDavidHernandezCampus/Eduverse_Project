import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Login/Login';
import { Registro } from './Registro/Registro';


const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/registro",
        element:<Registro/>
    }
]);

export default router;
