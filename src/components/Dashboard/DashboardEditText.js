import EdiText from 'react-editext';
import authHeader from '../../services/Auth/auth-header';
import axios from 'axios';
import authGetUserRole from '../../services/User/get-user-role';
import { useState } from 'react';

const DashboardEditText = ({ data }) => {

          const [topic, setTopic] = useState([])
          const userRole = authGetUserRole()

          const api = axios.create({
                    baseURL: ''
          })

          const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
                    first.toLocaleUpperCase(locale) + rest.join('')

          const handleRowUpdate = (value, data) => {
                    const value_capilatize = capitalizeFirstLetter(value)
                    let errorList = []



                    if (value_capilatize === undefined) {
                              errorList.push("Please add topic contnent")
                              return (
                                        <div className="alert alert-danger" role="alert">
                                                  The topic is empty.
                                        </div>
                              );
                    }

                    if (userRole !== 'admin') {
                              errorList.push("Modifing topics are required to admin role")
                    }



                    if (errorList.length < 1) {
                              api.put("/dashboard/update/" + data.topicId, { topicContent: value_capilatize, topicId: data.topicId }, { headers: authHeader() })
                                        .then(response => {
                                                  setTopic(response.data)
                                                  window.location.reload()

                                        })
                    }
          }

          const validationTopic = (value) => {
                    if (value.length < 20) {
                              return (
                                        <div className="alert alert-danger" role="alert">
                                                  The topic must be between 5 and 20 characters.
                                        </div>
                              );
                    }
          };

          return (
                    <>
                              <EdiText
                                        validation={validationTopic}
                                        className="text-center"
                                        type='text'
                                        value={data.topicContent}
                                        onSave={(value) => handleRowUpdate(value, data)} />
                    </>



          )
}

export default DashboardEditText;