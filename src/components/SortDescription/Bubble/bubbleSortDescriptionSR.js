import "../style.css"

// import PyhtonCode from './Codes/Python'
// import CCode from './Codes/C'
// import CSCode from './Code/CS'
// import JavaCode from './Code/Java'
// import JavaScriptCode from './Code/JavaScript'
// import PHPCode from './Code/PHP'

export default function bubbleSortDescription(){
    return(
        <div className="description">
            <h1>Sortiranje mehurom</h1>
            <div className="desc_body row">
                <div className="column">
                    <p>
                        <a
                            href="https://sr.wikipedia.org/wiki/Sortiranje_mehurom"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sortiranje mehurom (Bubble sort)
                        </a>{' '}
                        je algoritam koji radi tako što prolazi kroz niz elemenata
                        i upoređuje svaka dva susedna člana
                        niza, pa ako su u pogrešnom redosledu, menja im mesta. 
                        Prolazak kroz listu se ponavlja sve dok lista ne bude sortirana. 
                        Ovaj algoritam radi dobro na nizovima koji imaju mali broj elemenata, 
                        ili koji su polusortirani.
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
                                        O(n)
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