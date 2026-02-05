export const Constant = {
  // GET_ALL_EMPLOYEE:'GetAllEmployee',
  // GET_ALL_CLINET: 'GetAllClients',
  // VALIDATION_REQUIRED:'this is Required',
  // AADHAR_PARRETN: '$',

  API_METHODS: {
    CLIENT: {
      GET_ALL: 'GetAllClients',
      ADD_UPDATE: 'addUpdateClinet',
    },
    EMPLOYEE: {
      GET_ALL: 'GetAllEmployee',
      NEW_EMPLOYEE: 'CreateNewEmployee',
      GET_EMPLOYEE_BY_ID: 'GetEmployeeByEmployeeId?id=',
    },
    MASTER: {
      GET_ALL_ROLES: 'GetAllRoles',
      GET_ALL_DESIGNATION: 'GetAllDesignation',
    },
    PROJECT: {
      GET_ALL_PROJECT: 'GetAllClientProjects',
    },
  },
  VALIDATION_MESSAGE: {
    REQUIRED: 'This is Required',
    EMAIL: 'Email is not correct',
  },
  REGULAR_EXPRESSION: {
    ADDHAR_CARD: '****-****-****',
  },
};
