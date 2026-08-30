import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

const classes = {
  common:{name:'COMMON',color:'#7dff5b',speed:'33.4 MH/s',freq:'1443 MHz',temp:'56.2°C',power:40,bonus:0,vram:'8 / 12 GB',hash:'32 MH/s',clock:'1450 MHz'},
  uncommon:{name:'UNCOMMON',color:'#2de6ff',speed:'48.4 MH/s',freq:'1568 MHz',temp:'61.0°C',power:52,bonus:8,vram:'10 / 16 GB',hash:'48 MH/s',clock:'1600 MHz'},
  rare:{name:'RARE',color:'#d65cff',speed:'69.9 MH/s',freq:'1790 MHz',temp:'66.4°C',power:65,bonus:15,vram:'16 / 24 GB',hash:'70 MH/s',clock:'1800 MHz'},
  legendary:{name:'LEGENDARY',color:'#ffd34d',speed:'115.7 MH/s',freq:'2104 MHz',temp:'74.1°C',power:88,bonus:28,vram:'24 / 48 GB',hash:'120 MH/s',clock:'2100 MHz'}
};

function GPU({type, large=false}) {
  const c=classes[type];
  return <div className={`gpu ${large?'large':''}`} style={{'--gpu':c.color}}>
    <div className="gpu-fan fan1"><i/><i/><i/><i/><i/><i/></div>
    <div className="gpu-fan fan2"><i/><i/><i/><i/><i/><i/></div>
    <div className="gpu-shroud"><span>VRAM</span><b>MINER</b></div>
    <div className="gpu-bracket"/><div className="gpu-led"/>
  </div>
}

export default function App(){
  const [boot,setBoot]=useState(true), [page,setPage]=useState('MINER'), [wallet,setWallet]=useState(''), [selected,setSelected]=useState('common'), [seconds,setSeconds]=useState(300), [menu,setMenu]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setBoot(false),2400); return()=>clearTimeout(t)},[]);
  useEffect(()=>{const t=setInterval(()=>setSeconds(s=>s<=0?300:s-1),1000);return()=>clearInterval(t)},[]);
  const connect=async()=>{if(!window.ethereum){alert('No browser wallet detected. Install a Web3 wallet such as MetaMask.');return} try{const a=await window.ethereum.request({method:'eth_requestAccounts'});setWallet(a?.[0]||'')}catch(e){}};
  const go=p=>{setPage(p);setMenu(false);window.scrollTo({top:0,behavior:'smooth'})};
  const time=useMemo(()=>`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`,[seconds]);
  if(boot) return <div className="boot"><div className="boot-logo">VRAM MINER OS</div><div className="boot-lines"><span>INITIALIZING...</span><span>LOADING GPU DRIVERS........ OK</span><span>SYNCING BLOCKCHAIN........ OK</span><span>STARTING MINING KERNEL.... OK</span><span>READY.</span></div><button onClick={()=>setBoot(false)}>SKIP BOOT</button></div>;
  return <div className="site">
    <div className="topline">ROBINHOOD MAINNET / CHAIN ID 4663</div>
    <div className="ticker"><div>$VRAM TRADING LIVE ON BONDING CURVE — LAUNCHPAD · MINE ON /MINE TO EARN CREDITS · REDEEMABLE ONCE REDEMPTION OPENS&nbsp;&nbsp;&nbsp;</div></div>
    <header><button className="brand" onClick={()=>go('MINER')}>VRAM·MINER</button><nav>{['MINER','MINT','$VRAM','MINE','COLLECTION','DOCS'].map(x=><button className={page===x?'active':''} key={x} onClick={()=>go(x)}>{x}</button>)}</nav><button className="wallet" onClick={connect}>{wallet?wallet.slice(0,6)+'…'+wallet.slice(-4):'CONNECT WALLET'}</button><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button></header>
    {menu&&<div className="mobile-nav">{['MINER','MINT','$VRAM','MINE','COLLECTION','DOCS'].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</div>}
    <main>
      {page==='MINER'&&<>
        <section className="hero"><div className="eyebrow">VRAM MINER OS v1.0</div><h1>VRAM<br/><em>MINER</em></h1><p>BUILD YOUR RIG.<br/>POWER YOUR VRAM.<br/>MINE YOUR PIXELS.</p><div className="hero-copy">5,090 pixel-powered mining machines built for an onchain computing universe. Every NFT is a working piece of mining hardware — not a static collectible.</div><div className="actions"><button className="primary" onClick={()=>go('MINT')}>MINT A MINER ↗</button><button className="ghost" onClick={()=>document.getElementById('hardware').scrollIntoView({behavior:'smooth'})}>VIEW SPECS</button></div></section>
        <section className="stats"><div><small>TOTAL MINERS</small><b>5,090</b></div><div><small>PAID MINT</small><b>0.0005090 ETH</b></div><div><small>FREE MINT</small><b>EVERY 5 MINUTES</b></div><div><small>MAX / WALLET</small><b>15</b></div></section>
        <section id="hardware" className="hardware"><div className="section-head"><span>HARDWARE CLASSES</span><span>01 / 02</span></div><div className="class-grid">{Object.keys(classes).map(k=><button key={k} className={selected===k?'selected':''} onClick={()=>setSelected(k)}><GPU type={k}/><strong>{classes[k].name}</strong></button>)}</div></section>
        <section className="os-panel"><div className="terminal-head">VRAM_MINER_OS v1.0 <span>● ONLINE</span></div><div className="terminal-body"><div className="prompt">&gt;_</div><div><small>01</small><h2>YOUR NFT IS<br/>YOUR HARDWARE.</h2><p>Each VRAM MINER carries its own VRAM capacity, mining power, hash rate and 8 hardware traits. Power it on, keep it cool, and it generates Mining Credits — a gameplay and progression utility, never a financial return.</p></div><div className="feature-gpu"><GPU type={selected} large/><div className="gpu-label">{classes[selected].name}</div></div><div className="telemetry"><b>SPEED <i>{classes[selected].speed}</i></b><b>FREQ <i>{classes[selected].freq}</i></b><b>TEMP <i>{classes[selected].temp}</i></b></div><div className="specs"><b>BASE POWER <i>{classes[selected].power}</i></b><b>RARITY BONUS <i>+{classes[selected].bonus}</i></b><b>VRAM <i>{classes[selected].vram}</i></b><b>HASH RATE <i>{classes[selected].hash}</i></b><b>CORE CLOCK <i>{classes[selected].clock}</i></b><b>TEMP <i>{classes[selected].temp}</i></b></div></div></section>
        <section className="drop"><div><span>FREE MINING DROP</span><h2>ONE SLOT.<br/>EVERY FIVE MINUTES.</h2><p>One shared slot for the whole collection — whoever claims first wins it, then a fresh 5-minute window opens. Each wallet can win at most once, ever.</p></div><div className="count"><small>COOLDOWN ACTIVE</small><strong>{time}</strong><em>ONE FREE MINER, LIFETIME CAP OF ONE PER WALLET</em><button onClick={connect}>CONNECT WALLET</button></div></section>
        <section className="network"><div><span>MINING NETWORK</span><h2>NO ONCHAIN EVENTS YET.</h2><p>Live onchain mining events appear here once the contracts are connected.</p></div><div className="dots">○ ○ ○ ○ ○<br/><small>WAITING FOR NETWORK TELEMETRY</small></div></section>
        <section className="status"><div className="section-head"><span>02 / ONCHAIN STATUS</span><span>LIVE PROTOCOL DATA</span></div><p>Supply, price, cooldown and wallet limits are enforced by the contract. Numbers below come from protocol configuration; live telemetry appears once the contract address is set.</p><div className="status-grid"><b>NETWORK <i>ROBINHOOD MAINNET</i></b><b>CHAIN ID <i>4663</i></b><b>SUPPLY <i>— / 5,090</i></b><b>MINT PRICE <i>0.0005090 ETH</i></b><b>FREE MINT <i>EVERY 300 SEC</i></b><b>RIG RATE <i>+0 CR/HR</i></b></div><code>NFT CONTRACT: 0xf8b7ec0dc101d16f68f7942ea5e41a2a3698f172</code></section>
      </>}
      {page==='MINT'&&<section className="subpage"><span>MINTER TERMINAL</span><h1>MINT<br/><em>A MINER</em></h1><p>Connect a wallet to prepare your mint. The interface is ready for the real contract ABI/function to be wired in.</p><button className="primary" onClick={connect}>{wallet?'WALLET CONNECTED':'CONNECT WALLET'}</button></section>}
      {page==='$VRAM'&&<section className="subpage"><span>$VRAM TERMINAL</span><h1>TRADING<br/><em>LIVE.</em></h1><p>$VRAM is shown here as the project token information surface. Replace these links with the project's official token destinations.</p></section>}
      {page==='MINE'&&<section className="subpage"><span>MINING CONSOLE</span><h1>MINE<br/><em>YOUR PIXELS.</em></h1><p>Mining telemetry will appear here once the mining contract is connected.</p></section>}
      {page==='COLLECTION'&&<section className="subpage"><span>COLLECTION</span><h1>YOUR<br/><em>HARDWARE.</em></h1><p>Connect your wallet to load owned VRAM MINER NFTs.</p><button className="primary" onClick={connect}>CONNECT WALLET</button></section>}
      {page==='DOCS'&&<section className="subpage"><span>PROTOCOL DOCS</span><h1>READ THE<br/><em>PROTOCOL.</em></h1><p>Supply 5,090 · Chain ID 4663 · Paid mint 0.0005090 ETH · Free mint every 300 seconds · Max wallet 15.</p></section>}
    </main>
    <footer><div><b>VRAM MINER</b><p>5,090 PIXEL MINING MACHINES<br/>POWER YOUR RIG. MINE YOUR PIXELS.</p></div><div className="footer-links"><a href="https://x.com" target="_blank">X</a><a href="https://opensea.io" target="_blank">OPENSEA</a><a href="https://robinhoodchain.blockscout.com" target="_blank">EXPLORER</a></div><small>NFT CONTRACT: 0xf8b7ec0dc101d16f68f7942ea5e41a2a3698f172<br/>BUILT ON ROBINHOOD MAINNET<br/><br/>Not affiliated with, endorsed by, or operated by Robinhood. Mining Credits are a gameplay and progression utility — not an investment, yield, or income product.</small></footer>
    <div className="mobile-bottom">{['MINER','MINT','$VRAM','MINE'].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</div>
  </div>
}
