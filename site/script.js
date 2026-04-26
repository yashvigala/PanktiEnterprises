/* PANKTI ENTERPRISES — catalogue routing & data
   Product data extracted from the trade brochures in assets/brochures/
*/

const BRANDS = [
  // ============================================================
  {
    slug: "portronics",
    name: "Portronics",
    italicName: "Portronics",
    no: "01",
    category: "Smart Tech & Accessories",
    line: "Pocket-sized intelligence — speakers, finders, mounts, magnetic everything.",
    longLede: "An everyday-tech house with an unfussy industrial language. Portronics packs intent into small footprints — wireless audio, charging, mounting and tracking — and Pankti deploys them across corporate gifting, retail, and hospitality.",
    cover: "assets/products/portronics/dash-speaker.jpg",
    products: [
      { name: "Dash 30W Party Speaker", code: "POR 3334", desc: "Bluetooth 5.3 party speaker with dual wireless karaoke mics, RGB ring, 5-hour playback, 30 W output.", img: "assets/products/portronics/dash-speaker.jpg" },
      { name: "Wallet X Magnetic Card Holder", code: "POR 3194 / 3052", desc: "Trifold MagSafe-compatible PU leather wallet with mobile-stand mode and six card slots. ₹999.", img: "assets/products/portronics/wallet-x.jpg" },
      { name: "Loca Smart Item Finder", code: "POR · LOCA", desc: "Apple Find My-compatible Bluetooth tracker for keys, wallets and small devices.", img: "assets/products/portronics/loca-finder.jpg" },
      { name: "Luxcell B 12 Powerbank", code: "POR 2251 / 2252 / 2253", desc: "10,000 mAh, 12 W output, dual-input (Micro & Type-C), wakeup button & LED indicator. ₹1,499.", img: "assets/products/portronics/luxcell-b12.jpg" },
      { name: "360° Mobile Stand", code: "POR · MODESK", desc: "Foldable, height-adjustable phone stand with full 360° rotating base for desk and lectern.", img: "assets/products/portronics/mobile-stand.jpg" },
      { name: "Juicemate 2 Travel Adaptor", code: "POR 2869", desc: "Universal travel adaptor with dual USB-A ports, 6A AC output, ABS+copper build, safety shutter. ₹999.", img: "assets/products/portronics/juicemate-2.jpg" },
    ],
  },

  // ============================================================
  {
    slug: "jbl",
    name: "JBL",
    italicName: "JBL",
    no: "02",
    category: "Cinema-grade Audio",
    line: "Loudspeakers and soundbars from the legendary American audio house.",
    longLede: "JBL — the brand that scored half the world's stadiums and most of its serious living rooms. Pankti supplies the full 2025 catalogues for both soundbar/cinema and the wireless speaker ranges to dealers, integrators and hospitality.",
    cover: "assets/products/jbl-soundbars/bar-1300.jpg",
    products: [
      // -- Soundbars --
      { name: "JBL Bar 1300", code: "Soundbar · 15.1 ch", desc: "True Dolby Atmos®, DTS:X and MultiBeam™ surround. Self-powered detachable wireless rear speakers double as Bluetooth speakers. 1170 W. Red Dot Award.", img: "assets/products/jbl-soundbars/bar-1300.jpg" },
      { name: "JBL Bar 800", code: "Soundbar · 7.1 ch", desc: "Dolby Atmos® with 2 up-firing drivers, detachable wireless rears, 10-inch wireless subwoofer, 720 W output, WiFi + Chromecast + AirPlay.", img: "assets/products/jbl-soundbars/bar-800.jpg" },
      { name: "JBL Bar 500", code: "Soundbar · 5.1 ch", desc: "Truly cinematic Dolby Atmos & MultiBeam™ surround, 10-inch wireless subwoofer, 590 W output, easy sound calibration.", img: "assets/products/jbl-soundbars/bar-500.jpg" },
      { name: "JBL Bar 2.1 Deep Bass MK2", code: "Soundbar · 2.1 ch", desc: "Dolby Audio, wireless subwoofer for extra deep bass, HDMI ARC + optical, Bluetooth streaming.", img: "assets/products/jbl-soundbars/bar-21-mk2.jpg" },
      { name: "JBL Cinema SB580 / SB590", code: "Soundbar · 3.1 ch", desc: "Dedicated centre channel for voice clarity, 440 W of JBL sound, wireless subwoofer, Virtual Dolby Atmos®, HDMI eARC.", img: "assets/products/jbl-soundbars/cinema-sb580-590.jpg" },
      { name: "JBL Cinema SB550 / SB560", code: "Soundbar · 3.1 ch", desc: "From ordinary to epic: dedicated centre channel, 250 W output, wireless subwoofer, single-cable HDMI ARC, Dolby Audio embedded.", img: "assets/products/jbl-soundbars/cinema-sb550-560.jpg" },
      { name: "JBL Cinema SB180", code: "Soundbar · 2.1 ch", desc: "Compact home-theatre soundbar with 6.5-inch wireless subwoofer, 220 W RMS, HDMI ARC, Bluetooth, 3 sound modes.", img: "assets/products/jbl-soundbars/cinema-sb180.jpg" },
      { name: "JBL Cinema SB510", code: "Soundbar · 3.1 ch", desc: "Compact size, thunderous sound — Dolby Audio, built-in subwoofer, 200 W output, HDMI ARC, Bluetooth.", img: "assets/products/jbl-soundbars/cinema-sb510.jpg" },
      // -- Speakers / PartyBox --
      { name: "JBL PartyBox Ultimate", code: "Wireless · Pro", desc: "The ultimate party starter — multi-dimensional sound, dynamic lightshow, IPX4 splashproof, Dolby Atmos for audio. Red Dot 2024.", img: "assets/products/jbl-speakers/partybox-ultimate.jpg" },
      { name: "JBL PartyBox 710", code: "Wireless · 800 W", desc: "Splashproof PartyBox transforms any night into a real party. Concert-on-nightclub vibes, top-panel controls, PartyBox app integration.", img: "assets/products/jbl-speakers/partybox-710.jpg" },
      { name: "JBL PartyBox 520", code: "Wireless · 400 W", desc: "Bring festive vibes anywhere — 400 W peak audio output, AI Sound Boost, futuristic LED lightshow, 15 hours of playtime, telescopic handle.", img: "assets/products/jbl-speakers/partybox-520.jpg" },
      { name: "JBL PartyBox Stage 320", code: "Wireless · IPX4", desc: "Let the good times roll — telescopic handle, sturdy wheels, replaceable battery, AI Sound Boost, up to 18 hours playtime.", img: "assets/products/jbl-speakers/partybox-stage-320.jpg" },
      { name: "JBL PartyBox Encore Essential 2", code: "Wireless", desc: "Essential party energy with dynamic lightshow, JBL Pro Sound, splashproof build and easy-grip portable form.", img: "assets/products/jbl-speakers/partybox-encore-essential-2.jpg" },
      { name: "JBL PartyBox Encore 2", code: "Wireless · 100 W", desc: "Bring the club anywhere — 100 W Pro Sound, RGB strobe lightshow, up to 15 hours playback, splashproof and grab-and-go handle.", img: "assets/products/jbl-speakers/partybox-encore-2.jpg" },
      { name: "JBL Boombox 3 Wi-Fi", code: "Wireless · Boombox", desc: "High-definition music anywhere, anytime — Wi-Fi + Bluetooth, monstrous JBL bass, IP67 dust + waterproof.", img: "assets/products/jbl-speakers/boombox-3-wifi.jpg" },
      { name: "JBL Xtreme 4", code: "Wireless · Portable", desc: "Bigger, louder, longer — vPro Sound, replaceable battery, IP67 ratings, AI Sound Boost.", img: "assets/products/jbl-speakers/xtreme-4.jpg" },
      { name: "JBL Charge 6", code: "Wireless · 28 hr", desc: "AI Sound Boost, 28-hour battery with Playtime Boost, built-in powerbank, IP68 waterproof, multi-speaker pairing via Auracast™.", img: "assets/products/jbl-speakers/charge-6.jpg" },
      { name: "JBL Charge 5 Wi-Fi", code: "Wireless · Hi-Res", desc: "Wi-Fi streaming with hi-res audio support, JBL Pro Sound, IP67 protection, multi-speaker stereo pairing.", img: "assets/products/jbl-speakers/charge-5-wifi.jpg" },
      { name: "JBL Flip 7", code: "Wireless · Portable", desc: "The next-generation Flip — louder, deeper bass, USB-C lossless playback, Auracast™ multi-speaker pairing, IP67.", img: "assets/products/jbl-speakers/flip-7.jpg" },
      { name: "JBL Flip 6", code: "Wireless · 12 hr", desc: "Bold sound — 12 hours of playtime, dual passive radiators, IP67 waterproof and dustproof.", img: "assets/products/jbl-speakers/flip-6.jpg" },
      { name: "JBL Clip 5", code: "Wireless · Clip-on", desc: "Big sound, small package — integrated carabiner, IP67 rating, 12 hours of JBL Pro Sound, USB-C.", img: "assets/products/jbl-speakers/clip-5.jpg" },
      { name: "JBL Go 4", code: "Wireless · Pocket", desc: "Pocket-sized JBL Pro Sound — 7 hours playtime, Auracast™ pairing, IP67, integrated lanyard.", img: "assets/products/jbl-speakers/go-4.jpg" },
      { name: "JBL PartyLight Stick", code: "Wireless · Light + Sound", desc: "JBL audio married to a synchronised lightshow — PartyLight Stick is the centrepiece of any JBL party setup.", img: "assets/products/jbl-speakers/partylight-stick.jpg" },
      { name: "JBL PartyLight Beam", code: "Wireless · Light + Sound", desc: "Wireless party-grade beam light with synchronised JBL audio — pairs with the PartyBox lineup.", img: "assets/products/jbl-speakers/partylight-beam.jpg" },
    ],
    brochures: [
      { label: "Soundbar & Cinema · 2025", file: "assets/brochures/jbl-soundbars.pdf" },
      { label: "Speakers · 2025", file: "assets/brochures/jbl-speakers.pdf" },
    ],
    foot: {
      title: "Two catalogues. One house of sound.",
      body: "The complete 2025 dealer offer is in the two PDFs above — full feature matrices, colour options, pricing and SKUs.",
    },
  },

  // ============================================================
  {
    slug: "ccd",
    name: "Café Coffee Day",
    italicName: "Coffee Day",
    no: "03",
    category: "Café Solutions",
    line: "Branded vending kiosks for offices, lobbies and forecourts.",
    longLede: "Pankti is an authorised Coffee Day Global channel partner. We deploy CCD-branded vending kiosks and beverage hardware into corporate pantries, hotels, hospitals and institutional sites — the espresso-machine houses (Brew Master, Indus, Indus+, Celesta) sit under their own brand pages.",
    cover: "assets/products/ccd/ccd_vending_kiosk.png",
    products: [
      // ---- Disposables & accessories — featured first ----
      { name: "Wooden Stirrers", code: "CCD · STIR", type: "Disposables",
        desc: "Coffee-Day-branded disposable wooden stirrers — bulk pack, FSC-grade pine. The standard back-bar consumable for every CCD kiosk.",
        img: "assets/products/ccd/stirrers.jpeg" },
      { name: "Coffee Day Ceramic Mug — Nurtured by Nature", code: "CCD · MUG", type: "Eco-Branded Ceramic",
        desc: "CCD-branded ceramic mug from the 'Nurtured by Nature' series — gift-boxed, eco-conscious finish. Standard for boardroom service and corporate gifting.",
        img: "assets/products/ccd/ccd-mug.jpeg" },
      { name: "Sugar Sachets", code: "CCD · SUGR", type: "Disposables",
        desc: "Branded single-serve sugar sachets — vegetarian-marked, food-safe foil. Stocked alongside the kiosk at every CCD installation.",
        img: "assets/products/ccd/sugar.jpeg" },

      // ---- Hardware ----
      { name: "CCD Vending Kiosk", code: "CCD · K1",
        desc: "Branded counter-top kiosk with bean-to-cup machine, condiment tray and CCD livery — site-installed and serviced.",
        img: "assets/products/ccd/ccd_vending_kiosk.png" },
      { name: "Coffee Day Vending Machine — In Action", code: "CCD · DEMO",
        desc: "Watch the bean-to-cup machine pull a fresh shot. Single-touch operation, programmed for consistency across high-traffic environments.",
        video: "assets/products/ccd/machine.mp4", img: null },
      { name: "Honey & Speciality Beverage", code: "CCD · MENU",
        desc: "The CCD programme extends beyond espresso — honey-laced beverages, cold brews and seasonal recipes are part of the standard menu.",
        video: "assets/products/ccd/honey-video.mp4", img: null },
      { name: "Coffee Day Roasted Coffee Beans", code: "CCD · BEANS",
        desc: "1 kg estate-roasted beans, exclusively for use with Coffee Day vending machines. Sourced from Coffee Day's own 15,000-acre Western-Ghats estates and 11,000 small growers.",
        img: "assets/products/ccd/coffee-front.jpeg",
        type: "Roasted Coffee Beans", pack: "1 kg" },

      // ---- Tea programme — 8 variants ----
      { name: "Assam Tea", code: "CCD · TEA", type: "Premix · Hot",
        desc: "Bold and malty Assam — the workhorse Indian black tea, brewed strong with milk for the all-day workplace cup.",
        img: "assets/products/ccd/assam.jpeg" },
      { name: "Cardamom Tea", code: "CCD · TEA", type: "Premix · Hot",
        desc: "Aromatic green-cardamom chai — sweet, spiced, programmed to single-button dispensing on the CCD vending stack.",
        img: "assets/products/ccd/cardamom%20tea.jpeg" },
      { name: "Ginger Tea", code: "CCD · TEA", type: "Premix · Hot",
        desc: "Sharp, warming ginger chai — the classic adrak chai, dispensed without the brewing time.",
        img: "assets/products/ccd/ginger%20tea.jpeg" },
      { name: "Green Tea", code: "CCD · TEA", type: "Premix · Light",
        desc: "Light, refreshing green tea — for the wellness-focused workplace, programmed for the right brew time and temperature.",
        img: "assets/products/ccd/green%20tea.jpeg" },
      { name: "Lemon Honey Tea", code: "CCD · TEA", type: "Speciality · Hot",
        desc: "Honey-laced lemon tea — soothing, golden, and a winter-pantry favourite. Pairs naturally with the CCD honey programme.",
        img: "assets/products/ccd/lemon%20honey%20tea.jpeg" },
      { name: "Lemon Tea", code: "CCD · TEA", type: "Premix · Light",
        desc: "Bright lemon tea — sugar, lemon, black tea, ready to pour. Office-pantry favourite.",
        img: "assets/products/ccd/lemon%20tea.jpeg" },
      { name: "Masala Tea", code: "CCD · TEA", type: "Premix · Signature",
        desc: "The Indian roadside chai — cardamom, ginger, cinnamon, clove and pepper in a single, balanced premix. The signature pour.",
        img: "assets/products/ccd/masala%20tea.jpeg" },
      { name: "Mint Tea", code: "CCD · TEA", type: "Premix · Light",
        desc: "Refreshing mint over a green base — clean, calming, palate-cleansing. The post-meal cup.",
        img: "assets/products/ccd/mint%20tea.jpeg" },
    ],
    foot: {
      title: "Per-cup, per-month, or outright.",
      body: "We structure CCD deployments three ways — per-cup billing, monthly rental, or capex purchase — and we run the service contract throughout. For the machine portfolio see the Brew Master, Indus, Indus+ and Celesta brand rooms.",
    },
  },

  // ============================================================
  {
    slug: "brewmaster",
    name: "Brew Master",
    italicName: "Brew Master",
    no: "04",
    category: "Coffee Day · Combo Machine",
    line: "Bean-to-cup coffee with a tea-pod brewer, by Coffee Day.",
    longLede: "The Coffee Day Brew Master pairs the Indus coffee machine with a one-of-a-kind tea-pod brewer. Whatever your favourite beverage — tea or coffee — Brew Master has it covered. Convenient, authentic, home-style, hygienic.",
    cover: "assets/products/brewmaster/brew-master.jpg",
    products: [
      { name: "Brew Master · Coffee + Tea", code: "INDUS + Tea Brewer",
        desc: "Indus bean-to-cup espresso machine paired with a freshly-brewed pod tea brewer. Indus: 670 × 350 × 803 mm, 120 cups/hr, 300 cups/day, 1 kg bean hopper. Tea Brewer: 236 × 207 × 378 mm, 35 servings/cycle, 9 kg.",
        img: "assets/products/brewmaster/brew-master.jpg" },
      { name: "Home Tea Maker — In Action", code: "BM · DEMO", type: "Demo Video",
        desc: "Watch the home / counter-top tea brewer pour a freshly-extracted cup. Pod-based brewing means clean dispensing, consistent strength, no agglutination.",
        video: "assets/products/brewmaster/home%20tea%20maker.mp4", img: null },
      { name: "Pradeep Electric Water Boiler & Urn", code: "BM · URN", type: "Stainless Steel Beverage Urn",
        desc: "Heavy-gauge stainless-steel hot-water urn with twin handles, sight glass, dual taps and an automatic safety cut-off. Reset button protects the heating element if switched on dry. The back-bar workhorse for canteens, banquets and railway pantries.",
        img: "assets/products/brewmaster/electric%20water%20boilerurn.jpeg" },
    ],
    foot: {
      title: "Coffee and tea, both done right.",
      body: "Tea pods are taken cleanly out of their hanging string after each cycle — no agglutination, no manual cleaning. Coffee is from Coffee Day's own estates. Brewed for the workplace, but with the rituals of home.",
    },
  },

  // ============================================================
  {
    slug: "indus",
    name: "Indus",
    italicName: "Indus",
    no: "05",
    category: "Coffee Day · Bean-to-Cup",
    line: "Refreshed, at the touch of a button.",
    longLede: "Coffee Day Global's state-of-the-art coffee dispensing machine. Authentic Italian espresso, hot water/steam nozzle, touchscreen interface, USB data retrieval and 6 pre-programmed beverage options. Asia's largest integrated coffee company built it for offices that take their coffee seriously.",
    cover: "assets/products/indus/indus.jpg",
    products: [
      { name: "Indus Coffee Dispensing Machine", code: "Coffee Day · Indus", desc: "Touchscreen interface, authentic Italian espresso, hot water/steam nozzle, USB data retrieval. 803 × 350 × 670 mm, 55 kg, 1 kg bean hopper, 230 V single-phase, 120 cups/hr, 300 cups/day.", img: "assets/products/indus/indus.jpg" },
    ],
    foot: {
      title: "Made by the people who grow the beans.",
      body: "Coffee Day Global runs estates across 15,000 acres in the Western Ghats. Their machines are built around their own beans — not the other way around. As of December 2014 they had 28,777 machines deployed across India.",
    },
  },

  // ============================================================
  {
    slug: "indus-plus",
    name: "Indus+",
    italicName: "Indus +",
    no: "06",
    category: "Coffee Day · Touch-screen",
    line: "Interactive screen-enabled coffee machine.",
    longLede: "Indus+ adds an Android-based touch screen, LED back-lighting, in-built speaker and IOT connectivity (GSM) on top of the Indus chassis. The screen doubles as an infotainment / advertising surface — a chic coffee machine that earns its desk space.",
    cover: "assets/products/indus-plus/indus-plus.jpg",
    products: [
      { name: "Indus+ Interactive Coffee Machine", code: "Coffee Day · Indus+", desc: "Android-based input, graphical UI, infotainment + advertising provision, in-built speaker, IOT enabled (GSM). 6 pre-programmed beverages: Cappuccino, Latte, Espresso, Tea, Milk, Hot Water. 803 × 350 × 670 mm, 55 kg, 230 V.", img: "assets/products/indus-plus/indus-plus.jpg" },
    ],
    foot: {
      title: "A coffee machine that earns its desk space.",
      body: "The touchscreen panel can run scheduled infotainment or in-house advertising while the machine isn't dispensing. IOT + GSM connectivity means consumption data and machine-health alerts flow back to the service team.",
    },
  },

  // ============================================================
  {
    slug: "celesta",
    name: "Celesta",
    italicName: "Celesta",
    no: "07",
    category: "Coffee Day · Out-of-Home",
    line: "Out-of-home coffee brewing — sleek, stylish, single-button.",
    longLede: "Coffee Day's Celesta is a state-of-the-art out-of-home coffee machine. Simple user-friendly controls deliver speciality coffees — cappuccino, latte and espresso — at the push of a button, made from hand-picked beans roasted in Coffee Day's own plantations.",
    cover: "assets/products/celesta/celesta-machine.jpg",
    products: [
      { name: "Celesta Coffee Machine", code: "Coffee Day · Celesta", desc: "630 × 290 × 630 mm (+230 mm hopper), 49 kg + 4 kg accessories. 3.2 L boiler, 12-15 min initial heating, 1.3 kg bean hopper, 3 L milk container, 230 V, 2.5 kW, 3 cups/min throughput.", img: "assets/products/celesta/celesta-machine.jpg" },
      { name: "Latte", code: "Celesta · Coffee", desc: "Espresso shot drawn from Coffee Day's own beans, finished with steamed milk and a velvet micro-foam top.", img: "assets/products/celesta/latte.png" },
      { name: "Cappuccino", code: "Celesta · Coffee", desc: "Equal thirds — espresso, steamed milk, foamed milk. The classic mid-morning ritual, programmed to a single button.", img: "assets/products/celesta/cappuccino.png" },
      { name: "Espresso", code: "Celesta · Coffee", desc: "A short, intense pull from hand-picked, expertly roasted Coffee Day beans. The reference shot.", img: "assets/products/celesta/espresso.png" },
      { name: "Plain Tea", code: "Celesta · Tea", desc: "Carefully picked tea, brewed home-style with fresh milk for that authentic chai taste.", img: "assets/products/celesta/plain%20tea.png" },
      { name: "Flavoured Tea", code: "Celesta · Tea", desc: "Cardamom, ginger, masala — the warm flavour profiles, brewed clean with no agglutination.", img: "assets/products/celesta/flavoured%20tea.png" },
      { name: "Green Tea", code: "Celesta · Tea", desc: "Light, refreshing green tea — programmed for the right brew time and temperature, every cup.", img: "assets/products/celesta/green%20tea.png" },
      { name: "Badam Milk", code: "Celesta · Speciality", desc: "Hot almond milk with the warmth and richness of a slow-cooked classic, dispensed in seconds.", img: "assets/products/celesta/badam%20milk.png" },
      { name: "Hot Chocolate Drink", code: "Celesta · Speciality", desc: "Indulgent, rich hot chocolate — the cold-evening drink, made from machine-grade premium chocolate.", img: "assets/products/celesta/hot%20chocolate%20drink.png" },
      { name: "Soups", code: "Celesta · Savoury", desc: "Hot soup option for offices, hospitals and cafeterias — versatile beyond just beverages.", img: "assets/products/celesta/soups.png" },
    ],
    foot: {
      title: "From plantation to cup, all one company.",
      body: "Coffee Day grows on 15,000 acres of its own and sources from 11,000 small growers. Beans are packed in aluminium with Goglio valves to lock in aroma. Machines, beans, training and service — all one phone call.",
    },
  },

  // ============================================================
  {
    slug: "ecolab",
    name: "Ecolab",
    italicName: "Ecolab",
    no: "08",
    category: "Hygiene & Cleaning",
    line: "Industrial cleaning chemistry — the FaciliPro™ programme.",
    longLede: "Ecolab is the global leader in water, hygiene and infection-prevention solutions. Pankti Enterprises supplies the Oasis Compac and FaciliPro range to hotels, hospitals, kitchens, malls and facilities-management houses across the country. Twelve professional SKUs covering every surface in a building.",
    cover: null,
    products: [
      { name: "Oasis Compac Multipurpose Cleaner and Disinfectant", code: "OC12", type: "Multi Purpose Cleaner & Disinfectant",
        desc: "Multi-purpose cleaner and disinfectant formulated to penetrate dirt and soil. For use on all types of hard surfaces, inside and outside washrooms as well.",
        dilution: "Normal soil: 8 ml · Heavy soil: 16 ml", pack: "2 × 5 L", img: null },
      { name: "Oasis Compac Glass Cleaner", code: "OC3", type: "Glass Cleaner",
        desc: "Mild, general-purpose detergent formulated with drying and evaporating agents — designed to clean mirrors, windows and other glass surfaces.",
        dilution: "Normal soil: 20 ml · Heavy soil: 40 ml", pack: "2 × 5 L", img: null },
      { name: "Oasis Compac Furniture Polish", code: "OC4", type: "Furniture Polish",
        desc: "Neutral non-phosphate formula. Spray-and-wipe protective polish for furniture, stainless steel, aluminium, plastics and vinyl.",
        dilution: "90 ml", pack: "2 × 5 L", img: null },
      { name: "Oasis Compac Air Fresh", code: "OC5", type: "Air Freshener — Mild",
        desc: "Air freshener and deodoriser. Leaves rooms smelling clean and refreshed.",
        dilution: "50 – 70 ml", pack: "4 × 1 L", img: null },
      { name: "Oasis Compac Air Exotic", code: "OC5 Plus", type: "Air Freshener — Strong",
        desc: "Air freshener and deodoriser at strong intensity. Leaves rooms smelling clean and refreshed.",
        dilution: "50 – 70 ml", pack: "4 × 1 L", img: null },
      { name: "Oasis Compac Toilet Bowl Cleaner", code: "OC6", type: "Toilet Bowl Cleaner",
        desc: "Eliminates rust, lime, organic deposits and offensive odours in toilet bowls.",
        dilution: "RTU — Ready to use", pack: "2 × 5 L", img: null },
      { name: "Oasis Compac Neutral Floor Cleaner", code: "OC7", type: "Neutral Floor Cleaner",
        desc: "Neutral floor cleaner. Can be used on floors and floor finishes to remove stain and dirt for high-shine surfaces.",
        dilution: "Normal soil: 10 ml · Heavy soil: 20 ml", pack: "2 × 5 L", img: null },
      { name: "Oasis Compac Heavy Duty Floor Cleaner", code: "OC8", type: "Heavy Duty Floor Degreaser / Stripper",
        desc: "Heavy-duty floor cleaner and low-suds stripper which penetrates, emulsifies and dissolves tough soils.",
        dilution: "Normal soil: 10 ml · Heavy soil: 20 ml", pack: "2 × 5 L", img: null },
      { name: "Oasis Compac Acid Bathroom Cleaner", code: "OC9", type: "Bathroom Cleaner — Hard-water Locations",
        desc: "Eliminates rust, lime, organic deposits and offensive odours in toilet bowls where hard water is the source.",
        dilution: "Normal soil: 30 ml · Medium: 45 ml · Heavy: 60 ml", pack: "2 × 5 L", img: null },
      { name: "Oasis Compac Magic Shine", code: "OC10", type: "Stainless Steel Polish",
        desc: "Mineral-oil polish that leaves stainless steel surfaces with a bright finish.",
        dilution: "RTU — Ready to use", pack: "2 × 5 L", img: null },
      { name: "All Purpose Cleaner", code: "APC", type: "All Purpose Cleaner Concentrate",
        desc: "General-purpose concentrated liquid detergent for dish-washing, floor cleaning, hard surface and glass cleaning.",
        dilution: "10 – 20 ml", pack: "4 × 5 L", img: null },
      { name: "Lemon Eze", code: "LE", type: "Crème Cleanser",
        desc: "Heavy-duty cleanser for removal of scaling, hard-water spots and marks, soap-scum build-up, rust, grease and more.",
        dilution: "RTU — Ready to use", pack: "12 × 32 oz", img: null },
    ],
    foot: {
      title: "Everywhere it matters.™",
      body: "FaciliPro is Ecolab's professional cleaning programme — a coordinated chemistry stack for every surface in a facility, with dilution, dosing and on-site training to match.",
    },
  },

  // ============================================================
  {
    slug: "kartin",
    name: "Kartin",
    italicName: "Kartin",
    no: "09",
    category: "Tea/Coffee Premix & Vending",
    line: "Take small, feel big — premix powders and vending machines.",
    longLede: "Kartin is the leading manufacturer of beverage premix powders and vending machines, established in 2015 and based in Mumbai. Original taste, no artificial colour, no preservative — ready-to-use premixes for any vending machine. Eleven flavours across hot and cold.",
    cover: "assets/products/kartin/kartin-master.png",
    products: [
      { name: "Kafé Kartin Master Vending Machine", code: "Kartin · Master", desc: "Kafé-Kartin branded vending machine — flagship table-top unit with smart-card reader, premix-powder hopper system, and works with the full Kartin flavour range.", img: "assets/products/kartin/kartin-master.png" },
      { name: "2-Option Vending Machine", code: "Kartin · 2-Option", desc: "610 × 450 × 250 mm (HxDxW). 2 canisters × 1 kg, 1.8 L storage, 2.0 L boiler, 2 kW heater, 230 V / 15 A, 24 V DC motor valves. 16.6 kg net.", img: "assets/products/kartin/2-option.png" },
      { name: "3-Option Vending Machine", code: "Kartin · 3-Option", desc: "610 × 450 × 250 mm (HxDxW). 3 canisters × 1 kg, 1.8 L storage, 2.0 L boiler, 2 kW heater, 230 V / 15 A, 24 V DC motor valves. 17.6 kg net.", img: "assets/products/kartin/3-option.png" },
      { name: "4-Option Vending Machine", code: "Kartin · 4-Option", desc: "610 × 450 × 350 mm (HxDxW). 4 canisters × 1 kg, 1.8 L storage, 2.0 L boiler, 2 kW heater, 230 V / 15 A, 24 V DC motor valves. 20.0 kg net.", img: "assets/products/kartin/4-option.png" },
      { name: "Smart-Card Mechanism", code: "Kartin · Smart Card", desc: "Optional smart-card based dispensing — works with or without vending machines. Per-employee consumption control, auditing, top-up workflow.", img: "assets/products/kartin/smart-card.jpg" },
      // ---- Premix Range — six SKUs across Tea & Coffee, in Basic / Regular / Premium ----
      { name: "Basic Instant Tea Premix", code: "Kartin · Basic", desc: "Entry-tier instant tea premix — original taste, no artificial colour, no preservative. Ready in 30 seconds with hot water.", img: "assets/products/kartin/basic%20tea.png" },
      { name: "Basic Instant Coffee Premix", code: "Kartin · Basic", desc: "Entry-tier instant milk coffee premix — quick, consistent and built for high-volume office pantries.", img: "assets/products/kartin/basic%20coffee.png" },
      { name: "Regular Instant Tea Premix", code: "Kartin · Regular", desc: "Mid-tier tea premix with a fuller body and a rounder milk note — the all-day workplace standard.", img: "assets/products/kartin/regular%20tea.png" },
      { name: "Regular Instant Coffee Premix", code: "Kartin · Regular", desc: "Mid-tier instant coffee premix — smoother, richer cup; the everyday choice across hospitals, malls and offices.", img: "assets/products/kartin/regular%20coffee.png" },
      { name: "Premium Instant Tea Premix", code: "Kartin · Premium", desc: "Top-tier tea premix — fuller-leaf base, premium milk solids, refined aromatics. Served in board-rooms and lounges.", img: "assets/products/kartin/premium%20tea.png" },
      { name: "Premium Instant Coffee Premix", code: "Kartin · Premium", desc: "Top-tier instant coffee premix — best-in-range bean and milk solids profile, finished smooth and indulgent.", img: "assets/products/kartin/premium%20coffee.png" },
    ],
    foot: {
      title: "Cost & time savvy. Easy to maintain & clean.",
      body: "What makes Kartin special: good aroma, no preservatives, ready to use, hot and cold beverages, added milk, sugar & natural flavours, ready in 30 seconds, instant tea/coffee, quick to serve, consistence taste, can be prepared with-or-without vending machine, good for daily consumption — and Travel-Easy packs available for business and personal tours.",
    },
  },

  // ============================================================
  {
    slug: "ensono",
    name: "Ensono",
    italicName: "Ensono",
    no: "10",
    category: "Workspace Accessories",
    line: "Aluminium laptop stands, hubs and the desk-side essentials.",
    longLede: "Ensono builds the quiet, well-machined desk accessories — folding aluminium laptop risers, USB-C hubs, the bits that make a workspace work. Pankti carries them for corporate fit-outs and gifting.",
    cover: "assets/products/ensono/laptop-stand.jpg",
    products: [
      { name: "Aluminium Laptop Riser", code: "ENS · LS01", desc: "Folding, height-adjustable laptop riser in space-grey aluminium. Six tilt positions, ventilated.", img: "assets/products/ensono/laptop-stand.jpg" },
      { name: "USB-C 7-in-1 Hub", code: "ENS · HUB7", desc: "Type-C hub: HDMI, USB 3.0 ×2, USB 2.0 ×1, SD/TF, Ethernet, PD passthrough — slim aluminium body.", img: "assets/products/ensono/usb-c-hub.jpg" },
    ],
  },

  // ============================================================
  {
    slug: "diwali",
    name: "Diwali Gifting",
    italicName: "Diwali",
    no: "11",
    category: "Festive Hampers",
    line: "Curated luxury hampers — sweets, dry fruits, ornament-grade boxes.",
    longLede: "Each Diwali we curate a small, considered range of luxury hampers — Mughal-revival trunks, jharokha-front coffers, brocade-lined chests housing sweets, dry-fruits and brass-lidded jars. Built for board-level gifting and concierge programmes.",
    cover: "assets/products/diwali/midnight-emerald-chest.jpg",
    products: [
      { name: "Midnight Emerald Chest", code: "DW · 01", desc: "Deep-teal lacquered trunk, gold-detailed inner lid, brass-capped jars and a partitioned mithai tray.", img: "assets/products/diwali/midnight-emerald-chest.jpg" },
      { name: "Regal Mughal Trunk", code: "DW · 02", desc: "Charcoal-and-cream trunk with archway motifs, brass clasps and embroidered lid strap.", img: "assets/products/diwali/regal-mughal-trunk.jpg" },
      { name: "Teal Gold Hamper", code: "DW · 03", desc: "Teal coffer with gold embossing, sweets in compartments, brass-lidded dry-fruit jars.", img: "assets/products/diwali/teal-gold-hamper.jpg" },
      { name: "Rose Bloom Coffer", code: "DW · 04", desc: "Powder-pink chest with floral inlay, gilt handles and pastel mithai assortment.", img: "assets/products/diwali/rose-bloom-coffer.jpg" },
      { name: "Honey Palace Trunk", code: "DW · 05", desc: "Caramel-toned trunk with two drawers, brass jars and an opulent suede inner lining.", img: "assets/products/diwali/honey-palace-trunk.jpg" },
      { name: "Amber Haveli Box", code: "DW · 06", desc: "Tan-and-gold haveli-print closed trunk with twin brass clasps and embroidered ribbon.", img: "assets/products/diwali/amber-haveli-box.jpg" },
      { name: "Magenta Celebration Box", code: "DW · 07", desc: "Magenta-and-violet box with viewing window, gold lidded jars, wax candle and mithai trays.", img: "assets/products/diwali/magenta-celebration.jpg" },
      { name: "Blush Mosaic Box", code: "DW · 08", desc: "Coral mosaic-print box with viewing window and gilt-bow lidded jars.", img: "assets/products/diwali/blush-mosaic-box.jpg" },
      { name: "Tangerine Jewel Box", code: "DW · 09", desc: "Orange-jewelled box with kaleidoscopic borders, lidded jars and assorted mithai tray.", img: "assets/products/diwali/tangerine-jewel-box.jpg" },
      { name: "Emerald Darbar Chest", code: "DW · 10", desc: "Open-display darbar chest with full mithai tray, lidded jars and a slide-out dry-fruit drawer.", img: "assets/products/diwali/emerald-darbar-chest.jpg" },
      { name: "Teal Jharokha Trunk", code: "DW · 11", desc: "Teal trunk with jharokha print, dual-tier service: lidded jars, sweets, plus a stone-fruit drawer.", img: "assets/products/diwali/teal-jharokha-trunk.jpg" },
    ],
    foot: {
      title: "The 2025 collection — Happy Diwali.",
      body: "The full lookbook (47 MB) is the trade reference for our 2025 Diwali range. Order windows open in August and close at the end of September.",
    },
  },
];

const BROCHURE_FALLBACK = {
  portronics: null,
  jbl: "assets/brochures/jbl-speakers.pdf",
  ccd: null,
  brewmaster: "assets/brochures/brewmaster.pdf",
  indus: "assets/brochures/indus.pdf",
  "indus-plus": "assets/brochures/indus-plus.pdf",
  celesta: "assets/brochures/celesta.pdf",
  ecolab: null,
  kartin: "assets/brochures/kartin.pdf",
  ensono: null,
  diwali: "assets/brochures/diwali-2025.pdf",
};

/* ========== HOMEPAGE: brand grid ========== */
function renderBrandGrid() {
  const grid = document.getElementById("brand-grid");
  if (!grid) return;
  grid.innerHTML = BRANDS.map((b) => {
    const bg = b.cover
      ? `background-image:url('${b.cover}')`
      : `background:linear-gradient(135deg, var(--paper-light), var(--paper-deep));`;
    return `
      <a class="brand-card" href="#/brand/${b.slug}">
        <div class="brand-card__bg" style="${bg}"></div>
        <div class="brand-card__veil"></div>
        <div class="brand-card__content">
          <div class="brand-card__top">
            <span class="brand-card__no">N° ${b.no}</span>
            <span class="brand-card__cat">${b.category}</span>
          </div>
          <div class="brand-card__bottom">
            <h3 class="brand-card__name"><em>${b.italicName}</em></h3>
            <p class="brand-card__line">${b.line}</p>
            <span class="brand-card__cta">
              Enter the room
              <span class="brand-card__cta-arrow"></span>
            </span>
          </div>
        </div>
      </a>
    `;
  }).join("");
}

/* ========== HOMEPAGE: TOC (alphabetised) ========== */
function renderToc() {
  const toc = document.querySelector(".hero__toc");
  if (!toc) return;
  const sorted = [...BRANDS].sort((a, b) => a.name.localeCompare(b.name));
  toc.innerHTML = sorted.map((b) => `
    <li onclick="location.hash='#/brand/${b.slug}'">
      <span>${b.name}</span><span>${b.no}</span>
    </li>
  `).join("");
}

/* ========== BRAND VIEW ========== */
function renderBrand(slug) {
  const b = BRANDS.find((x) => x.slug === slug);
  if (!b) {
    location.hash = "#/";
    return;
  }
  document.getElementById("brand-no").textContent = `No. ${b.no}`;
  document.getElementById("brand-cat").textContent = b.category;
  document.getElementById("brand-title").innerHTML = `<em>${b.italicName}</em>`;
  document.getElementById("brand-lede").textContent = b.longLede;

  const bro = document.getElementById("brand-brochure");
  const broFile = (b.brochures && b.brochures[0] && b.brochures[0].file) || BROCHURE_FALLBACK[b.slug];
  if (broFile) {
    bro.href = broFile;
    bro.style.display = "";
    bro.textContent = b.brochures && b.brochures.length > 1 ? "Download trade brochures" : "Download trade brochure";
  } else {
    bro.style.display = "none";
  }

  // products
  const grid = document.getElementById("product-grid");
  grid.innerHTML = b.products.map((p, i) => {
    const imgPart = p.video
      ? `<div class="product-card__img product-card__img--video"><video src="${p.video}" muted loop playsinline autoplay preload="metadata"></video></div>`
      : p.img
        ? `<div class="product-card__img" style="background-image:url('${p.img}')"></div>`
        : `<div class="product-card__img" style="background:linear-gradient(135deg, #FAF3DF, #E5D9B6); display:grid; place-items:center; color:#6E1F2C; font-family:'Fraunces',serif; font-style:italic; font-size:36px; letter-spacing:-.02em; text-align:center; padding:20px;">${p.code || b.italicName}</div>`;
    const typePart = p.type ? `<span class="product-card__type">${p.type}</span>` : "";
    const specRows = [];
    if (p.dilution) specRows.push(`<div class="spec"><span class="spec__label">Dilution</span><span class="spec__val">${p.dilution}</span></div>`);
    if (p.pack)     specRows.push(`<div class="spec"><span class="spec__label">Pack</span><span class="spec__val">${p.pack}</span></div>`);
    const specsPart = specRows.length
      ? `<div class="product-card__specs">${specRows.join("")}</div>`
      : "";
    return `
      <article class="product-card reveal">
        ${imgPart}
        <div class="product-card__body">
          <span class="product-card__no">N° ${String(i + 1).padStart(2, "0")} / ${String(b.products.length).padStart(2, "0")}</span>
          <h3 class="product-card__name">${p.name}</h3>
          ${typePart}
          <p class="product-card__desc">${p.desc}</p>
          ${specsPart}
          <div class="product-card__meta">
            <span><strong>${p.code || "—"}</strong></span>
            <span>Trade pricing</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // foot
  const foot = document.getElementById("brand-foot");
  if (b.foot || (b.brochures && b.brochures.length > 1)) {
    let html = "";
    if (b.foot) {
      html += `<h3>${b.foot.title}</h3><p>${b.foot.body}</p>`;
    }
    if (b.brochures && b.brochures.length > 1) {
      html += `<div style="margin-top:24px; display:flex; gap:14px; flex-wrap:wrap;">`;
      b.brochures.forEach((br) => {
        html += `<a class="btn btn--ghost" href="${br.file}" target="_blank" rel="noopener">${br.label} →</a>`;
      });
      html += `</div>`;
    }
    foot.innerHTML = html;
    foot.style.display = "";
  } else {
    foot.style.display = "none";
  }

  observeReveals();
}

/* ========== ROUTING ========== */
function route() {
  const hash = location.hash || "#/";
  const home = document.querySelector('[data-view="home"]');
  const brand = document.querySelector('[data-view="brand"]');

  if (hash.startsWith("#/brand/")) {
    const slug = hash.replace("#/brand/", "").split("/")[0];
    home.hidden = true;
    brand.hidden = false;
    renderBrand(slug);
    window.scrollTo({ top: 0, behavior: "instant" });
  } else if (hash.startsWith("#about") || hash.startsWith("#contact") || hash.startsWith("#brands")) {
    home.hidden = false;
    brand.hidden = true;
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  } else {
    home.hidden = false;
    brand.hidden = true;
  }
}

window.addEventListener("hashchange", route);

/* ========== SCROLL REVEAL ========== */
function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.is-in)");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("is-in"), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  els.forEach((el) => io.observe(el));
}

/* ========== INIT ========== */
document.addEventListener("DOMContentLoaded", () => {
  renderBrandGrid();
  renderToc();
  route();
  document.querySelectorAll(".brand-card").forEach((el) => el.classList.add("reveal"));
  observeReveals();
});
