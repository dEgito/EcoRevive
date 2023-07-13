import { Button } from "./style"

function Button({type, children}) {
  return (
    <Button type={type}>{children}</Button>
  )
}

export default Button;