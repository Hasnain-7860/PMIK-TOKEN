
interface BtnProps {
  className?: string
  btnName?: string
  onClick?: () => void
}

const Button = ({ className, btnName, onClick }: BtnProps) => {
  return (
    <button className={` ${className} `} onClick={onClick}>
      {btnName || 'Button'}
    </button>
  )
}


// border-radius: 82px;
// background: rgba(255, 255, 255, 0.10);

export default Button