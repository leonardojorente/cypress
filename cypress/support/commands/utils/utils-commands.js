class Utils {
    generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
    }

    selectEnvironment() {
      switch (Cypress.env.ENVIRONMENT) {
          case 'local':
              break
          case 'adm':
              Cypress.env('user', Cypress.env('user_adm'))
              Cypress.env('password', Cypress.env('password_adm'))
              Cypress.env('base_url_web', Cypress.env('base_url_web_adm'))
              break
          default:
              break
      }
  }

}
export default new Utils()