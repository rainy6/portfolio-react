import { Box, ChakraProvider } from "@chakra-ui/react"
import Header from "../organisms/Header"

export const ChakraLayout = (props) => {
    const { children } = props;
    return (
        <ChakraProvider>
            <Header/>
            <Box w={800} pt={20} pb={20} m={'auto'}>
                {children}
            </Box>
        </ChakraProvider>
    )
}