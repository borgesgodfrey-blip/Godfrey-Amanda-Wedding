const cards = [
  ["25–28 JAN", "Wedding Week", "Everything happening around our celebration.", "Explore"],
  ["RESPOND", "RSVP", "We can't wait to celebrate with you.", "RSVP here"],
  ["DISCOVER", "Explore Goa", "Beaches, cafés, culture and corners of Goa we love.", "Discover"],
  ["PLAN", "Stay & Travel", "Hotels, getting around and useful travel notes.", "Plan"]
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wash one" /><div className="wash two" />
        <div className="botanical botanicalLeft">❧</div>
        <div className="botanical botanicalRight">❧</div>
        <div className="monogram">G <i>&</i> A</div>
        <p className="eyebrow">TOGETHER WITH OUR FAMILIES</p>
        <h1>Godfrey <em>&</em><br className="mobileBreak"/> Amanda</h1>
        <p className="date">28 · JANUARY · 2027</p>
        <p className="place">Goa, India</p>
        <div className="rule"><span>✦</span></div>
        <p className="welcome">Come celebrate love, laughter and a little bit of Goa with us.</p>
        <a className="primary" href="#invitation">Open our invitation</a>
        <div className="scroll">⌄</div>
      </section>

      <section className="intro" id="invitation">
        <p className="script">You&apos;re invited</p>
        <h2>A little piece of Goa,<br/>with all our favourite people.</h2>
        <p>We made this space to keep everything for our wedding in one beautiful place — the celebrations, travel notes, places we love and, most importantly, your RSVP.</p>
      </section>

      <section className="cards">
        {cards.map(([label,title,text,action],i) => (
          <article className={"card card"+(i+1)} id={title==="RSVP" ? "rsvp" : undefined} key={title}>
            <span className="number">0{i+1}</span>
            <div>
              <small>{label}</small>
              <h3>{title}</h3>
              <p>{text}</p>
              <button>{action} <b>→</b></button>
            </div>
          </article>
        ))}
      </section>

      <section className="day">
        <p className="script">The wedding day</p>
        <h2>Thursday · 28 January</h2>
        <div className="event">
          <span>11:00 AM</span><div><h3>Nuptial Mass</h3><p>St. Christopher&apos;s Church · Tivim</p></div>
        </div>
        <div className="event">
          <span>EVENING</span><div><h3>Reception</h3><p>Riverbanks · Siolim</p></div>
        </div>
        <p className="note">Full timings, directions and guest-specific details will appear in your private invitation.</p>
      </section>

      <section className="quote">
        <div className="lemon">🍋</div>
        <p>“And now these three remain: faith, hope and love.<br/>But the greatest of these is love.”</p>
        <span>1 CORINTHIANS 13:13</span>
      </section>

      <footer>
        <div className="mini">G <i>&</i> A</div>
        <p>28 January 2027 · Goa</p>
        <small>Made with love for our favourite people.</small>
      </footer>

      <nav>
        <a href="#"><b>⌂</b><span>Home</span></a>
        <a href="#rsvp"><b>♡</b><span>RSVP</span></a>
        <a href="#invitation"><b>⌖</b><span>Goa</span></a>
        <a href="#invitation"><b>☰</b><span>More</span></a>
      </nav>
    </main>
  );
}
