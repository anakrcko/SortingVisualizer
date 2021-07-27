export default function CS(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// C# program for implementation`}</span>{`
`}<span className='comment'>{`// of Bubble Sort`}</span>{`
`}<span className='red'>{`using`}</span>{` System;

`}<span className='red'>{`class`}</span>{` GFG
{
	`}<span className='red'>{`static void`}</span>{` bubbleSort(`}<span className='red'>{`int`}</span>{` []arr)
	{
		`}<span className='red'>{`int`}</span>{` n = arr.Length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = 0; i < n - 1; i++)
			`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` j = 0; j < n - i - 1; j++)
				`}<span className='red'>{`if`}</span>{` (arr[j] > arr[j + 1])
				{
					// swap temp and arr[i]
					`}<span className='red'>{`int`}</span>{` temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
	}

	`}<span className='comment'>{`/* Prints the array */`}</span>{`
	`}<span className='red'>{`static void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{` []arr)
	{
		`}<span className='red'>{`int`}</span>{` n = arr.Length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = 0; i < n; ++i)
			Console.Write(arr[i] + `}<span className='print'>{`" "`}</span>{`);
		Console.WriteLine();
	}

	`}<span className='comment'>{`// Driver method`}</span>{`
	`}<span className='red'>{`public static void`}</span>{` Main()
	{
		`}<span className='red'>{`int`}</span>{` []arr = {64, 34, 25, 12, 22, 11, 90};
		bubbleSort(arr);
		Console.WriteLine(`}<span className='print'>{`"Sorted array"`}</span>{`);
		printArray(arr);
	}

}

`}<span className='comment'>{`// This code is contributed by Sam007`}</span>{`

`} <hr/> {` Output:

Sorted array:
11 12 22 25 34 64 90`}
                </code>
            </pre>
        </div>
    )
}