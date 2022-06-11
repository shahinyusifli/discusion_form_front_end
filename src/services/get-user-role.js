export default function authGetUserRole() {
          const user = JSON.parse(localStorage.getItem('user'));

          const base64Url = user.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const parsed_jwt = JSON.parse(window.atob(base64))
          const role =  parsed_jwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

          if (user) {
                    return role;
          } else {
                    return {};
          }
}