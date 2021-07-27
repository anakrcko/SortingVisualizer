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
            <h1>Quick Sort</h1>
            <div className="row desc_body">
                <div className="column">
                    <p>
                        <a
                        href="https://en.wikipedia.org/wiki/Quicksort"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Quick Sort
                        </a>{' '}
                        is an efficient, in-place sorting algorith that in practice is
                        faster than MergeSort and HeapSort. However, it is not a stable
                        sorting algorithm, meaning that the relative positioning of
                        equal sort items is not preserved. Quicksort is a divide and
                        conquer algorithm. Quicksort first divides a large array into
                        two smaller sub-arrays: the low elements and the high elements.
                        Quicksort can then recursively sort the sub-arrays. The steps
                        are:
                    </p>
                    <ol>
                        <li>
                            Pick an element, called a pivot, from the array. This is
                            usually done at random.
                        </li>
                        <li>
                            Move pivot element to the start of the array.
                        </li>
                        <li>
                            <em>Partitioning:</em> reorder the array so that all elements
                            with values less than the pivot come before the pivot, while
                            all elements with values greater than the pivot come after it
                            (equal values can go either way). After this partitioning, the
                            pivot is in its final position. This is called the{' '}
                            <em>partition</em> operation.
                        </li>
                        <li>
                            Recursively apply the above steps to the sub-array of elements
                            with smaller values and separately to the sub-array of
                            elements with greater values.
                        </li>
                    </ol>
                    <p>
                        The base case of the recursion is an array of size zero or one,
                        which are sorted by definition.
                    </p>
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
                                        O(<em>n</em>
                                        <sup>2</sup>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Average time complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n </em>log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Best-case time complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(<em>n </em>log <em>n</em>)
                                    </span>
                                </code>
                                </td>
                            </tr>

                            <tr>
                                <td>Worst-case space complexity</td>
                                <td>
                                <code>
                                    <span>
                                        O(log <em>n</em>)
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