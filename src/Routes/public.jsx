import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages";
import PublicLayout from "../Layout/PublicLayout";

const PublicRoutes = () => {
    return (
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
    );
};

export default PublicRoutes;
