import { useEffect, useState } from 'react'
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled';

import {
  Hero,
  Container,
  Main,
  DarkModeSwitch,
  CTA,
  Footer,
  TwitterLogo
} from '../components';


// Change this up to be your Twitter if you want.
const TWITTER_HANDLE = 'andreasbigger';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Index = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      // @ts-ignore
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');

          /*
          * The solana object gives us a function that will allow us to connect
          * directly with the user's wallet!
          */
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

    /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  const connectWallet = async () => {};

  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <ConnectWalletButton
      onClick={connectWallet}
    >
      Connect to Wallet
    </ConnectWalletButton>
  );

  // UseEffects
  useEffect(() => {
    window.addEventListener('load', async (event) => {
      await checkIfWalletIsConnected();
    });
  }, []);

  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Header>
          {/* <HeaderP>🖼 GIF Portal</HeaderP> */}
          <SubText>
            View your GIF collection in the metaverse ✨
          </SubText>
          {!walletAddress && renderNotConnectedContainer()}
        </Header>
        {/* <TwitterLogo twitter_link={TWITTER_LINK} twitter_handle={TWITTER_HANDLE} /> */}
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </Container>
  )
};

const ConnectWalletButton = styled.button`
  height: 45px;
  border: 0;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;

  background: -webkit-linear-gradient(left, #60c657, #35aee2);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
`;

const HeaderP = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const SubText = styled.p`
  font-size: 25px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: white;
`;

const Header = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export default Index
