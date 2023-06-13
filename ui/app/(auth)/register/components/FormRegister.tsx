'use client'

import React from 'react'
import { FormSubmitInterface } from '../@type/formSubmit'
import InputCustom from './InputCustom'

const FormRegister = React.memo(() => {
  const [dataSubmit, setDataSubmit] = React.useState<FormSubmitInterface>({
    emailOrNumber: '',
    fullName: '',
    password: '',
    userName: '',
  })

  const handleChangeDataSubmit = (key: string, value: string) => {
    setDataSubmit((prev) => ({ ...prev, [key]: value }))
  }

  const isValueEmail = React.useMemo(() => {
    return dataSubmit.emailOrNumber && dataSubmit.emailOrNumber.length
  }, [dataSubmit.emailOrNumber])

  const isValueFullName = React.useMemo(() => {
    return dataSubmit.fullName && dataSubmit.fullName.length
  }, [dataSubmit.fullName])

  const isValuePassword = React.useMemo(() => {
    return dataSubmit.password && dataSubmit.password.length
  }, [dataSubmit.password])

  const isValueUserName = React.useMemo(() => {
    return dataSubmit.userName && dataSubmit.userName.length
  }, [dataSubmit.userName])

  return (
    <div className="flex flex-col">
      <InputCustom
        handleChange={handleChangeDataSubmit}
        isValue={isValueEmail}
        label="Số di động hoặc email"
        value={dataSubmit.emailOrNumber}
        type="emailOrNumber"
      />
      <InputCustom
        handleChange={handleChangeDataSubmit}
        isValue={isValueFullName}
        label="Tên đầy đủ"
        value={dataSubmit.fullName}
        type="fullName"
      />
      <InputCustom
        handleChange={handleChangeDataSubmit}
        isValue={isValueUserName}
        label="Tên người dùng"
        value={dataSubmit.userName}
        type="userName"
      />
      <InputCustom
        handleChange={handleChangeDataSubmit}
        isValue={isValuePassword}
        label="Mật khẩu"
        value={dataSubmit.password}
        type="password"
      />
      <button className="w-full bg-blue-400 text-white rounded-lg py-1.5 px-4 my-3">
        Đăng kí{' '}
      </button>
    </div>
  )
})

export default FormRegister
