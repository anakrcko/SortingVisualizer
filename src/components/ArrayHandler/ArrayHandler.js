import React from 'react'
import './ArrayHandler.css'
function findMax(inputArray){
    const pomArray =  inputArray.split(" ")
    return Math.max.apply(null, pomArray);
}
function ArrayHandler({ 
                    array,
                    comparingElements,
                    swapingElements,
                    sortedElements,
                    generateArrayRandom,
                    generateArray, 
                    handleArrayLength, 
                    handleSortingSpeed, 
                    handleAlgorithm, 
                    handleSort, 
                    isSorting, 
                    isCompleted, 
                    arrayLength, 
                    sortingSpeed, 
                    algorithm,
                    inputArray,
                    handleInputArray,
                    generate,
                    language
                    }){
    
    const barColors = {
            "blue": '#1565C0', 
            "yellow": '#d3ed0e',
            "red": '#d60606',
            "green": '#4bc52e'
        }    
    
    const arrayLengthPOM = 
        generate ?
            findMax(inputArray) :  array.length
            

    const fontSize = 
        arrayLengthPOM < 5 ? 14 : 
            arrayLengthPOM < 10 ? 13 : 
                arrayLengthPOM < 20 ? 12 : 
                    arrayLengthPOM < 40 ? 11 : 10   
    const add = 
        arrayLengthPOM < 5 ? 120 : 
            arrayLengthPOM < 10 ? 110 : 
                arrayLengthPOM < 30 ? 100 : 
                        arrayLengthPOM < 50 ? 80 :
                                arrayLengthPOM < 70 ? 60 :
                                    arrayLengthPOM < 90 ? 40 : 20

    const barWidth = window.innerWidth / (array.length * 3) + 2
    const barHeight = window.innerHeight
    const color =  array.length <= 50 && barWidth > 14 ? 'whitesmoke' : 'transparent'   
    const numMargin = 
            arrayLengthPOM < 5 ? 6 : 
                arrayLengthPOM < 10 ? 4 : 
                    arrayLengthPOM < 20 ? 3.5 : 
                        arrayLengthPOM < 40 ? 3 : 
                            arrayLengthPOM < 60 ? 2.5 : 
                                arrayLengthPOM < 80 ? 2 : 
                                    arrayLengthPOM < 100 ? 1.8 : 1.5
    const margin = `${numMargin}px`

    return (
        <div className='row'>

            <div  className='column1 settings'>
                <ul>
                    <li>
                        <div>
                            <label>
                                {language === 'sr' ? 
                                    'Dužina: ' : 'Length: ' } {arrayLength}

                            </label>
                            <input type='range' onChange={handleArrayLength} min='5' max='100' step='1' disabled={isSorting} value={arrayLength}></input>
                        </div>
                    </li>
                    <li>
                        <button onClick={generateArrayRandom} disabled={isSorting}>
                            {language === 'sr' ? 
                                        'Generiši nov niz' : 'Generate new array' }
                        </button>
                    </li>
                    <li>
                        <div>
                            <label>
                                {language === 'sr' ? 
                                            'Uneti elemente niza (sa razmakom) ' : 'Enter string elements (spaced)' }
                            </label>
                            <input type='text' value={inputArray} onChange={handleInputArray} disabled={isSorting}/>
                        </div>
                    </li>
                    <li>
                        <button onClick={generateArray} disabled={isSorting}>
                            {language === 'sr' ? 
                                        'Generiši niz' : 'Generate array' }
                        </button>
                    </li>
                    <br/><br/>
                    <li>
                        <div>
                            <label>
                                {language === 'sr' ? 
                                    'Brzina: ' : 'Speed: ' } {sortingSpeed}
                            </label>
                            <input type='range' onChange={handleSortingSpeed} min='1' max='10' value={sortingSpeed} disabled={isSorting}></input>
                        </div>
                    </li>
                    <li>
                        <select onChange={handleAlgorithm} disabled={isSorting} value={algorithm}>
                            <option value='bubbleSort'>Bubble Sort</option>
                            <option value='mergeSort'>Merge Sort</option>
                            <option value='quickSort'>Quick Sort</option>
                            <option value='selectionSort'>Selection Sort</option>
                            <option value='insertionSort'>Insertion Sort</option>
                        </select>
                    </li>
                    <li>
                        <button onClick={handleSort} disabled={isSorting || isCompleted}>
                            {language === 'sr' ? 
                                    'Sortiraj' : 'Sort' }
                        </button>
                    </li>
                </ul>
            </div>

            <div className='column2 list'>

                {array.map((value, i) => {
                    //const height = (value * 500 / array.length) + 5 //-10
                    const height = (value * barHeight/2)/arrayLengthPOM + add
                    let barColor = barColors.blue 

                    // ako je ukljuceno uporedjivanje i ako imamo i-ti u listi elemenata za uporedjivanje
                    if(comparingElements && (i === comparingElements[0] || i === comparingElements[1]))
                        barColor = barColors.yellow

                    if(swapingElements && (i === swapingElements[0] || i === swapingElements[1]))
                        barColor= barColors.red

                    // ako je sortiran, na pravom mestu
                    if(sortedElements && sortedElements.includes(i))
                        barColor = barColors.green

                    const style = {
                        backgroundColor: barColor,
                        color: color, 
                        height: height, 
                        width: barWidth,
                        marginLeft: margin,
                        marginRight: margin,
                        fontSize: fontSize
                    }
                    return (<div key={i} className='value' style={style}>{value}</div>)
                })}
            </div>
        </div>
    );
}

export default ArrayHandler
