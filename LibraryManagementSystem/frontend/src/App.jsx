import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import DashboardLayout from "./pages/DashboardLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<SignUp />} />
                    </Route>
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route path="addbook" element={<p>ADD BOOK</p>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
