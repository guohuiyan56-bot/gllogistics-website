/* ============================================================
   BENRUN LOGISTICS — i18n Bilingual (zh / en)
   Load this script in <head> of every page.
   Usage: add data-i18n="key" to any element.
   ============================================================ */

var I18N = (function () {
  'use strict';

  var dict = {
    /* ---- Common / Navigation ---- */
    'nav.home':        { zh: '首页',          en: 'Home' },
    'nav.zones':       { zh: '服务区域',       en: 'Service Zones' },
    'nav.service':     { zh: '服务',           en: 'Service' },
    'nav.about':       { zh: '关于我们',       en: 'About Us' },
    'nav.contact':     { zh: '联系我们',       en: 'Contact Us' },
    'nav.track':       { zh: '货物追踪',       en: 'Track Order' },
    'logo':            { zh: '本润物流',       en: 'BENRUN LOGISTICS' },
    'search.ph':       { zh: '搜索...',        en: 'Search...' },
    'search.results':  { zh: '搜索结果',        en: 'Search Results' },

    /* ---- Index / Home ---- */
    'home.hero.title':     { zh: '国际物流',                 en: 'International Logistics' },
    'home.hero.sub':       { zh: '可靠货运，覆盖大洋洲、中东及非洲', en: 'Reliable Freight Forwarding Across Oceania, Middle East & Africa' },
    'home.core.title':     { zh: '核心优势',                 en: 'Core Advantages' },
    'home.core.ocean':     { zh: '国际海运',                 en: 'International Ocean Shipping' },
    'home.core.air':       { zh: '国际空运',                 en: 'International Air Freight' },
    'home.core.door':      { zh: '门到门海运',               en: 'Door-to-door Sea Freight' },
    'home.core.global':    { zh: '稳定全球配送',             en: 'Stable Global Delivery' },
    'home.banner.title':   { zh: '专业运输与物流',           en: 'Professional Transportation & Logistics' },
    'home.banner.sub':     { zh: '全程顺畅 shipping',         en: 'Smooth Shipping for You All the Way' },
    'home.service.title':  { zh: '服务项目',                 en: 'Service Items' },
    'track.title':         { zh: '货物追踪',                 en: 'Cargo Tracking' },
    'track.sub':           { zh: '输入单号查询货物状态',     en: 'Enter your tracking number to view shipment status' },
    'track.ph':            { zh: '输入单号...',              en: 'Enter tracking number...' },
    'track.btn':           { zh: '查询',                    en: 'Track' },
    'track.hint':          { zh: '单号/提单/柜号由后台维护', en: 'Order / B/L / Container no. maintained by our back-office team' },
    'track.code':          { zh: '单号：',                   en: 'CODE: ' },
    'track.updated':       { zh: '更新时间：',               en: 'Updated: ' },
    'track.nf':            { zh: '未找到该单号信息，请核对后重试或联系客服。', en: 'No information found for this number. Please verify or contact our support.' },

    /* ---- Service Zones ---- */
    'zones.title':         { zh: '服务区域',                 en: 'Service Zones' },
    'zones.intro1':        { zh: '依托完善的运输体系、强大的资源整合能力和全球服务网络，我们不断拓展国际业务版图，为全球客户提供稳定、高效、专业的供应链与综合物流解决方案。多年来，我们持续优化供应链管理流程，积累全球物流资源，建立了科学合理的运输体系，确保货物以更高效率安全准时送达全球每一个角落，全程透明可控。', en: 'Supported by comprehensive transportation systems, robust resource integration capabilities and a global service network, we keep expanding our international footprint to deliver stable, efficient and professional supply chain & integrated logistics solutions for clients worldwide. Over the years, we have continuously optimized our supply chain management procedures, built up global logistics resources. We have developed a sound and rational transportation system to guarantee safe and on-time delivery of goods to every corner of the globe with higher efficiency, and full transparency.' },
    'zones.intro2':        { zh: '凭借先进的物流框架和成熟的供应链策略，我们快速响应多元化市场需求，帮助客户降低运营成本、提升运营效率，实现从起运地到目的地的无缝货物追踪。无论您寻求跨区域合作还是全球市场拓展，我们都将为您提供精准高效的物流服务，让您的货物安全迅速地送达全球目的地。', en: 'Equipped with advanced logistics frameworks and mature supply chain strategies, we respond swiftly to diverse market demands, helping clients cut operational costs and boost operational efficiency, enabling seamless shipment tracking from origin to end markets. Whether you aim for cross-regional cooperation or global market expansion, we deliver precise, efficient logistics services to get your goods shipped safely and rapidly to global destinations.' },
    'zones.intro3':        { zh: '我们始终以诚信为核心原则，以客户需求为优先，以专业服务为保障，与全球合作伙伴建立长期稳定的合作关系。未来，我们将进一步提升国际服务能力，加强资源共享与价值共创，与全球客户携手共进，共同培育持久、稳定、可持续的发展。', en: 'We always uphold integrity as our core principle, take client demands as priority and rely on professional services as our guarantee, building long-term stable partnerships with global collaborators. Moving forward, we will further upgrade our international service capacity, boost resource sharing and value co-creation, and stand side by side with clients across the globe to jointly foster long-lasting, stable and sustainable growth.' },
    'zones.areas.title':   { zh: '服务区域',                 en: 'Service Areas' },
    'zones.oceania.title': { zh: '大洋洲 — 太平洋岛屿',      en: 'Oceania — Pacific Islands' },
    'zones.oceania.desc':  { zh: '覆盖澳大利亚大陆，连接新西兰、斐济、巴布亚新几内亚等南太平洋岛国。拥有自营仓库和仓储设施，提供端到端物流全覆盖，承接整箱（FCL）、拼箱（LCL）、散货、低板箱及全品类集装箱运输。资深清关团队负责商品归类、报关加固、门到门配送，确保直送海外买家。同时提供配套供应链金融服务。', en: 'Covers mainland Australia, connecting New Zealand, Fiji, Papua New Guinea and other South Pacific islands. We own self-operated terminals, warehousing with full end-to-end logistics coverage, offering full container (FCL), LCL, loose cargo, low-platform containers and all-category container shipping. Our seasoned customs clearance team handles commodity classification, securing construction, door-to-door delivery, ensuring direct door-to-door overseas buyers. We also provide synchronized supply-chain financial support.' },
    'zones.mideast.title': { zh: '中东及北非',                en: 'Middle East & North Africa' },
    'zones.mideast.desc':  { zh: '专注中东、欧洲、非洲之间的核心贸易航线，在迪拜和多哈设有自营仓库，可辐射GCC国家及北非、东非、西非主要港口。承接大型基础设施项目，提供散货船租赁、大宗货物运输，以及门到港双清包税一站式物流解决方案。', en: 'We specialize in core trade lanes linking the Middle East, Europe and Africa, with self-owned warehouses in Dubai and Doha that facilitate distribution across GCC nations, North, East and West Africa\'s major ports. We cater to large-scale infrastructure projects, offering piling vessel chartering, bulk cargo shipping, as well as door-to-port double-clearance tax-inclusive one-stop-logistics solutions.' },
    'zones.africa.title':  { zh: '非洲 — 全面覆盖',           en: 'Africa — Full Coverage' },
    'zones.africa.desc':   { zh: '为全球目的地提供全方位清关、单证办理和报税服务，包括整箱及拼箱海运订舱、拖车运输、报关、单/双清包税等业务。我们的跨境物流一体化链条覆盖清关、拖车和末端配送，助力非洲蓬勃发展的基建贸易机遇。', en: 'We provide all-round customs clearance, document handling and tax declaration services for global destinations, including booking for FCL & LCL sea freight, truck haulage, customers\' declaration, single and double-clearance tax-inclusive packages. Our all-in-one cross-border logistics chain covers customs clearance, haulage and last-mile delivery, unlocking booming infrastructure trade opportunities in Africa.' },

    /* ---- Service page ---- */
    'service.title':       { zh: '我们的服务',               en: 'Our Services' },
    'service.air.title':   { zh: '空运服务',                 en: 'Air Transportation' },
    'service.air.desc':    { zh: '承接各类空运业务，包括集运和门到门配送。提供空陆多式联运，涵盖取件、配送、报关、清关及仓储代理服务，以及文件、样品和小包裹的一站式运输。', en: 'We handle all types of air freight, including consolidated shipment and door-to-door delivery. We offer multimodal transport combining air and land transportation. We provide pickup, delivery, customs declaration, clearance and warehousing agency services, as well as one-stop shipping for documents, samples and small parcels.' },
    'service.customs.title':{ zh: '进出口清关',               en: 'Import & Export Customs Clearance' },
    'service.customs.desc': { zh: '依托集团庞大的国内外代理网络，我们快速安排进出口货物的接货、订舱和报关，确定船期和航班，实时向客户更新货物状态。货物到达后，提供全套后续服务，包括单证交接与提货、海关查验、商检和门到门配送。', en: 'Backed by our group\'s extensive domestic and overseas agent network, we swiftly arrange cargo receiving, booking space and customs declaration for import & export goods, fix sailing and flight schedules, and update shipment status to clients in real time. After cargo arrival, we provide full follow-up services including document exchange & pickup, customs clearance, commodity inspection and door-to-door delivery.' },
    'service.sea.title':   { zh: '海运服务',                 en: 'Sea Transportation' },
    'service.sea.desc':    { zh: '无论您需要什么物流服务，找我们就对了。我们秉承"奋斗不息、追求卓越"的理念，进步之旅永不止步。团队全心全意合作、坚持不懈，为全球客户提供优质的海运服务。', en: 'Whatever logistics service you need, just turn to us. We uphold the philosophy of "Strive endlessly, pursue excellence". Our journey of progress never ends. Our team cooperates wholeheartedly and perseveres to deliver premium sea freight services for clients worldwide.' },
    'service.express.title':{ zh: '国际快递',                en: 'International Express' },
    'service.express.desc': { zh: '与DHL、TNT、FedEx、UPS四大国际快递公司合作，服务覆盖220个国家和地区，超过13万个目的地。客户可根据需求选择配送渠道、时效、特殊货品类型和运费预算，确保高效运输。', en: 'We cooperate with four major international couriers: DHL, TNT, FedEx and UPS. Our service covers 220 countries and regions, reaching over 130,000 destinations. Clients may select delivery channels, timetables, special cargo types and freight budgets as needed to ensure efficient shipment.' },

    /* ---- About page ---- */
    'about.title':         { zh: '关于我们',                 en: 'About Us' },
    'about.p1':            { zh: '我们的客户遍布全球，覆盖大洋洲、中东和非洲地区。主要客户来自澳大利亚、斐济、巴布亚新几内亚、新西兰、沙特阿拉伯、约旦、卡塔尔、阿联酋、埃及和几内亚。客户满意是我们的首要目标。我们投入时间和精力以及资源，为每一位客户创造最大价值。', en: 'Our clients are located all over the world, covering Oceania, the Middle East and Africa. Our major customers come from Australia, Fiji, Papua New Guinea, New Zealand, Saudi Arabia, Jordan, Qatar, the United Arab Emirates, Egypt and Guinea. Customer satisfaction is our top priority. We devote time and energy and resources to maximize value for every client.' },
    'about.p2':            { zh: '我们提供一站式全套服务，包括单证制作、商检、缴税、报关、门到门运输和清关配送至您指定地址。专业服务。我们在广州24小时接受货物，并提供全国上门取件服务。您可以随时追踪准确的货物动态。', en: 'We provide one-stop full services including document preparation, commodity inspection, tax payment, customs declaration, door-to-door transportation and customs clearance delivery to your designated address. Professional service. We accept cargo 24 hours a day in Guangzhou and offer nationwide pickup service. You can track accurate shipment updates at any time.' },
    'about.one_stop':       { zh: '一站式解决方案：我们的团队处理所有流程，包括单证制作、商检、出口报关、清关和最终配送，确保安全无忧的运输。', en: 'One-stop solution: Our team handles all procedures including documentation, inspection, export declaration, customs clearance and final delivery, ensuring safe and hassle-free shipping.' },
    'about.easy_process':   { zh: '便捷的服务流程：您只需提供装箱单和收发件人信息。我们安排全国上门取件，快捷便利的物流体验。', en: 'Easy service process: You only need to provide packing list and sender/receiver information. We arrange door pickup nationwide for fast and convenient logistics.' },
    'about.cta':           { zh: '欢迎随时联系我们咨询！',     en: 'Feel free to contact us for inquiries!' },

    /* ---- Contact page ---- */
    'contact.heading':     { zh: '本润物流',                 en: 'BENRUN LOGISTICS' },
    'contact.sub':         { zh: '国际货运代理与综合物流解决方案', en: 'International Freight Forwarding & Integrated Logistics Solutions' },
    'contact.phone.label': { zh: '电话',                     en: 'Phone' },
    'contact.email.label': { zh: '邮箱',                     en: 'Email' },
    'contact.addr.label':  { zh: '地址',                     en: 'Address' },

    /* ---- Footer ---- */
    'footer.company':      { zh: '本润物流——专业的国际货运代理与综合物流服务。', en: 'Professional international freight forwarding and integrated logistics services.' },
    'footer.serving':      { zh: '自成立以来服务大洋洲、中东及非洲客户。', en: 'Serving clients across Oceania, Middle East & Africa since establishment.' },
    'footer.contact':      { zh: '联系方式',                 en: 'Contact' },
    'footer.address':      { zh: '地址',                     en: 'Address' },
    'footer.copyright':    { zh: '© 2026 本润物流——国际货运代理。保留所有权利。', en: '&copy; 2026 BENRUN LOGISTICS — International Freight Forwarding. All rights reserved.' },
    'footer.copyright.short': { zh: '© 2026 本润物流。保留所有权利。', en: '&copy; 2026 BENRUN LOGISTICS — All rights reserved.' }
  };

  var curLang = localStorage.getItem('gl-lang') || 'en';

  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') lang = 'en';
    curLang = lang;
    localStorage.setItem('gl-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    apply();
    // Update switcher button text
    var sw = document.querySelector('.lang-switch');
    if (sw) sw.textContent = lang === 'zh' ? '中文' : 'English';
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
  }

  // Auto-init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { setLang: setLang, t: t, curLang: function () { return curLang; } };
})();
