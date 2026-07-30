/* ============================================================
   GREENLINE LOGISTICS — i18n Bilingual (zh / en)
   Load this script in <head> of every page.
   Usage: add data-i18n="key" to any element.
   ============================================================ */

var I18N = (function () {
  'use strict';

  var dict = {
    /* ---- Common / Navigation ---- */
    'nav.home':        { zh: '首页',                 en: 'Home' },
    'nav.zones':       { zh: '服务区域',              en: 'Service Zones' },
    'nav.service':     { zh: '服务项目',              en: 'Services' },
    'nav.about':       { zh: '关于我们',              en: 'About Us' },
    'nav.contact':     { zh: '联系我们',              en: 'Contact' },
    'nav.track':       { zh: '货物追踪',              en: 'Track Shipment' },
    'logo':            { zh: '本润物流',              en: 'GREENLINE LOGISTICS' },
    'search.ph':       { zh: '搜索…',                en: 'Search…' },
    'search.results':  { zh: '搜索结果',              en: 'Search Results' },

    /* ---- Index / Home ---- */
    'home.hero.title':     { zh: '国际物流',                                en: 'International Logistics' },
    'home.hero.sub':       { zh: '专业货运代理，通达南太平洋、中东与非洲',     en: 'Professional freight forwarding across the South Pacific, the Middle East and Africa' },
    'home.core.title':     { zh: '核心优势',                                en: 'Core Advantages' },
    'home.core.ocean':     { zh: '国际海运',                                en: 'Ocean Freight' },
    'home.core.air':       { zh: '国际空运',                                en: 'Air Freight' },
    'home.core.door':      { zh: '门到门运输',                              en: 'Door-to-Door Delivery' },
    'home.core.global':    { zh: '全球稳定配送',                            en: 'Reliable Global Delivery' },
    'home.banner.title':   { zh: '专业运输与物流',                          en: 'Professional Transport & Logistics' },
    'home.banner.sub':     { zh: '让每一票货物，全程顺畅抵达',               en: 'Smooth, end-to-end delivery for every shipment' },
    'home.service.title':  { zh: '服务项目',                                en: 'Our Services' },
    'track.title':         { zh: '货物追踪',                                en: 'Cargo Tracking' },
    'track.sub':           { zh: '输入单号，实时查询货物状态',              en: 'Enter your tracking number to see live shipment status' },
    'track.ph':            { zh: '请输入单号…',                             en: 'Enter tracking number…' },
    'track.btn':           { zh: '查询',                                    en: 'Track' },
    'track.hint':          { zh: '单号 / 提单号 / 柜号由我司后台维护',        en: 'Order, B/L and container numbers are managed by our operations team' },
    'track.code':          { zh: '单号：',                                  en: 'Tracking No.: ' },
    'track.updated':       { zh: '更新时间：',                              en: 'Last updated: ' },
    'track.nf':            { zh: '未查询到该单号信息，请核对后重试，或联系我们的客服。', en: 'We couldn’t find that number. Please double-check it or contact our team.' },

    /* ---- Service Zones ---- */
    'zones.title':         { zh: '服务区域',                                en: 'Service Zones' },
    'zones.intro1':        { zh: '依托完善的运输体系、强大的资源整合能力与覆盖全球的服务网络，我们不断拓展国际业务版图，为各地客户提供稳定、高效、专业的物流解决方案。多年来，我们持续优化物流管理流程，整合全球物流资源，建立起科学高效的运输体系，让货物以更高的时效安全、准时地送达全球各地，全程透明、可控。', en: 'Built on a robust transport network, strong resource integration and a worldwide service footprint, we keep expanding our international reach to deliver stable, efficient and professional logistics solutions. Over the years we have refined our operations, expanded our global resources and built a reliable transport system that moves goods safely and on time — with full visibility at every step.' },
    'zones.intro2':        { zh: '凭借成熟的物流体系与运营策略，我们快速响应多元市场需求，帮助客户降低运营成本、提升效率，实现从起运地到目的地的无缝追踪。无论您是需要跨区域协作，还是布局全球市场，我们都能提供精准、高效的物流服务，让货物安全、快速地抵达全球目的地。', en: 'With mature logistics capabilities and operational strategies, we respond quickly to diverse market needs — helping clients cut costs and move faster, while tracking every shipment seamlessly from origin to destination. Whether you need cross-regional cooperation or global expansion, we deliver precise, efficient logistics that gets your goods there safely and fast.' },
    'zones.intro3':        { zh: '我们始终以诚信为本、以客户需求为先、以专业服务为保障，与全球合作伙伴建立长期稳定的合作关系。未来，我们将持续提升国际服务能力，深化资源共享与价值共创，与全球客户携手同行，实现持久、稳健、可持续的发展。', en: 'We are guided by integrity, driven by our clients’ needs and backed by professional service — building long-term partnerships with collaborators worldwide. Looking ahead, we will keep strengthening our global capabilities, sharing resources and creating value together with customers everywhere for steady, sustainable growth.' },
    'zones.areas.title':   { zh: '服务区域',                                en: 'Where We Operate' },
    'zones.oceania.title': { zh: '南太平洋 — 太平洋岛屿',                   en: 'South Pacific — Pacific Islands' },
    'zones.oceania.desc':  { zh: '业务覆盖澳大利亚大陆，并连接新西兰、斐济、巴布亚新几内亚等南太平洋岛国。我们拥有自营仓储设施，提供端到端的全程物流，承接整箱（FCL）、拼箱（LCL）、散货及各类集装箱运输；资深清关团队负责商品归类、加固打板、门到门配送，直达海外收货人。', en: 'We cover mainland Australia and connect New Zealand, Fiji, Papua New Guinea and other South Pacific islands. With our own warehousing and end-to-end logistics, we handle full container (FCL), LCL, break-bulk and all container types. Our experienced customs team manages classification, cargo securing and door-to-door delivery straight to overseas consignees.' },
    'zones.mideast.title': { zh: '中东及北非',                              en: 'Middle East & North Africa' },
    'zones.mideast.desc':  { zh: '专注连接中东、欧洲与非洲的核心海运航线，在迪拜、多哈设有自营仓库，可辐射 GCC 各国及北非、东非、西非主要港口。我们承接大型基建项目，提供散货船租赁、大宗商品运输，以及门到港双清包税的一站式物流方案。', en: 'We focus on the key shipping lanes linking the Middle East, Europe and Africa, with our own warehouses in Dubai and Doha serving GCC countries and major ports across North, East and West Africa. We support large infrastructure projects with bulk-vessel chartering and commodity shipping, plus door-to-port, tax-inclusive one-stop solutions.' },
    'zones.africa.title':  { zh: '非洲 — 全面覆盖',                         en: 'Africa — Full Coverage' },
    'zones.africa.desc':   { zh: '面向全球目的地，我们提供全方位的清关、单证与报关服务，包括整箱及拼箱海运订舱、拖车运输、单/双清包税等。我们的跨境物流一体化链条覆盖清关、拖车与末端配送，助力把握非洲蓬勃发展的基建与物流市场机遇。', en: 'For destinations worldwide, we provide full customs clearance, documentation and declaration services — including FCL & LCL bookings, trucking and single/double-clearance tax packages. Our integrated cross-border chain covers clearance, haulage and last-mile delivery, unlocking Africa\'s fast-growing infrastructure and market opportunities.' },

    /* ---- Service page ---- */
    'service.title':       { zh: '我们的服务',                              en: 'Our Services' },
    'service.air.title':   { zh: '国际空运',                                en: 'Air Freight' },
    'service.air.desc':    { zh: '承接各类空运业务，包括集运与门到门配送；提供空陆多式联运，涵盖上门取件、派送、报关、清关及仓储代理，并为文件、样品与小包裹提供一站式运输。', en: 'We handle all types of air freight, including consolidation and door-to-door delivery. Our air-and-road multimodal service covers pickup, delivery, customs declaration, clearance and warehousing — plus one-stop shipping for documents, samples and small parcels.' },
    'service.customs.title':{ zh: '进出口清关',                             en: 'Import & Export Customs' },
    'service.customs.desc': { zh: '依托集团广泛的海内外代理网络，我们迅速安排进出口货物的接货、订舱与报关，锁定船期与航班，并实时向客户更新货物状态。货物到达后，提供单证交接、提货、海关查验、商检及门到门配送等全套后续服务。', en: 'Backed by our group’s extensive agent network, we quickly arrange receiving, space booking and customs declaration for imports and exports, lock in sailings and flights, and update you in real time. After arrival we handle document exchange, pickup, customs inspection, commodity checks and door-to-door delivery.' },
    'service.sea.title':   { zh: '国际海运',                                en: 'Ocean Freight' },
    'service.sea.desc':    { zh: '无论您需要整箱、拼箱还是项目货运输，我们都能提供量身定制的海运方案。团队全程协作、稳扎稳打，以可靠的船期与透明的信息，为全球客户带来安心、高效的海运体验。', en: 'Whether you need FCL, LCL or project cargo, we tailor an ocean solution to fit. Our team works hand in hand and stays the course, delivering dependable sailings and clear, transparent updates for clients around the world.' },
    'service.express.title':{ zh: '国际快递',                               en: 'International Express' },
    'service.express.desc': { zh: '与 DHL、TNT、FedEx、UPS 四大国际快递合作，服务覆盖 220 个国家和地区、超过 13 万个目的地。您可按渠道、时效、特殊货品与预算灵活选择，确保高效送达。', en: 'We partner with DHL, TNT, FedEx and UPS, reaching 220 countries and territories and over 130,000 destinations. Choose the channel, speed, cargo type and budget that fit — and we’ll get it there efficiently.' },

    /* ---- About page ---- */
    'about.title':         { zh: '关于我们',                                en: 'About Us' },
    'about.p1':            { zh: '我们的客户遍布全球，重点覆盖南太平洋、中东与非洲，主要来自澳大利亚、斐济、巴布亚新几内亚、新西兰、沙特、约旦、卡塔尔、阿联酋、埃及与几内亚。客户满意是我们不变的追求，我们投入时间与资源，为每一位客户创造最大价值。', en: 'Our clients span the globe, with a focus on the South Pacific, the Middle East and Africa — from Australia, Fiji, Papua New Guinea and New Zealand to Saudi Arabia, Jordan, Qatar, the UAE, Egypt and Guinea. Your satisfaction is our priority, and we invest the time and resources to maximize value for every client.' },
    'about.p2':            { zh: '我们提供一站式全流程服务，涵盖单证制作、商检、缴税、报关、门到门运输及清关派送。专业团队全天 24 小时在广州收货，并提供全国上门取件，让您随时掌握准确的货物动态。', en: 'We offer a true one-stop service — documentation, inspection, duties, customs declaration, door-to-door transport and cleared delivery. Our team receives cargo 24/7 in Guangzhou and picks up nationwide, so you always know exactly where your shipment is.' },
    'about.one_stop':       { zh: '一站式解决方案：从单证、商检、出口报关到清关与末端配送，全部由我们团队打理，运输全程安心无忧。', en: 'One-stop solution: we handle everything — documents, inspection, export declaration, clearance and final delivery — so your shipment moves with total peace of mind.' },
    'about.easy_process':   { zh: '简单四步：您只需提供装箱单与收发件人信息，我们即安排全国上门取件，物流体验轻松又省心。', en: 'Effortless process: just send us the packing list and sender/receiver details. We arrange nationwide pickup, making logistics simple and hassle-free.' },
    'about.cta':           { zh: '欢迎随时联系我们咨询！',                    en: 'Get in touch — we’re happy to help with any inquiry.' },

    /* ---- Contact page ---- */
    'contact.heading':     { zh: '本润物流',                                en: 'GREENLINE LOGISTICS' },
    'contact.sub':         { zh: '国际货运代理与综合物流解决方案',           en: 'International Freight Forwarding & Integrated Logistics' },
    'contact.phone.label': { zh: '电话',                                    en: 'Phone' },
    'contact.email.label': { zh: '邮箱',                                    en: 'Email' },
    'contact.addr.label':  { zh: '地址',                                    en: 'Address' },

    /* ---- Footer ---- */
    'footer.company':      { zh: '本润物流——专业的国际货运代理与综合物流服务商。', en: 'Your professional partner for international freight forwarding and integrated logistics.' },
    'footer.serving':      { zh: '自成立以来，持续服务南太平洋、中东及非洲客户。', en: 'Serving clients across the South Pacific, the Middle East and Africa since our founding.' },
    'footer.contact':      { zh: '联系方式',                                en: 'Contact' },
    'footer.address':      { zh: '地址',                                    en: 'Address' },
    'footer.copyright':    { zh: '© 2026 本润物流——国际货运代理。保留所有权利。', en: '© 2026 GREENLINE LOGISTICS — International Freight Forwarding. All rights reserved.' },
    'footer.copyright.short': { zh: '© 2026 本润物流。保留所有权利。',       en: '© 2026 GREENLINE LOGISTICS — All rights reserved.' },

    /* Floating QR Sidebar */
    'sidebar.whatsapp': { zh: 'WhatsApp', en: 'WhatsApp' },
    'sidebar.wechat':   { zh: '微信',       en: 'WeChat' },

    /* Left Enquiry Sidebar */
    'enq.cta': { zh: '免费询价', en: 'Get a Free Quote' }
  };

  var curLang = localStorage.getItem('gl-lang') || 'en';

  function syncSwitch() {
    var sw = document.querySelector('.lang-switch');
    if (sw) sw.textContent = curLang === 'zh' ? '中文' : 'English';
  }

  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') lang = 'en';
    curLang = lang;
    localStorage.setItem('gl-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    apply();
    syncSwitch();
    // Broadcast so dynamic areas (e.g. tracking result) can re-render
    try { window.dispatchEvent(new Event('gl-lang-change')); } catch (e) {}
  }

  function t(key) {
    var entry = dict[key];
    if (!entry) return key;
    return entry[curLang] || entry['en'] || key;
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });
    // Also handle elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-ph'));
    });
    // Update html lang attribute
    document.documentElement.lang = curLang === 'zh' ? 'zh-CN' : 'en';
  }

  function init() {
    // Bind lang switcher
    document.querySelectorAll('.lang-switch').forEach(function (el) {
      el.addEventListener('click', function () {
        setLang(curLang === 'zh' ? 'en' : 'zh');
      });
    });
    apply();
    syncSwitch();
  }

  // Auto-init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { setLang: setLang, t: t, curLang: function () { return curLang; } };
})();
