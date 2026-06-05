import ImageBlock from '../components/ImageBlock.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import TableBlock from '../components/TableBlock.jsx'

const risks = [
  ['Commercieel risico', 'Analyseer concurrentiedruk, klantverloop, prijsdruk en marktontwikkelingen in de Nederlandse telecommarkt.'],
  ['Bedrijfsrisico', 'Beoordeel netwerkstoringen, cyberdreigingen, investeringsprojecten, leveranciers en operationele afhankelijkheden.'],
  ['Financieel risico', 'Onderzoek rente, schulden, investeringsdruk, dividendbeleid en kasstromen van KPN.'],
  ['Risicoprofiel', 'Vat samen welke risico\'s voor KPN het zwaarst wegen en hoe deze worden beheerst.'],
]

export default function Risks() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="KPN-risico" title="Risicoanalyse KPN" text="Breng de belangrijkste risico&apos;s voor KPN gestructureerd in kaart en koppel ze aan impact, waarschijnlijkheid en beheersmaatregelen." />
      <div className="info-grid">{risks.map(([risk, text]) => <article className="info-card" key={risk}><h2>{risk}</h2><p>{text}</p></article>)}</div>
      <TableBlock title="Risicomatrix KPN" columns={['Risico', 'Kans', 'Impact', 'Maatregel']} rows={[['Cybersecurity', 'Vul in', 'Vul in', 'Vul beheersmaatregel in'], ['Netwerkinvesteringen', 'Vul in', 'Vul in', 'Vul beheersmaatregel in']]} />
      <div className="placeholder-grid"><ImageBlock title="Grafiek risicoprofiel KPN" caption="Voeg hier later een matrix, grafiek of afbeelding toe." /></div>
    </section>
  )
}
