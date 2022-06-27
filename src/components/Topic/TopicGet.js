import React from "react"	
import { Component } from "react";	
import { DataGrid } from '@mui/x-data-grid';	
import UserService from "../../services/user.service";	


export default class TopicGet extends Component {	
  constructor(props) {	
    super(props);	

    this.state = {	
      content: [],	
      raw_row_list: { 'id': 1, "topicName": "sas", "messageName": "sas" }	
    };	


  }	

  handleGetRowId = (e) => {	
    return e.uniId	
  }	

  componentDidMount() {	
    UserService.getUserBoard("/topic/get").then(	
      response => {	
        this.setState({	
          content: response.data,	

        });	

        console.log(response.data)	
      },	
      error => {	
        this.setState({	
          content:	
            (error.response && error.response.data) ||	
            error.message ||	
            error.toString()	
        });	
      }	
    );	
  }	

  render() {	
    return (	
      <div>	



        <div>	


          <div style={{ height: 400, width: '100%' }}>	

            <DataGrid	

              rows={this.state.content.map((item, index) => ({	
                id: index,	
                topicName: item.topicName,	
                messageName: item.messageName	
              }))}	
              columns={[	
                { field: 'id', headerName: 'Id', width: 240 },	
                { field: 'topicName', headerName: 'Topic Name', width: 240 },	
                { field: 'messageName', headerName: 'Message Name', width: 240 }]}	

              pageSize={5}	
              rowsPerPageOptions={[5]}	
              checkboxSelection	
              experimentalFeatures={{ newEditingApi: true }}	

            />	
          </div>	
        </div>	


      </div>	
    );	
  }	
} 