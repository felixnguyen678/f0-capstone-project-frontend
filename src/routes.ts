const routes = {
  home: {
    value: '/'
  },
  myProfile: {
    value: '/my-profile'
  },
  login: {
    value: '/login'
  },
  users: {
    value: '/users',
    details: {
      value: (id: string) => `/users/${id}`
    }
  }
}

export default routes
