import { UserLibraryController } from "../controller/UserLibraryController";

export default [
  {
    method: "get",
    route: "/users/libraries",
    controller: UserLibraryController,
    action: "userLibraries",
  },
  {
    method: "get",
    route: "/libraries/users",
    controller: UserLibraryController,
    action: "libraryUsers",
  },
  {
    method: "post",
    route: "/users/libraries",
    controller: UserLibraryController,
    action: "saveUsersLibraries",
  },
  {
    method: "post",
    route: "/libraries",
    controller: UserLibraryController,
    action: "saveLibrary",
  },
];
