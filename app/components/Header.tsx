import { Navbar, Text, Button } from '@nextui-org/react';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Mi Aplicación
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="#">Inicio</Navbar.Link>
        <Navbar.Link href="#">Acerca de</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
        <Button auto flat color="primary">
          Registrarse
        </Button>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
