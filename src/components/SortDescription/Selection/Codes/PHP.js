export default function PHP(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
<?php
`}<span className='comment'>{`// PHP program for implementation
// of selection sort`}</span>{`
`}<span className='red'>{`function`}</span>{` selection_sort(&`}<span className='variables'>{`$arr`}</span>{`, `}<span className='variables'>{`$n`}</span>{`)
{
	`}<span className='red'>{`for`}</span>{` (`}<span className='variables'>{`$i`}</span>{` = 0; `}<span className='variables'>{`$i`}</span>{` < `}<span className='variables'>{`$n`}</span>{` ; `}<span className='variables'>{`$i`}</span>{`++)
	{
		`}<span className='variables'>{`$low`}</span>{` = `}<span className='variables'>{`$i`}</span>{`;
		`}<span className='red'>{`for`}</span>{` (`}<span className='variables'>{`$j`}</span>{` = `}<span className='variables'>{`$i`}</span>{` + 1; `}<span className='variables'>{`$j`}</span>{` < `}<span className='variables'>{`$n`}</span>{` ; `}<span className='variables'>{`$j`}</span>{`++)
		{
			`}<span className='red'>{`if`}</span>{` (`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$j`}</span>{`] < `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$low`}</span>{`])
			{
				`}<span className='variables'>{`$low`}</span>{` = `}<span className='variables'>{`$j`}</span>{`;
			}
		}
		
		`}<span className='comment'>{`// swap the minimum value to $ith node`}</span>{`
		`}<span className='red'>{`if`}</span>{` (`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$i`}</span>{`] > `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$low`}</span>{`])
		{
			`}<span className='variables'>{`$tmp`}</span>{` = `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$i`}</span>{`];
			`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$i`}</span>{`] = `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$low`}</span>{`];
			`}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$low`}</span>{`] = `}<span className='variables'>{`$tmp`}</span>{`;
		}
	}
}

`}<span className='comment'>{`// Driver Code`}</span>{`
`}<span className='variables'>{`$arr`}</span>{` = `}<span className='red'>{`array`}</span>{`(64, 25, 12, 22, 11);
`}<span className='variables'>{`$len`}</span>{` = `}<span className='blue'>{`count`}</span>{`(`}<span className='variables'>{`$arr`}</span>{`);
selection_sort(`}<span className='variables'>{`$arr`}</span>{`, `}<span className='variables'>{`$len`}</span>{`);
`}<span className='blue'>{`echo`}</span>{` `}<span className='print'>{`"Sorted array: \\n"`}</span>{`;

`}<span className='red'>{`for`}</span>{`  (`}<span className='variables'>{`$i`}</span>{` = 0; `}<span className='variables'>{`$i`}</span>{` < `}<span className='variables'>{`$len`}</span>{`;`}<span className='variables'>{` $i`}</span>{`++)
	`}<span className='blue'>{`echo`}</span>{` `}<span className='variables'>{`$arr`}</span>{`[`}<span className='variables'>{`$i`}</span>{`] . `}<span className='print'>{`" "`}</span>{`;

`}<span className='comment'>{`// This code is contributed
// by Deepika Gupta.`}</span>{`
?>

`} <hr/> {` Output:

Sorted array: 
11 12 22 25 64`}
                </code>
            </pre>
        </div>
    )
}