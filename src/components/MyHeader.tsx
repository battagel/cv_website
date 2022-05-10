import { Header } from '@mantine/core'  
import ThemeButton from './ThemeButton'

export default function MyHeader() {

  return (
    <Header height={70} p="md">
      <ThemeButton/>
    </Header>
  )
}
