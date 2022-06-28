import { UserBookLibrraryVwController } from "../controller/UserBookLibrraryVwController";

export default [
  {
    method: "get",
    route: "/users/books/libraries",
    controller: UserBookLibrraryVwController,
    action: "all",
  },
];
