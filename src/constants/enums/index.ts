export enum EExample {
  EXAMPLE_ENUM = 'EXAMPLE_ENUM'
}

export enum EUserRole {
  DEVELOPER = 'developer',
  PROJECT_MANAGER = 'project_manager',
  OWNER = 'owner',
  BILLING_MANAGER = 'billing_manager'
}

export enum ELocalStorageKeys {
  ACCESS_TOKEN = 'jwt'
}

export enum EServerErrorMessage {
  PASSWORD_MINIMUM_LENGTH_REQUIRED = 'should NOT be shorter than 8 characters',
  PASSWORD_INVALID = 'password is not valid',
  JWT_EXPIRED = 'Error verifying token: jwt expired',
  UNAVAILABLE_USER = 'Error verifying token: unavailable user.'
}
