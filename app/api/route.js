import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/10/aamir-khan-was-once-told-salman-khan-wanted-to-tie-him-so-that-he-wouldnt-get-married-for-the-third-time-he-sheepishly-agreed-01.jpg" /> 
  <meta property="fc:frame:button:1" content="Bollywood is best 😁" /> 
  </head></html>`);
}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';