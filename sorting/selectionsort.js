/**
 * selection sort   is  sorting  technique    :---
 * 
 * 
 * 
 * 
 */

function  selectionSort(arr){
    let  n=arr.length;
    for (let  i=0;i<n-1;i++){
        let  min=i;
        for (let  j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }
}

console.log(selectionSort([12,15,13,12,6]))