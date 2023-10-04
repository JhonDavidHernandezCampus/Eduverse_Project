import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Proted } from './Contexts/Proted';
import { Home } from './Home/Home';
import { Error } from './error/Error';
import { Curso } from './Cursos/Curso';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Contexts/ContextsSesion';

export const Router = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Proted />} >
                        <Route path='/' element={<Login />}></Route>
                        <Route path='/dashboard' element={<Home />} />
                        <Route path='/cursos/:nombre' element={<Curso />} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
/* 

    (stateSession) ? [
        //aqui necesito que solo me de acceso a la ruta
    ] : [
        {
            path: "/",
            element: <Login />,
            errorElement: <Error />
        },
        {
            path: "/dashboard",
            element: <Home />
        },
        {
            path: "/cursos/:nombre",
            element: <Curso />
        },

    ] */