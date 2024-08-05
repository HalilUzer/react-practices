import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { Role } from '../features/user/userSlice';

interface Props {
  allowedRoles: Role[],
  children: ReactNode
}

export default function RequireAuth({ children, allowedRoles }: Props) {
  const user = useAppSelector((state) => state.user)

  console.log(user)
  return (
    user.isLoggedIn ?
      user.roles.find(role => allowedRoles.includes(role)) ?
        children
        : <Navigate to={'/unauthorized'} replace />
      : <Navigate to={'/sign-in'} replace />
  )
}
