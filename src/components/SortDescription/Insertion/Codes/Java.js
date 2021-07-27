export default function Java(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// Java program for implementation of Insertion Sort`}</span>{`
`}<span className='red'>{`class`}</span>{` InsertionSort {
	`}<span className='comment'>{`/*Function to sort array using insertion sort*/`}</span>{`
	`}<span className='red'>{`void`}</span>{` sort(int arr[])
	{
		`}<span className='red'>{`int`}</span>{` n = arr.length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`1`}</span>{`; i < n; ++i) {
			`}<span className='red'>{`int`}</span>{` key = arr[i];
			`}<span className='red'>{`int`}</span>{` j = i - `}<span className='number'>{`1`}</span>{`;

			`}<span className='comment'>{`/* Move elements of arr[0..i-1], that are
			greater than key, to one position ahead
			of their current position */ `}</span>{`
			`}<span className='red'>{`while`}</span>{` (j >= `}<span className='number'>{`0`}</span>{` && arr[j] > key) {
				arr[j + `}<span className='number'>{`1`}</span>{`] = arr[j];
				j = j - `}<span className='number'>{`1`}</span>{`;
			}
			arr[j + `}<span className='number'>{`1`}</span>{`] = key;
		}
	}

	`}<span className='comment'>{`/* A utility function to print array of size n*/`}</span>{`
	`}<span className='red'>{`static void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{` arr[])
	{
		`}<span className='red'>{`int`}</span>{` n = arr.length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`0`}</span>{`; i < n; ++i)
			System.out.print(arr[i] + `}<span className='print'>{`" "`}</span>{`);

		System.out.println();
	}

	`}<span className='comment'>{`// Driver method`}</span>{`
	`}<span className='red'>{`public static void`}</span>{` main(String args[])
	{
		`}<span className='red'>{`int`}</span>{` arr[] = { `}<span className='number'>{`12`}</span>{`, `}<span className='number'>{`11`}</span>{`, `}<span className='number'>{`13`}</span>{`, `}<span className='number'>{`5`}</span>{`, `}<span className='number'>{`6`}</span>{` };

		InsertionSort ob = `}<span className='red'>{`new`}</span>{` InsertionSort();
		ob.sort(arr);

		printArray(arr);
	}
} `}<span className='comment'>{`/* This code is contributed by Rajat Mishra. */`}</span>{`


`} <hr/> {` Output:

5 6 11 12 13`}
                </code>
            </pre>
        </div>
    )
}