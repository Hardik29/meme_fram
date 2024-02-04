import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK57_SCZywuKk0eUdw4At9AYNHuo6v21TvF-N3Zn_q6hP1NJoNyc-qNQJjcFPiab-HpnE&usqp=CAU" /> 
  <meta property="fc:frame:button:1" content="Ethereum" /> 
  </head></html>`);
}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';