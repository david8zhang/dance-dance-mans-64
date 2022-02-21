import { Constants } from '~/util/Constants'

export const ScrollList = (data) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        overflowY: 'scroll',
        padding: '20px',
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
