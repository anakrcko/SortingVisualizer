import "./App.css"
import React, { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import ArrayHandler from './components/ArrayHandler/ArrayHandler'

import bubbleSort from './algorithms/bubbleSort'
import insertionSort from './algorithms/insertionSort'
import selectionSort from './algorithms/selectionSort'
import mergeSort from './algorithms/mergeSort'
import quickSort from './algorithms/quickSort'
import Body from "./components/Body/Body"
import Footer from "./components/Footer/Footer"

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function App() {

	const [algorithm, setAlgorithm] = useState('bubbleSort')
	const [arrayLength, setArrayLenght] = useState(20)
	const [array, setArray] = useState([])
	const [isSorting, setSorting] = useState(false)
	const [isCompleted, setCompleted] = useState(true)
	const [sortingSpeed, setSpeed] = useState(2)
	const [comparingElements, setElementsToCompare] = useState([])
	const [swapingElements, setElementsToSwap] = useState([])
	const [sortedElements, setSortedElements] = useState([])
	const [language, setLanguage] = useState('sr')
	const [inputArray, setInputArray] = useState('')
	const [generate, setGenerate] = useState(false)
	const [codeLanguage, setCodeLanguage] = useState('Python')

	function generateNewArrayRandom (arrayLength){
		setCompleted(false)
		setSorting(false)
		setSortedElements([])
		setGenerate(false)
		const randomArray = []

		for (let index = 0; index < arrayLength; index++) {
			randomArray.push(randomIntFromInterval(1, arrayLength));
		}
		setArray(randomArray)
	}

	function generateNewArray(){
		setCompleted(false)
		setSorting(false)
		setSortedElements([])
		setGenerate(true)
		
		const pomArray =  inputArray.split(" ")
		const generatedArray = []
		const length = pomArray.length
		for(let i=0; i<length; i++){
			generatedArray[i] = Number(pomArray[i])
		}
		setArray(generatedArray)
		//setArrayLenght(length)
	}
	function handleAlgorithm(event) {
		setAlgorithm(event.target.value)
	}

	function handleArrayLength(event) {
		const number = event.target.value
		setArrayLenght(Number(number))
	}

	function handleSortingSpeed(event) {
		const speed = (event.target.value)
		setSpeed(speed)
	}

	function handleCodeLanguage(event) {
		setCodeLanguage(event.target.value)
	}

	//okida se svaki put kad se promeni nesto sto navodimo dole; dakle duzina niza
	useEffect(() => {
		generateNewArrayRandom(arrayLength)
	}, [arrayLength])

  // SORT
  	function handleSort() {
	  	const speedTime = Math.ceil(400 / sortingSpeed)

		const sort = (arrayInOrder) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = arrayInOrder[i]
					//setujemo te elemente
					setElementsToCompare([j, k])
					setElementsToSwap([])

					if(index !== null)	//znaci da je taj sortiran
					{
						setSortedElements((prevState) => (
							[...prevState, index]
						))
					}
		
					if(arr)	//znaci da imamo nesto za zamenu
					{
						setArray(arr)
						if(j !== null || k != null)
							setElementsToSwap([j, k])
					}

					if (++i < arrayInOrder.length){
						loop(i)
					} else {
						setSorting(false)
						setCompleted(true)
					}   
				}, speedTime)
			})(0)
		}
		setSorting(true)

		algorithm === 'bubbleSort' ? sort(bubbleSort(array)) : 
			algorithm === 'insertionSort' ?  sort(insertionSort(array)) :
				algorithm === 'mergeSort' ? sort(mergeSort(array)) : 
					algorithm === 'quickSort' ? sort(quickSort(array)) : 
						algorithm === 'selectionSort' ? sort(selectionSort(array)) :
							(() => {
								setSorting(false)
								setCompleted(true)
							})()
	}

	function handleLanguage(event) {
		setLanguage(event.target.value)
	}

	function handleInputArray(event) {
		setInputArray(event.target.value)
	}
	
  	return (
    	<div className="App">
			<Header 
				language={language}
				handleLanguage={handleLanguage}
				isSorting={isSorting}
			/>
					
			<ArrayHandler
				array={array} 
				comparingElements={isSorting && comparingElements}
				swapingElements={isSorting && swapingElements}
				sortedElements={sortedElements} 
				generateArrayRandom={() => generateNewArrayRandom(arrayLength)}
				generateArray={() => generateNewArray()}
				handleArrayLength={handleArrayLength} 
				handleSortingSpeed={handleSortingSpeed}
				handleAlgorithm={handleAlgorithm}
				handleSort={handleSort} 
				isSorting={isSorting}
				isCompleted={isCompleted}
				arrayLength={arrayLength}
				sortingSpeed={sortingSpeed}
				algorithm={algorithm}
				inputArray={inputArray}
				handleInputArray={handleInputArray}
				generate={generate}
				language={language}
			/>

			<Body 
				algorithm={algorithm}
				language={language}
				codeLanguage={codeLanguage}
				handleCodeLanguage={handleCodeLanguage}
			/>

			<Footer/>
		</div>
  	);
}

export default App;
