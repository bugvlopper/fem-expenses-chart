import logo from './images/logo.svg';
import './App.css';
import Data from "./data.json";
import {Component} from 'react';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      pourcentValue: 0,
    };
  }

  /* _chartsHighestColor(data){
    let highest;
    let last = null;

    data.map((obj,index,size) =>{
      
      if(last === null){
        last = obj.amount;
      }
      if(index > 0){
        if(obj.amount > last){
          last = obj.amount;
        }
      }
      if(index+1 === size.length){
        highest = last;
        
      }
      return null;
    })
        let indexColor;
        let price = document.getElementsByTagName("table")[0].getElementsByClassName("hover-price");
        for (let i = 0; i < price.length; i++) {
          if(price[i].innerText === `$${highest}`){
            indexColor = i;
          } 
        }
        let table = document.getElementsByTagName("table")[0].children[0].children[0].children;
        let columnToChange = table[indexColor].getElementsByClassName('column-charts')[0];
        columnToChange.style.backgroundColor = "hsl(186, 34%, 60%)";
  } */

  _chartsCurrenDay(){
    let date = new Date();
    let table = document.getElementsByTagName("table")[0].children[0].children[0].children;
    let dateString = date.toDateString().toLowerCase().substring(0,3);
    for (let i = 0; i < table.length; i++) {
      if(table[i].getElementsByClassName('day')[0].innerText === dateString){
        let columnToChange = table[i].getElementsByClassName('column-charts')[0];
        columnToChange.style.backgroundColor = "hsl(186, 34%, 60%)";
      } 
    }  
  }

  _chartsGestion(data){
    let tableList = document.getElementsByTagName('table')[0].children[0].children[0].children;
    data.map((obj, index) =>{
      if(obj.day === tableList[index].getElementsByTagName('p')[0].innerHTML){        let newElement = tableList[index].getElementsByClassName('hover-price')[0].appendChild(document.createElement('p'))
        newElement.innerHTML = `$${obj.amount}`
      }
      return null
    })
    /* this._chartsHighestColor(data); */  
    this._chartsCurrenDay();
  }
  
  _chartGetPourcent(data){
    let value = [];
    let highestValue = 0;
    data.map((obj) =>{
      let val = obj.amount;
      value.push(obj)
      if(highestValue < val){
        highestValue = val
      }
        /* highestValue < val ? highestValue = val : console.log("oups"); */
      return null
    });
    highestValue = 100 / highestValue;
    this.setState({pourcentValue: highestValue}, ()=>{
      this._chartSize(data)})
  }

  _chartSize(data){
    data.map(obj =>{
      let table = document.getElementsByTagName("table")[0].children[0].children[0].children;
      for (let i = 0; i < table.length; i++) {
          if(table[i].getElementsByClassName("day")[0].innerHTML === obj.day){
            let column = table[i].getElementsByClassName('column-charts')[0];
            column.style.height = (this.state.pourcentValue * obj.amount)+'%';
          }
      }
      return null;
    })
  }

  componentDidMount(){
   this._chartsGestion(Data)
   this._chartGetPourcent(Data)

  }

  render(){
  return (
    <div id='mainDiv'>
      <div id='head'>
        <div>
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div id='mainBody'>
        <p className="body-title">Spending - Last 7 days</p>
        
        <table>
          <tbody>
            <tr className='main-tr'>
              <td className="main-td">
                <div className='div-column-charts'>
                  <div className="column-charts"></div>
                  <div className='hover-price'></div>
                </div>
                <div>
                  <p className="day">mon</p>
                </div>
              </td>
              <td className="main-td">
                <div className='div-column-charts'>
                  <div className="column-charts"></div>
                  <div className='hover-price'></div>
                </div>
                <div>
                  <p className="day">tue</p>
                </div>
              </td>
              <td className="main-td">
                <div className='div-column-charts'>
                  <div className="column-charts"></div>
                  <div className='hover-price'></div>
                </div>
                <div>
                  <p className="day">wed</p>
                </div>
              </td>
              <td className="main-td">
                <div className='div-column-charts'>
                  <div className="column-charts"></div>
                  <div className='hover-price'></div>
                </div>
                <div>
                  <p className="day">thu</p>
                </div>
              </td>
              <td className="main-td">
                <div className='div-column-charts'>
                  <div className="column-charts"></div>
                  <div className='hover-price'></div>
                </div>
                <div>
                  <p className="day">fri</p>
                </div>
              </td>
              <td className="main-td">
                <div className='div-column-charts'>
                  <div className="column-charts"></div>
                  <div className='hover-price'></div>
                </div>
                <div>
                  <p className="day">sat</p>
                </div>
              </td>
              <td className="main-td">
                <div className='div-column-charts'>
                  <div className="column-charts"></div>
                  <div className='hover-price'></div>
                </div>
                <div>
                  <p className="day">sun</p>
                </div>
              </td>
            </tr>
            </tbody>
        </table>

        <div id='footer-section'>
          <div>
            <p className="price-title">Total this month</p>
            <p id='price'>$478.33</p>
          </div>
          <div className="footer-right-section">
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  )
  }
}



export default App;
