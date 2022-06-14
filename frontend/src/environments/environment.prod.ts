export const environment = {
  production: true,
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    // endpoint: 'http://localhost/api/v1',
    // hostAddress : 'http://localhost',
    endpoint: 'http://155.254.19.130:2083/api/v1',
    hostAddress : 'http://155.254.19.130:2083',

    /* LOCAL REST API CRUD WITH POSTGRESQL */
    /* api: true,
    url: 'http://localhost:5004/', */
  },
};
