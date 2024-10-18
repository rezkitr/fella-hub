'use client'

import { COOKIES } from '@/utils/enum'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import logo from '../../../public/images/logo.webp'

interface IFormValues {
  email: string
  password: string
}

const SignInForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSignIn = (values: IFormValues) => {
    setIsLoading(true)
    Cookies.set(
      COOKIES.auth,
      JSON.stringify({
        email: values.email,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCjk',
      })
    )
    router.replace('/')
    reset()
  }

  return isLoading ? (
    <p>Please wait...</p>
  ) : (
    <div className="bg-blue-400 shadow-md rounded-lg p-6 w-full md:w-[500px] flex flex-col items-center gap-y-6 login-form">
      <Image src={logo} alt="logo" />
      <h3 className="font-semibold text-lg">
        Please sign in first to see the news!
      </h3>
      <form className="w-full" onSubmit={handleSubmit(onSignIn)}>
        <div className="flex flex-col gap-y-3">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required!',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Email is invalid!',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-300 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required!',
                minLength: {
                  value: 6,
                  message: 'Password at least 6 characters!',
                },
              })}
            />
            {errors.password && (
              <p className="text-red-300 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
