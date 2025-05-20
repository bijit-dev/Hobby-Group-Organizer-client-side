// import React, { use } from 'react';
// import { AuthContext } from '../../Contexts/AuthContext';
// import { Navigate, useLocation } from 'react-router';
// import Loader from '../../components/Loader';


// const PrivateRouter = ({ children }) => {
//     const { user, loading } = use(AuthContext);
//     const location = useLocation();
//     console.log(location);
    

//     if (loading) {
//         return <Loader/>
//     }
//     if (!user) {
//         return <Navigate state={location.pathname} to="/login"></Navigate>
//     }
//     return children;
// };

// export default PrivateRouter;
