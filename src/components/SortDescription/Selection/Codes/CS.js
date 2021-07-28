export default function CS(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// C# program for implementation
// of Selection Sort`}</span>{`
`}<span className='red'>{`using`}</span>{` System;

`}<span className='red'>{`class`}</span>{` GFG
{
	`}<span className='red'>{`static void sort`}</span>{`(`}<span className='red'>{`int`}</span>{` []arr)
	{
		`}<span className='red'>{`int`}</span>{` n = arr.Length;

		`}<span className='comment'>{`// One by one move boundary of unsorted subarray`}</span>{`
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = 0; i < n - 1; i++)
		{
			`}<span className='comment'>{`// Find the minimum element in unsorted array`}</span>{`
			`}<span className='red'>{`int`}</span>{` min_idx = i;
			`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` j = i + 1; j < n; j++)
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
	`}<span className='red'>{`static void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{` []arr)
	{
		`}<span className='red'>{`int`}</span>{` n = arr.Length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i=0; i<n; ++i)
			Console.Write(arr[i]+`}<span className='print'>{`" "`}</span>{`);
		Console.WriteLine();
	}

	`}<span className='comment'>{`// Driver code`}</span>{`
	`}<span className='red'>{`public static void`}</span>{` Main()
	{
		`}<span className='red'>{`int`}</span>{` []arr = {64,25,12,22,11};
		sort(arr);
		Console.WriteLine(`}<span className='print'>{`"Sorted array"`}</span>{`);
		printArray(arr);
	}

}
`}<span className='comment'>{`// This code is contributed by Sam007`}</span>{`

`} <hr/> {` Output:

Sorted array: 
11 12 22 25 64`}
                </code>
            </pre>
        </div>
    )
}