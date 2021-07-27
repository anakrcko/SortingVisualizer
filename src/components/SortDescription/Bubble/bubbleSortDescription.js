import "../style.css"

export default function bubbleSortDescription({codeLanguage, handleCodeLanguage}){
    return(
        <div className="description">
            <h1>Bubble Sort</h1>
            <div className="desc_body row">
                <div className="column">
                    <p>
                        <a
                            href="https://en.wikipedia.org/wiki/Bubble_sort"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Bubble Sort
                        </a>{' '}
                        is a simple sorting algorithm that repeatedly steps through the
                        list, compares adjacent elements and swaps them if they are in the
                        wrong order. The pass through the list is repeated until the list
                        is sorted. The algorithm, which is a comparison sort, is named for
                        the way smaller or larger elements "bubble" to the top of the
                        list. Although the algorithm is simple, it is too slow and
                        impractical for most problems.
                    </p>
                </div>
                <div className="column performance">
                    <h3>Performance</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Worst-case time complexity</td>
                                <td>
                                <code> 
                                    <span>
                                        O(n<sup>2</sup>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Average time complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(n<sup>2</sup>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Best-case time complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(n)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Worst-case space complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(n)
                                    </span>
                                </code>
                                </td>
                            </tr>
                            <tr><td colSpan='2'>Where n is the number of items being sorted.{codeLanguage}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}