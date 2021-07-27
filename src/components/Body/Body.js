import React from 'react'
import './Body.css'

import bubbleSortDescription from '../SortDescription/Bubble/bubbleSortDescription'
import insertionSortDescription from '../SortDescription/Insertion/insertionSortDescription'
import mergeSortDescription from '../SortDescription/Merge/mergeSortDescription'
import quickSortDescription from '../SortDescription/Quick/quickSortDescription'
import selectionSortDescription from '../SortDescription/Selection/selectionSortDescription'

import bubbleSortDescriptionSR from '../SortDescription/Bubble/bubbleSortDescriptionSR'
import insertionSortDescriptionSR from '../SortDescription/Insertion/insertionSortDescriptionSR'
import mergeSortDescriptionSR from '../SortDescription/Merge/mergeSortDescriptionSR'
import quickSortDescriptionSR from '../SortDescription/Quick/quickSortDescriptionSR'
import selectionSortDescriptionSR from '../SortDescription/Selection/selectionSortDescriptionSR'

//bubble
import bubblePyhtonCode from '../SortDescription/Bubble/Codes/Python'
import bubbleCCode from '../SortDescription/Bubble/Codes/C'
import bubbleCSCode from '../SortDescription/Bubble/Codes/CS'
import bubbleJavaCode from '../SortDescription/Bubble/Codes/Java'
import bubbleJavaScriptCode from '../SortDescription/Bubble/Codes/JavaScript'
import bubblePHPCode from '../SortDescription/Bubble/Codes/PHP'

//insertion
import insertionPyhtonCode from '../SortDescription/Insertion/Codes/Python'
import insertionCCode from '../SortDescription/Insertion/Codes/C'
import insertionCSCode from '../SortDescription/Insertion/Codes/CS'
import insertionJavaCode from '../SortDescription/Insertion/Codes/Java'
import insertionJavaScriptCode from '../SortDescription/Insertion/Codes/JavaScript'
import insertionPHPCode from '../SortDescription/Insertion/Codes/PHP'

//merge
import mergePyhtonCode from '../SortDescription/Merge/Codes/Python'
import mergeCCode from '../SortDescription/Merge/Codes/C'
import mergeCSCode from '../SortDescription/Merge/Codes/CS'
import mergeJavaCode from '../SortDescription/Merge/Codes/Java'
import mergeJavaScriptCode from '../SortDescription/Merge/Codes/JavaScript'
import mergePHPCode from '../SortDescription/Merge/Codes/PHP'

//quick
import quickPyhtonCode from '../SortDescription/Quick/Codes/Python'
import quickCCode from '../SortDescription/Quick/Codes/C'
import quickCSCode from '../SortDescription/Quick/Codes/CS'
import quickJavaCode from '../SortDescription/Quick/Codes/Java'
import quickJavaScriptCode from '../SortDescription/Quick/Codes/JavaScript'
import quickPHPCode from '../SortDescription/Quick/Codes/PHP'

//selection
import selectionPyhtonCode from '../SortDescription/Selection/Codes/Python'
import selectionCCode from '../SortDescription/Selection/Codes/C'
import selectionCSCode from '../SortDescription/Selection/Codes/CS'
import selectionJavaCode from '../SortDescription/Selection/Codes/Java'
import selectionJavaScriptCode from '../SortDescription/Selection/Codes/JavaScript'
import selectionPHPCode from '../SortDescription/Selection/Codes/PHP'

function Body ({
                algorithm,
                language,
                codeLanguage,
				handleCodeLanguage
    }) {
    return (
        <div>
            <div className="legend">
                <div className='legendList'> 
                    <span className='lg compare'></span> 
                    {language === 'sr' ? 'Poređenje' : 'Comparing'}
                </div>
                <div className='legendList'> 
                    <span className='lg swap'></span> 
                    {language === 'sr' ? 
                        algorithm !== 'mergeSort' ? 'Zamena' : 'Uzimanje iz pomoćnog prostora'
                        : algorithm !== 'mergeSort' ? 'Swapping' : 'Taking From Auxillary Space'}
                </div>
                <div className='legendList'> 
                    <span className='lg sorted'></span> {language === 'sr' ? 'Sortirano' : 'Sorted'}
                </div>
            </div>

            <hr></hr>
            <div className="desc">
                {
                    language === 'sr' ?     //if
                        algorithm === 'bubbleSort' ? bubbleSortDescriptionSR(codeLanguage,handleCodeLanguage) : //if else
                        algorithm === 'insertionSort' ? insertionSortDescriptionSR(codeLanguage,handleCodeLanguage) :   //if else
                        algorithm === 'mergeSort' ? mergeSortDescriptionSR(codeLanguage,handleCodeLanguage) :
                        algorithm === 'quickSort' ? quickSortDescriptionSR(codeLanguage,handleCodeLanguage) :
                            selectionSortDescriptionSR(codeLanguage,handleCodeLanguage) //else
                        :   //else
                        algorithm === 'bubbleSort' ? bubbleSortDescription(codeLanguage,handleCodeLanguage) :
                        algorithm === 'insertionSort' ? insertionSortDescription(codeLanguage,handleCodeLanguage) :
                        algorithm === 'mergeSort' ? mergeSortDescription(codeLanguage,handleCodeLanguage) :
                        algorithm === 'quickSort' ? quickSortDescription(codeLanguage,handleCodeLanguage) :
                            selectionSortDescription(codeLanguage,handleCodeLanguage)
                }
                <div className="description codeLanguage">
                    <div className='codeL'>
                        <select  className='codeLSelekt' onChange={handleCodeLanguage} value={codeLanguage}>
                                        <option value='Python'>Python</option>
                                        <option value='C'>C</option>
                                        <option value='Java'>Java</option>
                                        <option value='CS'>C#</option>
                                        <option value='PHP'>PHP</option>
                                        <option value='JavaScript'>JavaScript</option>
                        </select>
                    
                    <br/>
                        <div className='codeArea'>
                            {
                                algorithm === 'bubbleSort' ? 
                                    codeLanguage === 'Python' ? bubblePyhtonCode() : 
                                    codeLanguage === 'C' ? bubbleCCode() :
                                    codeLanguage === 'CS' ? bubbleCSCode() :
                                    codeLanguage === 'Java' ? bubbleJavaCode() :
                                    codeLanguage === 'JavaScript' ? bubbleJavaScriptCode() : 
                                    bubblePHPCode() :
                                    
                                algorithm === 'insertionSort' ? 
                                    codeLanguage === 'Python' ? insertionPyhtonCode() : 
                                    codeLanguage === 'C' ? insertionCCode() :
                                    codeLanguage === 'CS' ? insertionCSCode() :
                                    codeLanguage === 'Java' ? insertionJavaCode() :
                                    codeLanguage === 'JavaScript' ? insertionJavaScriptCode() : 
                                    insertionPHPCode() :

                                algorithm === 'mergeSort' ? 
                                    codeLanguage === 'Python' ? mergePyhtonCode() : 
                                    codeLanguage === 'C' ? mergeCCode() :
                                    codeLanguage === 'CS' ? mergeCSCode() :
                                    codeLanguage === 'Java' ? mergeJavaCode() :
                                    codeLanguage === 'JavaScript' ? mergeJavaScriptCode() : 
                                    mergePHPCode() :
                                
                                algorithm === 'quickSort' ? 
                                    codeLanguage === 'Python' ? quickPyhtonCode() : 
                                    codeLanguage === 'C' ? quickCCode() :
                                    codeLanguage === 'CS' ? quickCSCode() :
                                    codeLanguage === 'Java' ? quickJavaCode() :
                                    codeLanguage === 'JavaScript' ? quickJavaScriptCode() : 
                                    quickPHPCode() :
                                
                                    codeLanguage === 'Python' ? selectionPyhtonCode() : 
                                    codeLanguage === 'C' ? selectionCCode() :
                                    codeLanguage === 'CS' ? selectionCSCode() :
                                    codeLanguage === 'Java' ? selectionJavaCode() :
                                    codeLanguage === 'JavaScript' ? selectionJavaScriptCode() : 
                                    selectionPHPCode() 
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>   
    )
}

export default Body
