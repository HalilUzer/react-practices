import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../config/reduxStore';
import { useAppSelector } from '../hooks/reduxHooks';

interface Props {
  allowedRoles: string[],
  children : ReactNode
}

export default function RequireAuth({ children, allowedRoles } : Props) {
  const user = useAppSelector((state) => state.user)

  return (
    user.isLoggedIn ?
      user.roles.find(role => allowedRoles.includes(role)) ?
        children
        : <Navigate to={'/unauthorized'} replace/>
      : <Navigate to={'/sign-in'} replace/>
  )
}
