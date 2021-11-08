import { Flex, Heading, Text } from '@chakra-ui/react'

const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    p={6}
  >
    <Heading fontSize="6vw">
      🌈
      <Text
        bgGradient="linear(to-r, #dc1fff, #03e1ff, #00ffa3)"
        bgClip="text"
        d="inline"
        margin="auto 0.2em auto 0.3em"
      >
        {title}
      </Text>
      🦄
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Density',
}

export default Hero