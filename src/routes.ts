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
  cloudServiceAuthentication: {
    value: '/cloud-service-authentication'
  },
  users: {
    value: '/users',
    details: {
      value: (id: string) => `/users/${id}`
    }
  },
  login: {
    value: '/login'
  },
  cloudLogin: {
    value: '/cloud-login'
  }
}

export default routes
