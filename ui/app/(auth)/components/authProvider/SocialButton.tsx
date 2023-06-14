'use client'
import React from 'react'
import SocialLogin from 'react-social-login'

interface SocialButtonProps {
  children: React.ReactNode
  triggerLogin: any
}

class SocialButton extends React.Component {
  render() {
    const { children, triggerLogin, ...props } = this.props
    return (
      <button
        onClick={triggerLogin}
        {...props}
      >
        {children}
      </button>
    )
  }
}

export default SocialLogin(SocialButton)
