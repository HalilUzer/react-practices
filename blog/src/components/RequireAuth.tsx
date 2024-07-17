import React from 'react'
import useAuth from '../hooks/useAuth'
import { useLocation } from 'react-router-dom';
import { useGetPostQuery } from '../features/posts/postApi';
import { useSignInQuery } from '../features/user/userApi';

interface Props {
  allowedRoles: string[]
}

export default function RequireAuth({ allowedRoles }: Props) {
  const location = useLocation()
  

  return (
    <div></div>
  )
}
