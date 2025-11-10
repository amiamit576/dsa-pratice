/**
 * bubble  sort  is  sorting  technique  in  we  swap    with  adjecnt  element  if   1st  one  largere
 * each  cycle  make sure  that peak element  go to  last
 * hence  internal loop should  run  1 less comparsion in each  iteration like  n=5 ->1st(n=0)-4 comp 2nd(n=1)3----so on 
 * so  Tc-O(n^2)
 *for  optimization  we used isSwapped flag because in which cycle  swapping does  not happen  the it sorted  
 */


 function bubbleSort(arr){
    let n=arr.length;
    for (let  i=0;i<n-1;i++){
        // flag  to check   if swapp happened 
        let  isSwapped=false
        for (let  j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                // swap happed 
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                isSwapped=true
            }
        }
        if(!isSwapped) break;



    }
    return arr
 }

 console.log(bubbleSort([12,1,45,3,67,2,9,11,3]))