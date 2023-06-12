import React, { Fragment } from 'react'
import {Route, Routes } from 'react-router'
import Home from '../component/Home'

export default function Approute() {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Fragment>
  )
}
