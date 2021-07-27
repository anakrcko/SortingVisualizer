export default function CS(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// C# program for implementation of Insertion Sort`}</span>{`
`}<span className='red'>{`using`}</span>{` System;

`}<span className='red'>{`class`}</span>{` InsertionSort {

	`}<span className='comment'>{`// Function to sort array
	// using insertion sort`}</span>{`
	`}<span className='red'>{`void`}</span>{` sort(`}<span className='red'>{`int`}</span>{`[] arr)
	{
		`}<span className='red'>{`int`}</span>{` n = arr.Length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = 1; i < n; ++i) {
			`}<span className='red'>{`int`}</span>{` key = arr[i];
			`}<span className='red'>{`int`}</span>{` j = i - 1;

			`}<span className='comment'>{`// Move elements of arr[0..i-1],
			// that are greater than key,
			// to one position ahead of
			// their current position`}</span>{`
			`}<span className='red'>{`while`}</span>{` (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}

	`}<span className='comment'>{`// A utility function to print
	// array of size n`}</span>{`
	`}<span className='red'>{`static void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{`[] arr)
	{
		`}<span className='red'>{`int`}</span>{` n = arr.Length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = 0; i < n; ++i)
			Console.Write(arr[i] + `}<span className='print'>{`" "`}</span>{`);

		Console.Write(`}<span className='print'>{`"\\n"`}</span>{`);
	}

	`}<span className='comment'>{`// Driver Code`}</span>{`
	`}<span className='red'>{`public static void`}</span>{` Main()
	{
		`}<span className='red'>{`int`}</span>{`[] arr = { 12, 11, 13, 5, 6 };
		InsertionSort ob = `}<span className='red'>{`new`}</span>{` InsertionSort();
		ob.sort(arr);
		printArray(arr);
	}
}

`}<span className='comment'>{`// This code is contributed by ChitraNayal.`}</span>{`
`} <hr/> {` Output:

5 6 11 12 13`}
                </code>
            </pre>
        </div>
    )
}