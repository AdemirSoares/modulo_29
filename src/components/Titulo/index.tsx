import { Titulo as TibuloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TibuloEstilo fontSize={props.fontSize}>{props.children}</TibuloEstilo>
)

export default Titulo
