function insertionSort<T>(array:number[]) {

   for(let i = 1; i<array.length;i++){
       let open = array[i]
       let j = i -1
       if(open<array[j]&& (j>-1)){
           array[j+1] = array[j]
           j--
       }
       array[j+1] = open
   }
   return array
}
let array = [1,2,5,4,7,89,45]
console.log(insertionSort(array))