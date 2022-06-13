export default function authFindUser() {
          const user = JSON.parse(localStorage.getItem('user'));

          if (user) {
                    return 'user have';
          } else {
                    return null;
          }
}