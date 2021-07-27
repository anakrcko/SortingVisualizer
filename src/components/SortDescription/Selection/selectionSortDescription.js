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
            <h1>Selection Sort</h1>
            <div className="row desc_body">
                <div className="column" >
                    <p>
                        <a
                            href="https://en.wikipedia.org/wiki/Selection_sort"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Selection Sort
                        </a>{' '}
                        is an in-place comparison sorting algorithm that divides the input
                        list into two parts: the sublist of items already sorted, which is
                        built up from left to right at the front (left) of the list, and
                        the sublist of items remaining to be sorted that occupy the rest
                        of the list. Initially, the sorted sublist is empty and the
                        unsorted sublist is the entire input list. The algorithm proceeds
                        by finding the smallest element in the unsorted sublist,
                        exchanging (swapping) it with the leftmost unsorted element
                        (putting it in sorted order), and moving the sublist boundaries
                        one element to the right.
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
                                        O(1)
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