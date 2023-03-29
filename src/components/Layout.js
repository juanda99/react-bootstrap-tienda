import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
export default function Layout() {
  return (
    <>
      <Menu />
      <Container fluid="md">
        {/* me renderice el componente de cada página */}
        <Outlet />
      </Container>
    </>
  )
}
