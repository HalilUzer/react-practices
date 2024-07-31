import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import type { RootState } from '../config/reduxStore';
interface Props {
  allowedRoles: string[],
  children : ReactNode

}

export default function RequireAuth({ children, allowedRoles }: Props) {
  const user = useSelector((state: RootState) => state.user)

  return (
    user.isLoggedIn ?
      user.roles.find(role => allowedRoles.includes(role)) ?
        {children}
        : <Navigate to={'/unauthorized'} replace/>
      : <Navigate to={'/sign-in'} replace/>
  )
}
