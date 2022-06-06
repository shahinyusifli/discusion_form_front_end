;

const ParseJwt = () => {

          const token = localStorage.getItem('user')
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const a = JSON.parse(window.atob(base64))
          const name = a['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
          const role = a["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]


return (
          <div>
                    {name}
                    {role}
          </div>
);
}  

export default ParseJwt;
