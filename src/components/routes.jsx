import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Login/Login';
import { Registro } from './Registro/Registro';
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

]);

export default router;
