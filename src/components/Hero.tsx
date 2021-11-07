import { Flex, Heading } from '@chakra-ui/react'

const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    p={12}
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="6vw">🌈 {title} 🦄</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Solana Buildspace',
}

export default Hero