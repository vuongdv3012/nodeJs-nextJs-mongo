'use client'

import React from 'react'
import { HeadForm, FormRegister } from './components'

const Register = React.memo(() => {
  return (
    <React.Fragment>
      <div className="mx-auto px-10 box-border h-auto w-80 border-2 mt-3">
        <HeadForm />
        <FormRegister />
      </div>
    </React.Fragment>
  )
})

export default Register
