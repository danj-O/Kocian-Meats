import React, { Component } from 'react'
import SideDrawer from './SideDrawer/SideDrawer'
import BackDrop from './BackDrop/BackDrop'
import Header from '../components/Header'


export default class Navigation extends Component {
  state = {
    sideDrawerOpen: false
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState)=>  {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    console.log('HEEERRRRREEEEEEEE', this.state.sideDrawerOpen)
    let backDrop;
    if (this.state.sideDrawerOpen){
        backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
      </div>
    )
  }
}
