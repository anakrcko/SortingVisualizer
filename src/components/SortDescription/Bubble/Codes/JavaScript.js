export default function JavaScript(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
<script>

`}<span className='red'>{`function`}</span>{` swap(arr, xp, yp)
{
	`}<span className='red'>{`var`}</span>{` temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

`}<span className='comment'>{`// An optimized version of Bubble Sort`}</span>{`
`}<span className='red'>{`function`}</span>{` bubbleSort( arr, n)
{
`}<span className='red'>{`var`}</span>{` i, j;
`}<span className='red'>{`for`}</span>{` (i = 0; i < n-1; i++)
{
	`}<span className='red'>{`for`}</span>{` (j = 0; j < n-i-1; j++)
	{
		`}<span className='red'>{`if`}</span>{` (arr[j] > arr[j+1])
		{
		swap(arr,j,j+1);
		
		}
	}

}
}

`}<span className='comment'>{`/* Function to print an array */`}</span>{`
`}<span className='red'>{`function`}</span>{` printArray(arr, size)
{
	`}<span className='red'>{`var`}</span>{` i;
	`}<span className='red'>{`for`}</span>{` (i=0; i < size; i++)
		document.write(arr[i]+ `}<span className='print'>{`" "`}</span>{`);
	document.write(`}<span className='print'>{`"\\n"`}</span>{`);
}

`}<span className='comment'>{`// Driver program to test above functions`}</span>{`
`}<span className='red'>{`var`}</span>{` arr = [64, 34, 25, 12, 22, 11, 90];
	`}<span className='red'>{`var`}</span>{` n = 7;
	document.write(`}<span className='print'>{`"UnSorted array: \\n"`}</span>{`);
	printArray(arr, n);

	bubbleSort(arr, n);
	document.write(`}<span className='print'>{`"Sorted array: \\n"`}</span>{`);
	printArray(arr, n);


</script>

`} <hr/> {` Output:

Sorted array:
11 12 22 25 34 64 90`}
                </code>
            </pre>
        </div>
    )
}