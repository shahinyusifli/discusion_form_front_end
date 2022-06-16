export default function authGetUserName() {
          const user = JSON.parse(localStorage.getItem('user'));

          if (user) {
                    

          const base64Url = user.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const parsed_jwt = JSON.parse(window.atob(base64))
          const name =  parsed_jwt['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
                    return name;
          } else {
                    return 'It is not registered';
          }
}