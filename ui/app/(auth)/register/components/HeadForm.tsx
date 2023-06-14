'use client'

import React from 'react'
import LogoIg from '@/app/image/Instagram_logo.svg.png'
import Image from 'next/image'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { FacebookFilled } from '@ant-design/icons'
import SocialButton from '../../components/authProvider/SocialButton'

const HeadForm = React.memo(() => {
  const handleSocialLogin = (user: any) => {
    console.log(user)
  }

  const handleSocialLoginFailure = (err: any) => {
    console.error(err)
  }

  return (
    <div className="flex flex-col justify-center items-center pb-3">
      <Image
        src={LogoIg}
        alt="instagram"
        width={175}
        className="mt-7 mb-3"
      />
      <h2 className="text-center text-base font-semibold text-neutral-500">
        Đăng ký để xem ảnh và video từ bạn bè. adsa
      </h2>
      <LoginSocialFacebook
        appId="213927741044041"
        onResolve={(res) => console.log(res)}
        onReject={(err) => console.log(err)}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
      {/* <button className="w-full text-white bg-blue-500 my-3 flex justify-center items-center rounded-lg py-1.5 px-4">
        <FacebookFilled className="mr-2" />
        <span className="text-sm">Đăng nhập bằng Facebook</span>
      </button> */}
      <div
        className="fb-login-button"
        data-width=""
        data-size=""
        data-button-type=""
        data-layout=""
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
      <div className="flex justify-between items-center">
        <div className="h-[1px] bg-[#dbdbdb] w-20"></div>
        <span className="mx-3.5 font-semibold text-sm text-[#737373]">HOẶC</span>
        <div className="h-[1px] bg-[#dbdbdb] w-20"></div>
      </div>
    </div>
  )
})

export default HeadForm
