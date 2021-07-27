export default function PHP(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
<?php
`}<span className='comment'>{`// PHP program for insertion sort

// Function to sort an array
// using insertion sort`}</span>{`
`}<span className='red'>{`function`}</span>{` insertionSort(&`}<span className='variables'>{`$arr`}</span>{`, `}<span className='variables'>{`$n`}</span>{`)
{
	`}<span className='red'>{`for`}</span>{` (`}<span className='variables'>{`$i`}</span>{` = 1; `}<span className='variables'>{`$i`}</span>{` < `}<span className='variables'>{`$n`}</span>{`; `}<span className='variables'>{`$i`}</span>{`++)
	{
		`}<span className='variables'>{`$key`}</span>{` =`}<span className='variables'>{` $arr`}</span>{`[`}<span className='variables'>{`$i`}</span>{`];
		`}<span className='variables'>{`$j`}</span>{` = `}<span className='variables'>{`$i`}</span>{`-1;
	
		`}<span className='comment'>{`// Move elements of arr[0..i-1],
		// that are greater than key, to
		// one position ahead of their
		// current position`}</span>{`
		`}<span className='red'>{`while`}</span>{` (`}<span className='variables'>{`$j`}</span>{` >= 0 && `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`] > `}<span className='variables'>{`$key`}</span>{`)
		{
			`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{` + 1] = `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`];
			`}<span className='variables'>{`$j`}</span>{` = `}<span className='variables'>{`$j`}</span>{` - 1;
		}
		
		`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{` + 1] = `}<span className='variables'>{`$key`}</span>{`;
	}
}

`}<span className='comment'>{`// A utility function to
// print an array of size n`}</span>{`
`}<span className='red'>{`function`}</span>{` printArray(&`}<span className='variables'>{`$arr`}</span>{`, `}<span className='variables'>{`$n`}</span>{`)
{
	`}<span className='red'>{`for`}</span>{` (`}<span className='variables'>{`$i`}</span>{` = 0; `}<span className='variables'>{`$i`}</span>{` < `}<span className='variables'>{`$n`}</span>{`; `}<span className='variables'>{`$i`}</span>{`++)
		`}<span className='blue'>{`echo`}</span>{` `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$i`}</span>{`].`}<span className='print'>{`" "`}</span>{`;
	`}<span className='blue'>{`echo`}</span>{` `}<span className='print'>{`"\\n"`}</span>{`;
}

`}<span className='comment'>{`// Driver Code`}</span>{`
`}<span className='variables'>{`$arr`}</span>{` = `}<span className='red'>{`array`}</span>{`(12, 11, 13, 5, 6);
`}<span className='variables'>{`$n`}</span>{` = sizeof(`}<span className='variables'>{`$arr`}</span>{`);
insertionSort(`}<span className='variables'>{`$arr`}</span>{`, `}<span className='variables'>{`$n`}</span>{`);
printArray(`}<span className='variables'>{`$arr`}</span>{`, `}<span className='variables'>{`$n`}</span>{`);

`}<span className='comment'>{`// This code is contributed by ChitraNayal.`}</span>{`
?>
`} <hr/> {` Output:

5 6 11 12 13`}
                </code>
            </pre>
        </div>
    )
}