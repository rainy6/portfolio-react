import { Box, Flex, Link, Button, useColorModeValue, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const NavLink = (props) => {
  const { children, link } = props;
  return (
    <Link px={2} py={1} rounded={'md'} _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={link}>
      {children}
    </Link>
  );
}

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Ryosei Portfolios</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <NavLink link="/">
                Home
              </NavLink>
              <NavLink link="techstack">
                Tech Stack
              </NavLink>
              <NavLink link="portfolio">
                Portfolio
              </NavLink>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}