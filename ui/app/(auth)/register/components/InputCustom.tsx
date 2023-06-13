'use client'
import React from 'react'
import { Input } from 'antd'
import classNames from 'classnames'

interface InputCustomProps {
  isValue: number | ''
  value: string
  label: string
  type: string
  handleChange: (key: string, value: string) => void
}

const InputCustom = React.memo(
  ({ isValue, value, handleChange, label, type }: InputCustomProps) => {
    const [isShowPass, setIsShowPass] = React.useState<boolean>(false)

    return (
      <div className="relative">
        <span
          className={classNames('absolute z-10 text-xs pointer-events-none left-3 text-[#737373]', {
            'text-[10px] top-1 ': isValue,
            'top-2.5 ': !isValue,
          })}
        >
          {label}
        </span>
        <Input
          className={classNames(
            'rounded-sm h-9 mb-2 bg-[#fafafa] text-xs overflow-hidden text-ellipsis',
            {
              'pt-[18px]': isValue,
            }
          )}
          maxLength={32}
          type={!isShowPass && type === 'password' ? 'password' : 'text'}
          value={value}
          onChange={(e) => {
            handleChange(type, e.target.value)
          }}
        />
        {type === 'password' && (
          <button
            className="absolute z-10 text-sm right-2 top-2"
            onClick={() => setIsShowPass((prev) => !prev)}
          >
            {isShowPass ? 'Ẩn' : 'Hiển thị'}
          </button>
        )}
      </div>
    )
  }
)

export default InputCustom
