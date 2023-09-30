import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Login/Login';
import { Home } from './Home/Home';
import { Error } from './error/Error';
import { Curso } from './Cursos/Curso';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        errorElement: <Error/>
    },
    {
        path:"/dashboard",
        element:<Home/>
    },
    {
        path:"/cursos/:nombre",
        element:<Curso/>
    },

]);

export default router;
