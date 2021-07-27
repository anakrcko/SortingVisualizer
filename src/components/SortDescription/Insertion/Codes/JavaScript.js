export default function JavaScript(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
<script>
`}<span className='comment'>{`// Javascript program for insertion sort

// Function to sort an array using insertion sort`}</span>{`
`}<span className='red'>{`function`}</span>{` insertionSort(arr, n)
{
	let i, key, j;
	`}<span className='red'>{`for`}</span>{` (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		`}<span className='comment'>{`/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */`}</span>{`
		`}<span className='red'>{`while`}</span>{` (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

`}<span className='comment'>{`// A utility function to print an array of size n`}</span>{`
`}<span className='red'>{`function`}</span>{` printArray(arr, n)
{
	let i;
	`}<span className='red'>{`for`}</span>{` (i = 0; i < n; i++)
		document.write(arr[i] + `}<span className='print'>{`" "`}</span>{`);
	document.write(`}<span className='print'>{`"<br>"`}</span>{`);
}

`}<span className='comment'>{`// Driver code`}</span>{`
	let arr = [12, 11, 13, 5, 6 ];
	let n = arr.length;

	insertionSort(arr, n);
	printArray(arr, n);
	
	`}<span className='comment'>{`// This code is contributed by Mayank Tyagi`}</span>{`

</script>

`} <hr/> {` Output:

5 6 11 12 13`}
                </code>
            </pre>
        </div>
    )
}