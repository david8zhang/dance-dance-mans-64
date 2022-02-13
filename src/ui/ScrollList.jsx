import { Constants } from '~/util/Constants'

export const ScrollList = (data) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: `${Constants.GAME_HEIGHT}px`,
        scrollbarWidth: 'none',
        color: 'white',
      }}
    >
      {data.map((d) => {
        return <p style={{ cursor: 'pointer', userSelect: 'none' }}>{d.name}</p>
      })}
    </div>
  )
}
