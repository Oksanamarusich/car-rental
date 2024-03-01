import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Layout";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

export const App = () => {
  return (
    <Suspense fallback={"LOADING PAGE..."}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
       <Toaster />
    </Suspense>
  );
};
