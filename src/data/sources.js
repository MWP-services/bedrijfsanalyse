// Voeg KPN-bronnen toe per categorie. De bronnenpagina toont deze data automatisch.
export const sourceCategories = [
  {
    category: 'Jaarverslagen',
    items: [
      {
        title: 'KPN Integrated Annual Report 2025',
        note: 'Officieel jaarverslag. Gebruikt voor service revenues, adjusted EBITDA AL, capex, free cash flow, dividend, ROCE en strategische toelichting.',
        url: 'https://ir.kpn.com/financials/annual-reports.htm',
      },
      {
        title: 'VodafoneZiggo Annual Report 2024/2025',
        note: 'Gebruikt voor vergelijking van financiele positie, solvabiliteit en telecominvesteringen.',
        url: 'https://www.vodafoneziggo.nl/en/about-us/annual-report/',
      },
    ],
  },
  {
    category: 'Financiele bronnen',
    items: [
      {
        title: 'Beurs FD - KPN Koninklijke | Bedrijfsgegevens',
        note: 'Gebruikt voor omzet, EBITDA, nettowinst, totaal activa, ROE, ROA, dividend, rentedekking en werknemersaantal.',
        url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke',
      },
      {
        title: 'Beurs FD - KPN Koninklijke | Kerncijfers',
        note: 'Gebruikt voor balansgegevens, kengetallen en controle van liquiditeits- en activiteitsratio\'s.',
        url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke/kerncijfers',
      },
      {
        title: 'KPN Investor Relations - jaarresultaten 2025',
        note: 'Gebruikt voor toelichting op jaarresultaten, groei, outlook, investeringen en strategie.',
        url: 'https://ir.kpn.com/news-and-events/press-releases.htm',
      },
      {
        title: 'KPN Shareholder Center - Dividends',
        note: 'Gebruikt voor dividendinformatie en controle van dividend per aandeel.',
        url: 'https://ir.kpn.com/shareholder-center/dividend.htm',
      },
    ],
  },
  {
    category: 'Nieuwsartikelen',
    items: [
      {
        title: 'Het Financieele Dagblad - artikelen over KPN',
        note: 'Gebruikt als journalistieke contextbron voor marge, klantbehoud, glasvezeluitrol, kwartaalprestaties en marktontwikkelingen. Financiele kerncijfers zijn gebaseerd op Beurs FD en KPN Annual Report.',
        url: 'https://fd.nl/zoeken?q=KPN',
      },
    ],
  },
  {
    category: 'Databanken',
    items: [
      { title: 'Telecom- en marktdatabanken', note: 'Gebruik voor branchegegevens, macrodata en marktontwikkelingen rond telecom.', url: 'https://example.com' },
      {
        title: 'Autoriteit Consument & Markt - Telecommonitor',
        note: 'Gebruikt voor marktontwikkelingen, concurrentie en structuur van de Nederlandse telecomsector.',
        url: 'https://www.acm.nl/nl/onderwerpen/telecommunicatie/telecomsector-in-cijfers',
      },
    ],
  },
  {
    category: 'Overige bronnen',
    items: [
      { title: 'Modellen en collegesheets', note: 'Gebruik voor Ashridge, SWOT, risicoanalyse en financiele analysemethoden.', url: 'https://example.com' },
      {
        title: 'Porter, M. E. - The Five Competitive Forces That Shape Strategy',
        note: 'Gebruikt als theoretisch model voor de brancheanalyse van de telecomsector.',
        url: 'https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy',
      },
    ],
  },
  {
    category: 'APA-bronnen financiele analyse',
    items: [
      {
        title: 'Het Financieele Dagblad. (2026). KPN Koninklijke | Bedrijfsgegevens. Beurs FD.',
        note: 'APA-verwijzing voor bedrijfsgegevens van KPN.',
        url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke',
      },
      {
        title: 'Het Financieele Dagblad. (2026). KPN Koninklijke | Kerncijfers. Beurs FD.',
        note: 'APA-verwijzing voor kerncijfers van KPN.',
        url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke/kerncijfers',
      },
      {
        title: 'KPN. (2026). KPN Integrated Annual Report 2025. Royal KPN N.V.',
        note: 'APA-verwijzing voor het officiele jaarverslag.',
        url: 'https://ir.kpn.com/financials/annual-reports.htm',
      },
      {
        title: 'KPN. (2026). KPN delivered on FY 2025 outlook; fully on track to achieve mid-term ambitions. Royal KPN N.V.',
        note: 'APA-verwijzing voor investor-relations toelichting op de jaarresultaten.',
        url: 'https://ir.kpn.com/news-and-events/press-releases.htm',
      },
      {
        title: 'KPN. (2026). Shareholder Center: Dividends. Royal KPN N.V.',
        note: 'APA-verwijzing voor dividendinformatie.',
        url: 'https://ir.kpn.com/shareholder-center/dividend.htm',
      },
    ],
  },
]
