import React from 'react'

function task2() {
    const arr1=[1,2,3,4,5];
    const arr2=[1,2,3,4,5,6,7,8,9];

    const mergedArray=[];
    const maxlen=Math.max(arr1.length,arr2.length);
    for(let i=0;i<maxlen;i++){
        mergedArray.push(arr2[i]);
        if(arr1[i]!=arr2[i]){
            mergedArray.push(arr1[i]);
        }
    }
    // const mergedArray=[...arr1,...arr2];

  return (

    <div className='m-8 border-2'>
        <h1>Task-2</h1>
        <h2>Merged Array: {mergedArray.join(' ')}</h2>
    </div>
  )
}

export default task2