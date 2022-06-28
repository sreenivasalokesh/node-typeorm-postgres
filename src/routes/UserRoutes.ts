import { UserController } from "../controller/UserController";

export default [
  {
    method: "get",
    route: "/users/books",
    controller: UserController,
    action: "userbooks",
  },
  {
    method: "get",
    route: "/allUserbooks",
    controller: UserController,
    action: "allUserbooks",
  },

  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "post",
    route: "/users/:id/colleges",
    controller: UserController,
    action: "saveColleges",
  },
];
