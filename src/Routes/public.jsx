import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Public";
import PublicLayout from "../Layout/PublicLayout";
import AuthPages from "../Pages/Public/Auth";
// import PropertiesPage from "../Pages/Public/Properties";

const PublicRoutes = () => {
    return (
        <PublicLayout>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path='/auth' element={<AuthPages />} />
                    {/* <Route path='/properties' element={<PropertiesPage />} /> */}
                </Route>
            </Routes>
        </PublicLayout>
    );
};

export default PublicRoutes;
