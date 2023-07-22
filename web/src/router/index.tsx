import { Routes, Route, Navigate } from "react-router-dom";
import { ItemsPage } from "@/pages";
import ItemDetail from "@/pages/items/[id]";

function Router() {
  return (
    <Routes>
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/items/:id" element={<ItemDetail />} />
      <Route path="/" element={<Navigate to="/items" replace />} />
    </Routes>
  );
}

export default Router;
