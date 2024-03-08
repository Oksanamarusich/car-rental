import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
