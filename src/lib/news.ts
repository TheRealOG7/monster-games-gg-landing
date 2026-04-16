export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  body: string;
};

export const articles: NewsArticle[] = [
  {
    slug: "monster-x-black-ops-7",
    title: "Monster Energy x Call of Duty: Black Ops 7 — The Campaign Is Live",
    category: "Campaign",
    date: "April 16, 2026",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=90",
    excerpt:
      "Monster Energy has partnered with Activision to bring the Fuel the Grind campaign to GAMES.GG. Play Black Ops 7, verify your hours, and win a custom Monster Gaming PC.",
    body: `<p>Monster Energy and Call of Duty have run campaigns together for years. Cans with codes, in-game drops, limited edition colorways. This time, the campaign lives on GAMES.GG and the prize is bigger than anything that has come before it.</p>
<p>The Fuel the Grind quest is now live. Connect your Steam account, verify your Call of Duty hours, and complete all five missions to enter the Monster Gaming PC raffle. One winner takes home a custom-built rig: RTX 4080, 32GB RAM, 2TB NVMe SSD, 240Hz monitor, mechanical keyboard and mouse, all wrapped in Monster Energy's signature black and green.</p>
<h2>How the Quest Works</h2>
<p>Head to your GAMES.GG profile and connect your Steam account. The platform reads your public playtime directly from Steam's API. No screenshots, no manual entry. Once 10 hours in Call of Duty are verified, your quest missions unlock.</p>
<p>Complete all five missions before August 31, 2026 to enter the raffle. Every completed mission earns XP and counts toward your GAMES.GG profile. The top grinders also unlock an exclusive Monster Energy operator skin for Black Ops 7.</p>
<h2>More Campaigns Coming</h2>
<p>This is just the first campaign in an ongoing partnership between Monster Energy and GAMES.GG. More titles, more quests, more prizes. Follow Monster Energy on GAMES.GG to get notified when the next campaign drops.</p>`,
  },
  {
    slug: "monster-operator-skin",
    title: "The Monster Energy Operator Skin for Black Ops 7",
    category: "In-Game",
    date: "April 16, 2026",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1600&q=90",
    excerpt:
      "Complete the Fuel the Grind quest and unlock the Monster Energy operator skin for Call of Duty: Black Ops 7. Here is what the skin includes and how to claim it.",
    body: `<p>Monster Energy operator skins in Call of Duty are not new. Past campaigns have featured branded bundles, weapon blueprints, and loading screens tied to physical can purchases. The Black Ops 7 skin takes a different approach: you earn it by playing, not buying.</p>
<h2>What the Skin Includes</h2>
<p>The Monster Energy operator bundle for Black Ops 7 includes a full operator skin in Monster's signature matte black and neon green, a matching weapon blueprint for the default assault rifle, a calling card, and a Monster Energy emblem for your profile. The design is built around the claw mark, three diagonal slashes across the operator's chest piece, glowing green under UV light effects.</p>
<h2>How to Claim It</h2>
<p>Complete the Fuel the Grind quest on GAMES.GG. Once all five missions are verified, a claim code is sent to your registered email. Redeem the code in the Call of Duty store under the Redeem section. The bundle appears in your locker within 24 hours.</p>
<p>The skin is exclusive to this campaign. It will not be available in the regular store rotation.</p>
<h2>Design Notes</h2>
<p>The operator is built on the Spectre base model with custom texture work. The claw marks are rendered as physical damage on the armor, not a decal. Night vision goggles are pushed up with a Monster Energy can holstered on the hip. It is subtle enough to not look like a walking billboard and bold enough to be recognizable in killcam footage.</p>`,
  },
  {
    slug: "cod-champs-series",
    title: "Monster Energy at the COD Championship Series — What to Watch",
    category: "Esports",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&q=90",
    excerpt:
      "Monster Energy is an official partner of the Call of Duty Championship Series. Here is the schedule, the teams to watch, and how GAMES.GG fits in.",
    body: `<p>Monster Energy has been an official partner of competitive Call of Duty for several seasons. The branding is everywhere at CDL events: rink-side banners, player stations, the energy coolers visible in player cams during breaks. This season they go further.</p>
<h2>The Schedule</h2>
<p>The CDL Major III kicks off in May in Dallas. Eight teams compete across three days for a combined prize pool of $500,000. Monster Energy-branded content runs across the official broadcast, including player segments and a halftime challenge segment where pros go head-to-head in a custom Monster-themed map variant.</p>
<h2>Teams to Watch</h2>
<p>OpTic Texas comes in as the defending champion after their dominant run at Major II. Atlanta FaZe have rebuilt their roster around a younger core that has looked sharp in scrims. LA Thieves are the outside bet, they finished fourth in the regular season but have historically over-performed at LAN events.</p>
<h2>GAMES.GG Coverage</h2>
<p>GAMES.GG is covering the event live. Follow the Monster Energy page on GAMES.GG for real-time updates, match recaps, and player interviews. Players who complete the Fuel the Grind quest before the event get early access to the broadcast recap content.</p>`,
  },
  {
    slug: "ultra-watermelon-drop",
    title: "New Drop: Monster Energy Ultra Watermelon Is Here",
    category: "Product",
    date: "April 5, 2026",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=1600&q=90",
    excerpt:
      "Monster Energy Ultra Watermelon joins the lineup. Zero sugar, 150mg caffeine, and a taste profile built for the summer grind session.",
    body: `<p>The Ultra lineup just got louder. Monster Energy Ultra Watermelon is now available. Zero sugar, 150mg of caffeine, and a clean watermelon finish that does not taste like candy. It is closer to actual watermelon juice than any energy drink equivalent has managed before.</p>
<h2>The Lineup So Far</h2>
<p>Ultra White was first, citrus and light, the one that converted people who said they did not like energy drinks. Ultra Sunrise added orange. Ultra Paradise went tropical. Ultra Gold chased mango. Watermelon fills the gap between sweet and refreshing that the lineup was missing.</p>
<h2>What Is in the Can</h2>
<p>Standard Monster Energy formula: 150mg caffeine per 16oz can, B-vitamins (B2, B3, B6, B12), taurine, and ginseng. Ultra Watermelon comes in at 10 calories per can. The carbonation level is slightly lower than the original green, which makes it easier to drink quickly without the aggressive fizz.</p>
<h2>In the Prize Pool</h2>
<p>Ultra Watermelon is included in the Fuel the Grind prize pool. Quest completers who do not win the gaming PC are still entered into weekly draws for 24-can variety packs that include Watermelon alongside Original, Ultra White, and Pipeline Punch. The variety pack is also available as a secondary prize in the Monster Marathon quest.</p>`,
  },
  {
    slug: "connect-steam-guide",
    title: "How to Connect Your Steam Account to GAMES.GG",
    category: "Guide",
    date: "April 16, 2026",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1600&q=90",
    excerpt:
      "Connecting your Steam profile unlocks hour verification for the Monster Energy quests. Here is how to do it in under two minutes.",
    body: `<p>Completing the Fuel the Grind quest requires connecting your Steam profile to GAMES.GG. This lets the platform verify your Call of Duty playtime directly from Steam's public API. Here is how to do it.</p>
<h2>Step 1: Make Your Steam Profile Public</h2>
<p>Go to your Steam profile page. Click Edit Profile, then Privacy Settings. Set Game Details to Public. This is required for any third-party platform to read your playtime. You can set it back to private after the quest verification completes if you prefer.</p>
<h2>Step 2: Connect in GAMES.GG Settings</h2>
<p>Log into your GAMES.GG account. Go to Settings, then Connected Accounts. Click Connect Steam. You will be redirected to Steam's OpenID login, enter your Steam credentials there and approve the connection. GAMES.GG only reads your public profile data: username, playtime, and owned games. It does not have access to your wallet, friends list, or account security settings.</p>
<h2>Step 3: Verify Your Hours</h2>
<p>After connecting, head back to the Fuel the Grind quest page. Click Verify Hours. The platform checks your public Call of Duty playtime in real time. If you have 10 or more hours logged, the mission completes immediately and 100 XP is added to your profile.</p>
<h2>Troubleshooting</h2>
<p>If verification fails, check that your Game Details are set to Public and that you have reloaded the quest page after connecting. Steam's API can take up to 15 minutes to reflect privacy setting changes. If the problem persists, disconnect and reconnect your Steam account from Settings.</p>`,
  },
];

export function getArticle(slug: string): NewsArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
