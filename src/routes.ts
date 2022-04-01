const routes = {
  home: {
    value: "/",
  },
  myProfile: {
    value: "/my-profile",
  },
  users: {
    value: "/users",
    details: {
      value: (id: string) => `/users/${id}`,
    },
  },
};

export default routes;
