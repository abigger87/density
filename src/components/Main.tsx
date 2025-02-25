import { Stack, StackProps } from '@chakra-ui/react'

const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    // maxWidth="48rem"
    // pt="8rem"
    flexGrow={1}
    px="1rem"
    {...props}
  />
)

export default Main