export default function Java(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// Java implementation of QuickSort`}</span>{`
`}<span className='red'>{`import`}</span>{` java.io.*;

`}<span className='red'>{`class`}</span>{` GFG{
	
`}<span className='comment'>{`// A utility function to swap two elements`}</span>{`
`}<span className='red'>{`static void`}</span>{` swap(`}<span className='red'>{`int`}</span>{`[] arr, `}<span className='red'>{`int`}</span>{` i, `}<span className='red'>{`int`}</span>{` j)
{
	`}<span className='red'>{`int`}</span>{` temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

`}<span className='comment'>{`/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */`}</span>{`
`}<span className='red'>{`static int`}</span>{` partition(`}<span className='red'>{`int`}</span>{`[] arr, `}<span className='red'>{`int`}</span>{` low, `}<span className='red'>{`int`}</span>{` high)
{
	
	`}<span className='comment'>{`// pivot`}</span>{`
	`}<span className='red'>{`int`}</span>{` pivot = arr[high];
	
	`}<span className='comment'>{`// Index of smaller element and
	// indicates the right position
	// of pivot found so far`}</span>{`
	`}<span className='red'>{`int`}</span>{` i = (low - `}<span className='number'>{`1`}</span>{`);

	`}<span className='red'>{`for`}</span>{`(`}<span className='red'>{`int`}</span>{` j = low; j <= high - `}<span className='number'>{`1`}</span>{`; j++)
	{
		
		`}<span className='comment'>{`// If current element is smaller
		// than the pivot`}</span>{`
		`}<span className='red'>{`if`}</span>{` (arr[j] < pivot)
		{
			
			`}<span className='comment'>{`// Increment index of
			// smaller element`}</span>{`
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + `}<span className='number'>{`1`}</span>{`, high);
	`}<span className='red'>{`return`}</span>{` (i + `}<span className='number'>{`1`}</span>{`);
}
`}<span className='comment'>{`
/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/`}</span>{`
`}<span className='red'>{`static void`}</span>{` quickSort(`}<span className='red'>{`int`}</span>{`[] arr, `}<span className='red'>{`int`}</span>{` low, `}<span className='red'>{`int`}</span>{` high)
{
	`}<span className='red'>{`if`}</span>{` (low < high)
	{
		
		`}<span className='comment'>{`// pi is partitioning index, arr[p]
		// is now at right place`}</span>{`
		`}<span className='red'>{`int`}</span>{` pi = partition(arr, low, high);

		`}<span className='comment'>{`// Separately sort elements before
		// partition and after partition`}</span>{`
		quickSort(arr, low, pi - `}<span className='number'>{`1`}</span>{`);
		quickSort(arr, pi + `}<span className='number'>{`1`}</span>{`, high);
	}
}

`}<span className='comment'>{`// Function to print an array`}</span>{`
`}<span className='red'>{`static void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{`[] arr, `}<span className='red'>{`int`}</span>{` size)
{
	`}<span className='red'>{`for`}</span>{`(`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`0`}</span>{`; i < size; i++)
		System.out.print(arr[i] + `}<span className='print'>{`" "`}</span>{`);
		
	System.out.println();
}

`}<span className='comment'>{`// Driver Code`}</span>{`
`}<span className='red'>{`public static void`}</span>{` main(String[] args)
{
	`}<span className='red'>{`int`}</span>{`[] arr = { `}<span className='number'>{`10`}</span>{`, `}<span className='number'>{`7`}</span>{`, `}<span className='number'>{`8`}</span>{`, `}<span className='number'>{`9`}</span>{`, `}<span className='number'>{`1`}</span>{`, `}<span className='number'>{`5`}</span>{` };
	`}<span className='red'>{`int`}</span>{` n = arr.length;
	
	quickSort(arr, `}<span className='number'>{`0`}</span>{`, n - `}<span className='number'>{`1`}</span>{`);
	System.out.println(`}<span className='print'>{`"Sorted array: \\n"`}</span>{`);
	printArray(arr, n);
}
}

`}<span className='comment'>{`// This code is contributed by Ayush Choudhary`}</span>{`

`} <hr/> {` Output:

Sorted array: 
1 5 7 8 9 10 
`}
                </code>
            </pre>
        </div>
    )
}