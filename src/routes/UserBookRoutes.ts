import { UserBookController } from "../controller/UserBookController";

export default [
  {
    method: "get",
    route: "/userbooks",
    controller: UserBookController,
    action: "all",
  },
  {
    method: "get",
    route: "/userbooks/:id",
    controller: UserBookController,
    action: "one",
  },
  {
    method: "post",
    route: "/userbooks",
    controller: UserBookController,
    action: "save",
  },
  {
    method: "delete",
    route: "/userbooks/:id",
    controller: UserBookController,
    action: "remove",
  },
];
