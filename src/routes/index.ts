import BookRoutes from "./BookRoutes";
import UserRoutes from "./UserRoutes";
import UserBookRoutes from "./UserBookRoutes";
import LibraryRoutes from "./LibraryRoutes";
import UserBookLibrraryVwRoute from "./UserBookLibrraryVwRoute";

export default [
  ...UserRoutes,
  ...BookRoutes,
  ...UserBookRoutes,
  ...LibraryRoutes,
  ...UserBookLibrraryVwRoute,
];
