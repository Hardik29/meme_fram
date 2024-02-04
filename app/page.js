import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Ethereum" 
    },
    {
      label: "Shardeum" 
    },
    {
      label: "Solana" 
    },
  ],
  image: 'https://drive.google.com/file/d/1c-zcMzH_5LOFElhYBq97LqOcmWhx56VV/view?usp=sharing',

  //which api to call when we click next button
  post_url: 'https://meme-fram-znqt.vercel.app/api',
});

export const metadata = {
  title: 'Bollywod Frame',
  description: 'Bollywood Frame',
  openGraph: { 
    title: 'Bollywood Frame',
    description: 'Bollywood Frame',
    images: ['https://drive.google.com/file/d/1c-zcMzH_5LOFElhYBq97LqOcmWhx56VV/view?usp=sharing'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>test1</h1>
    </>
  );
}