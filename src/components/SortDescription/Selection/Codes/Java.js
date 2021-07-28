export default function Java(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// Java program for implementation of Selection Sort`}</span>{`
`}<span className='red'>{`class`}</span>{` SelectionSort
{
	`}<span className='red'>{`void`}</span>{` sort(`}<span className='red'>{`int`}</span>{` arr[])
	{
		`}<span className='red'>{`int`}</span>{` n = arr.length;

		`}<span className='comment'>{`// One by one move boundary of unsorted subarray`}</span>{`
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`0`}</span>{`; i < n-`}<span className='number'>{`1`}</span>{`; i++)
		{
			`}<span className='comment'>{`// Find the minimum element in unsorted array`}</span>{`
			`}<span className='red'>{`int`}</span>{` min_idx = i;
			`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` j = i+`}<span className='number'>{`1`}</span>{`; j < n; j++)
				`}<span className='red'>{`if`}</span>{` (arr[j] < arr[min_idx])
					min_idx = j;

			`}<span className='comment'>{`// Swap the found minimum element with the first
			// element`}</span>{`
			`}<span className='red'>{`int`}</span>{` temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
		}
	}

	`}<span className='comment'>{`// Prints the array`}</span>{`
	`}<span className='red'>{`void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{` arr[])
	{
		`}<span className='red'>{`int`}</span>{` n = arr.length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i=`}<span className='number'>{`0`}</span>{` ; i<n; ++i)
			System.out.print(arr[i]+`}<span className='print'>{`" "`}</span>{`);
		System.out.println();
	}

	`}<span className='comment'>{`// Driver code to test above`}</span>{`
	`}<span className='red'>{`public static void`}</span>{` main(String args[])
	{
		SelectionSort ob = `}<span className='red'>{`new`}</span>{` SelectionSort();
		`}<span className='red'>{`int`}</span>{` arr[] = {`}<span className='number'>{`64`}</span>{`,`}<span className='number'>{`25`}</span>{`,`}<span className='number'>{`12`}</span>{`,`}<span className='number'>{`22`}</span>{`,`}<span className='number'>{`11`}</span>{`};
		ob.sort(arr);
		System.out.println(`}<span className='print'>{`"Sorted array:"`}</span>{`);
		ob.printArray(arr);
	}
}
`}<span className='comment'>{`/* This code is contributed by Rajat Mishra*/`}</span>{`
`} <hr/> {` Output:

Sorted array: 
11 12 22 25 64`}
                </code>
            </pre>
        </div>
    )
}