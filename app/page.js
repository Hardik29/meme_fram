import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Next Jethalal Meme" 
    },
  ],
  image: 'https://tenor.com/btb7G.gif',

  //which api to call when we click next button
  post_url: 'https://meme-fram-tugf.vercel.app/api',
});

export const metadata = {
  title: 'Meme Frame',
  description: 'Mem Frame',
  openGraph: { 
    title: 'Meme Frame',
    description: 'Meme Frame',
    images: ['https://tenor.com/bHvGE.gif'],
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