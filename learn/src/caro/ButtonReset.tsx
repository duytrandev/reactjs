interface Props {
  handleReset: () => void
}

const ButtonReset = ({handleReset}: Props) => {
  return (
    <button className='btn--reset' onClick={handleReset}>
      Reset game
    </button>
  )
}

export default ButtonReset
