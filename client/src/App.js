import React, { Component } from 'react';

const Line = () => (
  <div style={{borderBottom:"solid 1px grey", width: "30%", float:"left"}}/>
  )

const TitleSection = (props) => (
  <div style={{display:"table", width:"100%"}}>
    <Line/>
    <div style={{width: "40%", float:"left"}}> {props.texto1} {props.texto2}</div>
    <Line/>
  </div>
  )

export default class Aula extends Component {

  state = {
    dia:"quinta-feira",
    semana: ""
  }

  sarava = (event) => {
    console.log(event)
    this.setState({
      dia:event.target.value,
      semana: this.state.dia
    })
  }

  render() {
    return (
      <div>
        <TitleSection texto1="Top Ofertas da " texto2="semana Maluca"/>
        <TitleSection texto1="s" texto2="2"/>
        <br/>
        <br/>
        <input onChange={this.sarava}/>
        <br/>
        {this.state.dia} 
        <br/>
        {this.state.semana}
      </div> 
    );
  }
}