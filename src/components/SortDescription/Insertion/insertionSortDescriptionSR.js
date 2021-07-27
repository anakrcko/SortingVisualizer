import "../style.css"
// import PyhtonCode from './Codes/Python'
// import CCode from './Codes/C'
// import CSCode from './Code/CS'
// import JavaCode from './Code/Java'
// import JavaScriptCode from './Code/JavaScript'
// import PHPCode from './Code/PHP'

export default function insertionSortDescription(){
    return(
        <div className="description">
            <h1>Sortiranje umetanjem</h1>
            <div className="desc_body row">
                <div className="column">
                    <p>
                        <a
                            href="https://sr.wikipedia.org/wiki/Sortiranje_umetanjem"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           Sortiranje umetanjem (Insertion Sort)
                        </a>{' '}
                        je jednostavan algoritam za sortiranje, koji prolazi kroz niz i
                        pri svakom prolasku uklanja jedan element, pronalazi mesto gde pripada taj element
                        u sortiranoj listi i stavlja ga tamo. Ponavlja prolaske sve dok ne ostane bez elemenata
                        u nesortiranoj listi. Ovaj algoritam nije efikasan za velike nizove, već radi dobro 
                        za nizove koji su delimično sortirani. U poređenju sa drugim algoritmima 
                        u praksi je efikasniji od npr. Buble Sort i Selection Sort.
                    </p>
                </div>
                <div className="column performance">
                    <h3>Performanse</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Najgora performansa</td>
                                <td>
                                <code> 
                                    <span>
                                        O(n<sup>2</sup>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Prosečna performansa</td>
                                <td>
                                <code>
                                    <span>
                                        O(n<sup>2</sup>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Najbolja performansa</td>
                                <td>
                                <code>
                                    <span>
                                        O(n)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Najgora prostorna kompleksnost</td>
                                <td>
                                <code>
                                    <span>
                                        O(1)
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