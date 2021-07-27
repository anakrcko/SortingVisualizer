import "../style.css"
// import PyhtonCode from './Codes/Python'
// import CCode from './Codes/C'
// import CSCode from './Code/CS'
// import JavaCode from './Code/Java'
// import JavaScriptCode from './Code/JavaScript'
// import PHPCode from './Code/PHP'

export default function quickSortDescription(){
    return(
        <div className="description">
            <h1>Kviksort</h1>
            <div className="row desc_body">
                <div className="column">
                    <p>
                        <a
                        href="https://sr.wikipedia.org/sr-el/%D0%9A%D0%B2%D0%B8%D0%BA%D1%81%D0%BE%D1%80%D1%82"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Kviksort (Quick Sort)
                        </a>{' '}
                        je efikasan algoritam sortiranja koji je u praksi brži od npr. Merge Sort. 
                        Međutim, nije stabilan algoritam zato što se relativne 
                        pozicije elemenata ne čuvaju. Radi na principu "podeli pa vladaj". 
                        Sortira tako što deli veliki niz na dva manja niza: mali elementi i veliki elementi. 
                        Zatim rekurzivno sortira podnizove. Koraci su:
                    </p>
                    <ol>
                        <li>
                            Bira se random element iz niza, taj element se zove pivot.
                        </li>
                        <li>
                            Prebaciti pivot na početku niza.
                        </li>
                        <li>
                            <em>Particionisanje:</em> prebaciti sve elemente koji imaju 
                            nižu vrednost od pivota, levo od njega i sve koje imaju nižu vrednost
                             desno od njega (jednake vrednosti mogu na obe strane). Nakon particionisanja 
                             element pivot je na svom konačnom mestu u nizu i neće više biti potrebe premeštati 
                             ga. 
                        </li>
                        <li>
                            Sad imamo dva podniza, levo od pivota (elementi manji od njega) i 
                             desno od pivota (elementi veći od njega). Algoritam se ponavlja za ta dva podniza.
                        </li>
                    </ol>
                </div>
                <div className="performance column">
                    <h3>Performanse</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Najgora performansa</td>
                                <td>
                                <code> 
                                    <span>
                                        O(<em>n</em>
                                        <sup>2</sup>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Prosečna performansa</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n </em>log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Najbolja performansa</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n </em>log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Najgora prostorna kompleksnost</td>
                                <td>
                                <code>
                                    <span>
                                        O(log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>
                            <tr><td colSpan='2'>Gde je n broj elemenata koji se sortiraju.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}