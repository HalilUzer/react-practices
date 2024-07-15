import React from 'react'
import useAuth from '../hooks/useAuth'
import { useLocation } from 'react-router-dom';

interface Props {
  allowedRoles: string[]
}

export default function RequireAuth({ allowedRoles }: Props) {


  const location = useLocation()

  return (
    
  )
}
