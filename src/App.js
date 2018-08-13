import React, { Component } from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class App extends Component {

constructor(props){
  super(props);

  var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  this.state={
    count:1,
    list:[{
          sNo: 1,
          name:'prateek',
          createdDate: date
        }]
  }
}

bindData(){
  var todayNew = new Date(),
            dateNew = todayNew.getFullYear() + '-' + (todayNew.getMonth() + 1) + '-' + todayNew.getDate();

  var text = this.refs.text.value;
  var newCount = this.state.count + 1;
  this.setState({count: newCount});
    var newList = {sNo: newCount, name: text, createdDate: dateNew}
    this.state.list.push(newList);
    this.setState(this.state.list);
    console.log(this.state.list);
}

handleRemove(line){
  var index = this.state.list.indexOf(line);
  this.state.list.splice(index, 1);
  this.setState(this.state.list);
}

  render() {
    let product = this.state.list.map(p => {
      return(<TableRow key={p.sNo}>
              <TableCell>{p.sNo}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.createdDate}</TableCell>
              <TableCell><button onClick={(e) => this.handleRemove(e)}>Remove</button></TableCell>
            </TableRow>)
    })
    return (
      <div className="App">
        <textarea placeholder="Enter a name" ref='text' /><br/>
        <button onClick={(e)=> this.bindData(e) }>Add</button>
        <Table >
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Created Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {product}
            </TableBody>

        </Table>
      </div>
    );
  }
}

export default App;
