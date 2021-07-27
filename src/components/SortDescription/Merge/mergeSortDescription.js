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
            <h1>Merge Sort</h1>
            <div className="row desc_body">
                <div className="column">
                    <p>
                        <a
                        href="https://en.wikipedia.org/wiki/Merge_sort"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Merge Sort
                        </a>{' '}
                        is an efficient, stable sorting algorith that makes use of the
                        divide and conquer strategy. Conceptually the algorithm works as
                        follows:
                    </p>
                    <ol>
                        <li>
                        Divide the unsorted list into <em>n</em> sublists, each
                        containing one element(a list of one element is considered
                        sorted)
                        </li>
                        <li>
                        Repeatedly merge sublists to produce new sorted sublists until
                        there is only one sublist remaining. This will be the sorted
                        list.
                        </li>
                    </ol>
                </div>
                <div className="performance column">
                    <h3>Performance</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Worst-case time complexity</td>
                                <td>
                                <code> 
                                    <span>
                                        O(<em>n</em> log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Average time complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n</em> log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Best-case time complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n</em> log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Worst-case space complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>
                            <tr><td colSpan='2'>Where n is the number of items being sorted.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
