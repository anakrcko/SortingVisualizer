import "../style.css"
// import PyhtonCode from './Codes/Python'
// import CCode from './Codes/C'
// import CSCode from './Code/CS'
// import JavaCode from './Code/Java'
// import JavaScriptCode from './Code/JavaScript'
// import PHPCode from './Code/PHP'

export default function selectionSortDescription(){
    return(
        <div className="description">
            <h1>Sortiranje selekcijom</h1>
            <div className="row desc_body">
                <div className="column" >
                    <p>
                        <a
                            href="https://sr.wikipedia.org/sr-el/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%B0%D1%9A%D0%B5_%D1%81%D0%B5%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%98%D0%BE%D0%BC"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sortiranje selekcijom (Selection Sort)
                        </a>{' '}
                        je algoritam koji se zasniva na principu grube sile, tj. obrađuje svaki 
                        element posebno. Sortira niz elemenata tako što ga prvo celog pretraži 
                        ne bi li našao prvi odgovarajući element (najveći ili najmanji) i smestio 
                        ga na prvo mesto u nizu. Zatim pretražuje celi ostatak niza (bez prvog mesta) kako bi našao 
                        drugi element i smestio na drugo mesto u nizu. Zatim se postupak ponavlja za ostatak
                        niza bez prvog i drugog mesta itd.
                    </p>
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