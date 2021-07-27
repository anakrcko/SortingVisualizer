export default function PHP(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
<?php
`}<span className='comment'>{`// PHP program for implementation
// of Bubble Sort`}</span>{`

`}<span className='red'>{`function`}</span>{` bubbleSort(&`}<span className='variables'>{`$arr`}</span>{`)
{
	`}<span className='variables'>{`$n`}</span>{` = sizeof(`}<span className='variables'>{`$arr`}</span>{`);

	`}<span className='comment'>{`// Traverse through all array elements`}</span>{`
	`}<span className='red'>{`for`}</span>{`(`}<span className='variables'>{`$i`}</span>{` = 0; `}<span className='variables'>{`$i`}</span>{` < `}<span className='variables'>{`$n`}</span>{`; `}<span className='variables'>{`$i`}</span>{`++)
	{
		`}<span className='comment'>{`// Last i elements are already in place`}</span>{`
		`}<span className='red'>{`for`}</span>{` (`}<span className='variables'>{`$j`}</span>{` = 0; `}<span className='variables'>{`$j`}</span>{` < `}<span className='variables'>{`$n`}</span>{` - `}<span className='variables'>{`$i`}</span>{` - 1; `}<span className='variables'>{`$j`}</span>{`++)
		{
			`}<span className='comment'>{`// traverse the array from 0 to n-i-1
			// Swap if the element found is greater
			// than the next element`}</span>{`
			`}<span className='red'>{`if`}</span>{` (`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`] > `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`+1])
			{
				`}<span className='variables'>{`$t`}</span>{` = `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`];
				`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`] = `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`+1];
				`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`+1] = `}<span className='variables'>{`$t`}</span>{`;
			}
		}
	}
}

`}<span className='comment'>{`// Driver code to test above`}</span>{`
`}<span className='variables'>{`$arr`}</span>{` = `}<span className='red'>{`array`}</span>{`(64, 34, 25, 12, 22, 11, 90);

`}<span className='variables'>{`$len`}</span>{` = sizeof(`}<span className='variables'>{`$arr`}</span>{`);
bubbleSort(`}<span className='variables'>{`$arr`}</span>{`);

`}<span className='blue'>{`echo`}</span>{``}<span className='print'>{` "Sorted array : \\n"`}</span>{`;

`}<span className='red'>{`for`}</span>{` (`}<span className='variables'>{`$i`}</span>{` = 0; `}<span className='variables'>{`$i`}</span>{` < `}<span className='variables'>{`$len`}</span>{`; `}<span className='variables'>{`$i`}</span>{`++)
	`}<span className='blue'>{`echo`}</span>{` `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$i`}</span>{`].`}<span className='print'>{`" "`}</span>{`;

`}<span className='comment'>{`// This code is contributed by ChitraNayal.`}</span>{`
?>

`} <hr/> {` Output:

Sorted array:
11 12 22 25 34 64 90`}
                </code>
            </pre>
        </div>
    )
}