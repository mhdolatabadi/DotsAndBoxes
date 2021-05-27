import * as React from 'react'
// style
import useStyle from './rectangle.style'
// localiztion
import t from './rectangle.local'
import {
  addNewLine,
  elementColorView,
  getPlayerHasPermission,
  increaseOpponentScore,
  increasePlayerScore,
  playerColorView,
} from '../../scenes/_slice/game.slice'
import { useSelector } from 'react-redux'
import { requestGift, sendBouns } from '../../services/backend/backend.service'
import { dispatch } from '../../setup/store/store'

export default function Rectangle({ i, j, lastMove }) {
  const classes = useStyle()
  let lastLineColor
  const { i: lastI, j: lastJ, color: lastColor } = lastMove

  //TODO check wether rectangle is colored
  const playerHasPermission = useSelector(getPlayerHasPermission)
  const playerColor = useSelector(playerColorView)
  const topLineColor = useSelector(elementColorView(i - 1, j))
  const rightLineColor = useSelector(elementColorView(i, j + 1))
  const leftLineColor = useSelector(elementColorView(i, j - 1))
  const downLineColor = useSelector(elementColorView(i + 1, j))
  const background = useSelector(elementColorView(i, j))

  if (i - 1 === lastI && j === lastJ) lastLineColor = topLineColor || ''
  if (i + 1 === lastI && j === lastJ) lastLineColor = downLineColor || ''
  if (i === lastI && j - 1 === lastJ) lastLineColor = leftLineColor || ''
  if (i === lastI && j + 1 === lastJ) lastLineColor = rightLineColor || ''

  const backgroundColor = background
    ? background
    : !!topLineColor && !!rightLineColor && !!leftLineColor && !!downLineColor
    ? lastLineColor
    : ''
  if (!background && backgroundColor) {
    console.log({ backgroundColor })
    dispatch(addNewLine({ i, j, color: backgroundColor }))
  }
  if (
    ((i - 1 === lastI && j === lastJ) ||
      (i + 1 === lastI && j === lastJ) ||
      (i === lastI && j - 1 === lastJ) ||
      (i === lastI && j + 1 === lastJ)) &&
    !background &&
    !!topLineColor &&
    !!rightLineColor &&
    !!leftLineColor &&
    !!downLineColor &&
    !playerHasPermission
  ) {
    console.log({ playerColor, lastColor, background })
    if (playerColor === lastColor) {
      dispatch(increasePlayerScore())
      sendBouns(i, j, playerColor)
    } else dispatch(increaseOpponentScore())
  }
  return (
    <div
      className={classes.root}
      style={{
        gridColumn: `${j - 1} / ${j + 2}`,
        gridRow: `${i - 1} / ${i + 2}`,
        backgroundColor: `dark${backgroundColor}`,
      }}
    >
      <span></span>
    </div>
  )
}
