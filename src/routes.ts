const routes = {
  home: {
    value: '/'
  },
  myProfile: {
    value: '/my-profile'
  },
  monitoring: {
    value: '/monitorings'
  },
  billing: {
    value: '/billing'
  },
  resourceAlerts: {
    value: '/resource-alerts'
  },
  virtualPrivateServers: {
    value: '/virtual-private-servers'
  },
  containers: {
    value: '/containers'
  },
  authenticationCloudService: {
    value: '/authenticationCloudService'
  },
  users: {
    value: '/users',
    details: {
      value: (id: string) => `/users/${id}`
    }
  },
  login: {
    value: '/login'
  }
}

export default routes
