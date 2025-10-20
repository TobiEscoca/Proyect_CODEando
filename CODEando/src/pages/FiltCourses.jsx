import React from "react";
import { useParams } from "react-router-dom";
import Catalog from "../ui/Catalog";
import courses from "../data/courses";

const FiltCourses = () => {
  const { category } = useParams();
  // decode in case the category was URL-encoded
  const decodedCategory = category ? decodeURIComponent(category) : "";

  // Normalize category to match data (case-insensitive)
  const normalized = decodedCategory ? decodedCategory.toLowerCase() : "";

  const filtered = courses.filter((c) => c.category.toLowerCase() === normalized);

  const prettyCategory = decodedCategory || "";
  const title = filtered.length ? `Cursos de ${prettyCategory}` : `No hay cursos en la categoría "${prettyCategory}"`;

  return <Catalog courses={filtered} title={title} />;
}

export default FiltCourses;