
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import FilterRecipes from './FilterRecipes'

import Search from 'react-icons/lib/fa/search';
import HomeOutline from 'react-icons/lib/ti/home-outline';
import AttachMoney from 'react-icons/lib/md/attach-money'
import LocalRestaurant from 'react-icons/lib/md/local-restaurant'
import Message from 'react-icons/lib/md/message'
import RoomService from 'react-icons/lib/md/room-service'
// app.use(express.static(path.join(__dirname, 'src')))

import home from '../images/home.png';


export const Nav = () => (

  <div className='container-fluid'>
    <div className={'row', 'logo-display'}>

        <p className='col-2'><RoomService className='logo-food'/></p>
        <p className='col-2'><AttachMoney className='logo-money'/></p>
    </div>

    <ul className={'row','nav-display' } >

    <li className='col-xsm-3'>
      <Link activeClassName='active' to='/'>
      {/* <HomeOutline className='home'/> */}
      <img className='home' height='50'  src={home} alt='home'/>
    </Link>
    </li>

    <li className='col-xsm-3'>
      <Link activeClassName='active' to='/Contact'><Message className='contact'/></Link>
    </li>

    <li className='col-xsm-3'>
      <Link activeClassName='active' to='/FilterRecipes'><Search className='search'/></Link>
    </li>
  </ul>


</div>
)

export default Nav;
