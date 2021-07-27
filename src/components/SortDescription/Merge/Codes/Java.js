export default function Java(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`/* Java program for Merge Sort */`}</span>{`
`}<span className='red'>{`class`}</span>{` MergeSort
{
	`}<span className='comment'>{`// Merges two subarrays of arr[].
	// First subarray is arr[l..m]
	// Second subarray is arr[m+1..r]`}</span>{`
	`}<span className='red'>{`void`}</span>{` merge(`}<span className='red'>{`int`}</span>{` arr[], `}<span className='red'>{`int`}</span>{` l, `}<span className='red'>{`int`}</span>{` m, `}<span className='red'>{`int`}</span>{` r)
	{
		`}<span className='comment'>{`// Find sizes of two subarrays to be merged`}</span>{`
		`}<span className='red'>{`int`}</span>{` n1 = m - l + `}<span className='number'>{`1`}</span>{`;
		`}<span className='red'>{`int`}</span>{` n2 = r - m;

		`}<span className='comment'>{`/* Create temp arrays */`}</span>{`
		`}<span className='red'>{`int`}</span>{` L[] = `}<span className='red'>{`new int`}</span>{`[n1];
		`}<span className='red'>{`int`}</span>{` R[] = `}<span className='red'>{`new int`}</span>{`[n2];

		`}<span className='comment'>{`/*Copy data to temp arrays*/`}</span>{`
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`0`}</span>{`; i < n1; ++i)
			L[i] = arr[l + i];
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` j = `}<span className='number'>{`0`}</span>{`; j < n2; ++j)
			R[j] = arr[m + `}<span className='number'>{`1`}</span>{` + j];

		`}<span className='comment'>{`/* Merge the temp arrays */`}</span>{`

		`}<span className='comment'>{`// Initial indexes of first and second subarrays`}</span>{`
		`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`0`}</span>{`, j = `}<span className='number'>{`0`}</span>{`;

		`}<span className='comment'>{`// Initial index of merged subarry array`}</span>{`
		`}<span className='red'>{`int`}</span>{` k = l;
		`}<span className='red'>{`while`}</span>{` (i < n1 && j < n2) {
			`}<span className='red'>{`if`}</span>{` (L[i] <= R[j]) {
				arr[k] = L[i];
				i++;
			}
			`}<span className='red'>{`else`}</span>{` {
				arr[k] = R[j];
				j++;
			}
			k++;
		}

		`}<span className='comment'>{`/* Copy remaining elements of L[] if any */`}</span>{`
		`}<span className='red'>{`while`}</span>{` (i < n1) {
			arr[k] = L[i];
			i++;
			k++;
		}

		`}<span className='comment'>{`/* Copy remaining elements of R[] if any */`}</span>{`
		`}<span className='red'>{`while`}</span>{` (j < n2) {
			arr[k] = R[j];
			j++;
			k++;
		}
	}

	`}<span className='comment'>{`// Main function that sorts arr[l..r] using
	// merge()`}</span>{`
	`}<span className='red'>{`void`}</span>{` sort(`}<span className='red'>{`int`}</span>{` arr[], `}<span className='red'>{`int`}</span>{` l, `}<span className='red'>{`int`}</span>{` r)
	{
		`}<span className='red'>{`if`}</span>{` (l < r) {
			`}<span className='comment'>{`// Find the middle point`}</span>{`
			`}<span className='red'>{`int`}</span>{` m =l+ (r-l)/`}<span className='number'>{`2`}</span>{`;

			`}<span className='comment'>{`// Sort first and second halves`}</span>{`
			sort(arr, l, m);
			sort(arr, m + `}<span className='number'>{`1`}</span>{`, r);

			`}<span className='comment'>{`// Merge the sorted halves`}</span>{`
			merge(arr, l, m, r);
		}
	}

	`}<span className='comment'>{`/* A utility function to print array of size n */`}</span>{`
	`}<span className='red'>{`static void`}</span>{` printArray(`}<span className='red'>{`int`}</span>{` arr[])
	{
		`}<span className='red'>{`int`}</span>{` n = arr.length;
		`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`int`}</span>{` i = `}<span className='number'>{`0`}</span>{`; i < n; ++i)
			System.out.print(arr[i] + `}<span className='print'>{`" "`}</span>{`);
		System.out.println();
	}

	`}<span className='comment'>{`// Driver code`}</span>{`
	`}<span className='red'>{`public static void`}</span>{` main(String args[])
	{
		`}<span className='red'>{`int`}</span>{` arr[] = { `}<span className='number'>{`12`}</span>{`, `}<span className='number'>{`11`}</span>{`, `}<span className='number'>{`13`}</span>{`,`}<span className='number'>{` 5`}</span>{`, `}<span className='number'>{`6`}</span>{`, `}<span className='number'>{`7`}</span>{` };

		System.out.println(`}<span className='print'>{`"Given Array"`}</span>{`);
		printArray(arr);

		MergeSort ob = `}<span className='red'>{`new`}</span>{` MergeSort();
		ob.sort(arr, `}<span className='number'>{`0`}</span>{`, arr.length - `}<span className='number'>{`1`}</span>{`);

		System.out.println(`}<span className='print'>{`"\\nSorted array"`}</span>{`);
		printArray(arr);
	}
}
`}<span className='comment'>{`/* This code is contributed by Rajat Mishra */`}</span>{`

`} <hr/> {` Output:

Given array is 
12 11 13 5 6 7 
Sorted array is 
5 6 7 11 12 13
`}
                </code>
            </pre>
        </div>
    )
}