import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentItem = topic => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p> { topic } </p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Tanaka Kenny</h2>
            <h4>tanaka.kenny@mail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,500</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('angular')}
            {recentItem('hackathon')}
            {recentItem('developer')}
            {recentItem('softwareengineering')}
        </div>
    </div>
  )
}

export default Sidebar