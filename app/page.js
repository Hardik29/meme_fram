import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Sharuakh Khan" 
    },
    {
      label: "Salman Khan" 
    },
    {
      label: "Aamir Khan" 
    },
  ],
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bE-m4Taohm0RAxy-6eFc2txRiYUnDNs96A&usqp=CAU',

  //which api to call when we click next button
  post_url: 'https://meme-fram.vercel.app/api',
});

export const metadata = {
  title: 'Bollywod Frame',
  description: 'Bollywood Frame',
  openGraph: { 
    title: 'Bollywood Frame',
    description: 'Bollywood Frame',
    images: ['https://media.sproutsocial.com/uploads/meme-example.jpg'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>test</h1>
    </>
  );
}