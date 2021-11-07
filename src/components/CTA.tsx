import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './'

const CTA = () => (
  <Container
    flexDirection="row"
    width="100%"
    maxWidth="48rem"
    justifyContent="center"
    py={3}
  >
    <ChakraLink isExternal href="https://twitter.com/andreasbigger" mx={2}>
      <Button width="100%" variant="outline" colorScheme="blue">
        Andreas Bigger
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/abigger87/solana-buildspace"
      mx={2}
    >
      <Button width="100%" variant="outline" colorScheme="green">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
)

export default CTA