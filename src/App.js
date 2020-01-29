import React from 'react';

import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state={
      employees: []
    }
  }

componentDidMount(){
  fetch('http://localhost:3005/')
  .then(employees => employees.json())
  .then(employees => {
    console.log(employees)
    this.setState({
        employees:employees
    })
  })
  .catch(err => console.log(err)) 

}




  render(){ 
    return (
      <div className="App container">
        <h1>Sogeti Employee Directory</h1>
          <div className="row">
          {this.state.employees.map((employee, index) => {
            return (
              <div class="media col-12 mb-4 p-3 directory-entry">
              <img src={employee.img} class="mr-3 directory-image" alt="..."/>
              <div class="media-body">
                <h5 class="mt-0">Name: - {employee.name}</h5>
                <h6 class="mt-0">Location: - {employee.location}
                <p class="directory-phone"> </p>
                </h6>
              </div>
            </div>

            
          )
        }) 
      }
      </div>
      
      </div>
    );
  }
  
}

export default App;
