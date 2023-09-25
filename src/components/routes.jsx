import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Login/Login';
import { Registro } from './Registro/Registro';
import { Dashboard } from './Home/Dashboard';
import { Error } from './error/Error';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        errorElement: <Error/>
    },
    {
        path:"/registro",
        element:<Registro/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },

]);

export default router;
