export default function JavaScript(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
<script>
`}<span className='comment'>{`// Javascript program for implementation of selection sort`}</span>{`
`}<span className='red'>{`function`}</span>{` swap(arr,xp, yp)
{
	`}<span className='red'>{`var`}</span>{` temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

`}<span className='red'>{`function`}</span>{` selectionSort(arr, n)
{
	`}<span className='red'>{`var`}</span>{` i, j, min_idx;

	`}<span className='comment'>{`// One by one move boundary of unsorted subarray`}</span>{`
	`}<span className='red'>{`for`}</span>{` (i = 0; i < n-1; i++)
	{
		`}<span className='comment'>{`// Find the minimum element in unsorted array`}</span>{`
		min_idx = i;
		`}<span className='red'>{`for`}</span>{` (j = i + 1; j < n; j++)
		`}<span className='red'>{`if`}</span>{` (arr[j] < arr[min_idx])
			min_idx = j;

		`}<span className='comment'>{`// Swap the found minimum element with the first element`}</span>{`
		swap(arr,min_idx, i);
	}
}

`}<span className='red'>{`function`}</span>{` printArray( arr, size)
{
	`}<span className='red'>{`var`}</span>{` i;
	`}<span className='red'>{`for`}</span>{` (i = 0; i < size; i++)
		document.write(arr[i] + `}<span className='print'>{`" "`}</span>{`);
	document.write(`}<span className='print'>{`" <br>"`}</span>{`);
}

`}<span className='red'>{`var`}</span>{` arr = [64, 25, 12, 22, 11];
	`}<span className='red'>{`var`}</span>{` n = 5;
	selectionSort(arr, n);
	document.write(`}<span className='print'>{`"Sorted array: <br>"`}</span>{`);
	printArray(arr, n);

`}<span className='comment'>{`// This code is contributed by akshitsaxenaa09.`}</span>{`
</script>
`} <hr/> {` Output:

Sorted array: 
11 12 22 25 64`}
                </code>
            </pre>
        </div>
    )
}