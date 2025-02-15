import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Users from "../components/Users";
import Students from "../components/Students";
import AllStudents from "../components/AllStudents";
import Teachers from "../components/Teachers";
import CreateUser from "../components/CreateUser";
import CreateTeacher from "../components/CreateTeacher";
import CreateStudent from "../components/CreateStudent";
import UserDetails from "../components/UserDetails";
import EditUser from "../components/EditUser";
import EditTeacher from "../components/EditTeacher";
import EditStudent from "../components/EditStudent";
import AllMembers from "../components/AllMembers";

function Home() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="profile" element={<Profile />} />
        {user.type === "admin" && (
          <>
            {/* Rutas para admin */}
            <Route path="users" element={<Users />} />
            <Route path="user/create" element={<CreateUser />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teacher/create" element={<CreateTeacher />} />
            <Route path="teachers/:id/edit" element={<EditTeacher />} />
            <Route path="users/:id" element={<UserDetails />} />
            <Route path="users/:id/edit" element={<EditUser />} />
            <Route path="all-members" element={<AllMembers />} />
          </>
        )}
        {/* Rutas comunes para admin y user */}
        {(user.type === "admin" || user.type === "user") && (
          <>
            <Route path="students" element={<AllStudents />} />
            <Route path="student/create" element={<CreateStudent />} />
            <Route path="my-students" element={<Students />} />
            <Route path="students/:id/edit" element={<EditStudent />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default Home;
