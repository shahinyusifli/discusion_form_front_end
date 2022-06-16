export default function authFindUser() {
          const user = JSON.parse(localStorage.getItem('user'));

          if (user) {
                    return true;
          } else {
                    return null;
          }
}