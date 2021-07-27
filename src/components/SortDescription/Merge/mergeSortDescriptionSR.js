import "../style.css"
// import PyhtonCode from './Codes/Python'
// import CCode from './Codes/C'
// import CSCode from './Code/CS'
// import JavaCode from './Code/Java'
// import JavaScriptCode from './Code/JavaScript'
// import PHPCode from './Code/PHP'

export default function mergeSortDescription(){
    return(
        <div className="description">
            <h1>Sortiranje spajanjem</h1>
            <div className="row desc_body">
                <div className="column">
                    <p>
                        <a
                        href="https://sr.wikipedia.org/wiki/Sortiranje_spajanjem"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Sortiranje spajanjem (Merge Sort)
                        </a>{' '}
                        je efikasan, stabilan algoritam  koji koristi strategiju "podeli pa vladaj". 
                        Konceptualno algoritam radi po sledećem principu:
                    </p>
                    <ol>
                        <li>
                            Podeliti nesortiran niz sa <em>n</em> podnizova, od kojih svaki sadrži 
                            1 element (niz od jednog elementa se smatra sortiranim).
                        </li>
                        <li>
                            Više puta spajati podnizove sve dok se ne dobije novi podniz. 
                            Ovo će biti sortiran niz.
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
                                        O(<em>n</em> log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Prosečna performansa</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n</em> log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Najbolja performansa</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n</em> log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Najgora prostorna kompleksnost</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n</em>)
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
