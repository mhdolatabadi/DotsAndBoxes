import React from 'react'
import Game from './game'
import Loading from './loading'
import { useSelector } from 'react-redux'
import { isLoadingView } from './_slice/loading.slice'

export default function Root() {
  const isLoading = useSelector(isLoadingView)

  return isLoading ? <Loading /> : <Game />
}
