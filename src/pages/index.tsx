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

const TEST_GIFS = [
	'https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp',
	'https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g',
	'https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g',
	'https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp'
]

// Change this up to be your Twitter if you want.
const TWITTER_HANDLE = 'andreasbigger';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Index = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [gifList, setGifList] = useState([]);

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
  const connectWallet = async () => {
    //@ts-ignore
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
};

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

  const renderConnectedContainer = () => (
    <ConnectedContainer>
      <ConnectedContainerRow>
        <ConnectedContainerInput
          type="text"
          placeholder="Enter gif link!"
          value={inputValue}
          onChange={onInputChange}
        />
        <ConnectedContainerButton onClick={sendGif}>Submit</ConnectedContainerButton>
      </ConnectedContainerRow>
      <GifGrid>
        {gifList.map(gif => (
          <GifItem key={gif}>
            <GifItemImage src={gif} alt={gif} />
          </GifItem>
        ))}
      </GifGrid>
    </ConnectedContainer>
  );

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const sendGif = async () => {
    if (inputValue.length > 0) {
      console.log('Gif link:', inputValue);
    } else {
      console.log('Empty input. Try again.');
    }
  };

  // UseEffects
  useEffect(() => {
    window.addEventListener('load', async (event) => {
      await checkIfWalletIsConnected();
    });
  }, []);

  useEffect(() => {
  if (walletAddress) {
    console.log('Fetching GIF list...');
    // Call Solana program here.

    // Set state
    setGifList(TEST_GIFS);
  }
}, [walletAddress]);

  return (
    <Container overflow={"scroll"} height="100vh">
      <Hero />
      <Main overflow={"scroll"}>
        <Header>
          {/* <HeaderP>🖼 GIF Portal</HeaderP> */}
          <SubText>
            View your GIF collection in the metaverse ✨
          </SubText>
          {!walletAddress && renderNotConnectedContainer()}
          {walletAddress && renderConnectedContainer()}
          {/* {walletAddress ? (<HeaderP>{walletAddress}</HeaderP>) : null} */}
        </Header>
        {/* <TwitterLogo twitter_link={TWITTER_LINK} twitter_handle={TWITTER_HANDLE} /> */}
      </Main>

      <DarkModeSwitch />
      <CTA />
    </Container>
  )
};

const ConnectedContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em auto 1em 0;
`;

const ConnectedContainer = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
  overflow: scroll;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const ConnectedContainerButton = styled.button`
  border: 0;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
  height: 50px;
  background: -webkit-linear-gradient(left, #4e44ce, #35aee2);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
  margin: auto 0 auto 0.5em;
`;

const ConnectedContainerInput = styled.input`
  display: inline-block;
  color: white;
  padding: 10px;
  width: 50%;
  font-size: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  min-width: 400px;
  margin: 0 0.5em;
`;

const GifItemImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

const GifItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-self: center;
  align-self: center;
  height: 100%;
`;

const GifGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 1.5rem;
  justify-items: center;
  margin: 0;
  padding: 0;
  overflow: scroll;
`;

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
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const Header = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 30px;
  overflow: scroll;
`;

export default Index
