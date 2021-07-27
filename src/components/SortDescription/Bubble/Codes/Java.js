export default function Java(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// Java program for implementation of Bubble Sort`}</span>{`
`}<span className='red'>{`class`}</span>{` BubbleSort
{
	`}<span className='red'>{`void`}</span>{` bubbleSort(`}<span className='red'>{`int`}</span>{` arr[])
	{
		`}<span className='red'>{`int`}</span>{` n = arr.length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`0`}</span>{`; i < n-`}<span className='number'>{`1`}</span>{`; i++)
			`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` j = `}<span className='number'>{`0`}</span>{`; j < n-i-`}<span className='number'>{`1`}</span>{`; j++)
				`}<span className='red'>{`if`}</span>{` (arr[j] > arr[j+`}<span className='number'>{`1`}</span>{`])
				{
					`}<span className='comment'>{`// swap arr[j+`}<span className='number'>{`1`}</span>{`] and arr[j]`}</span>{`
					`}<span className='red'>{`int`}</span>{` temp = arr[j];
					arr[j] = arr[j+`}<span className='number'>{`1`}</span>{`];
					arr[j+`}<span className='number'>{`1`}</span>{`] = temp;
				}
	}

	`}<span className='comment'>{`/* Prints the array */`}</span>{`
	`}<span className='red'>{`void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{` arr[])
	{
		`}<span className='red'>{`int`}</span>{` n = arr.length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i=`}<span className='number'>{`0`}</span>{`; i<n; ++i)
			System.out.print(arr[i] + `}<span className='print'>{`" "`}</span>{`);
		System.out.println();
	}

	`}<span className='comment'>{`// Driver method to test above`}</span>{`
	`}<span className='red'>{`public static void`}</span>{` main(String args[])
	{
		BubbleSort ob = `}<span className='red'>{`new`}</span>{` BubbleSort();
		`}<span className='red'>{`int`}</span>{` arr[] = {`}<span className='number'>{`64`}</span>{`, `}<span className='number'>{`34`}</span>{`, `}<span className='number'>{`25`}</span>{`, `}<span className='number'>{`12`}</span>{`, `}<span className='number'>{`22`}</span>{`, `}<span className='number'>{`11`}</span>{`, `}<span className='number'>{`90`}</span>{`};
		ob.bubbleSort(arr);
		System.out.println(`}<span className='print'>{`"Sorted array"`}</span>{`);
		ob.printArray(arr);
	}
}
`}<span className='comment'>{`/* This code is contributed by Rajat Mishra */`}</span>{`

`} <hr/> {` Output:

Sorted array:
11 12 22 25 34 64 90`}
                </code>
            </pre>
        </div>
    )
}