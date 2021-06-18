// var ds = document.getElementsByClassName('td-scores');
// console.log(ds);
// var arr = [];
// function inDS(){
//    for(var i =0; i< ds.length; i++){
//       var dtb = ds[i].innerHTML;
//       arr.push(parseFloat(dtb));    
//    }
//    console.log(arr);
// }
// inDS();

// function selectionSort(arr){
//     var currentValue ;
//     for(var i =0; i< arr.length;i++){
//        currentValue = i;
//        for(var j =i+1;j<arr.length;j++){
//           if(arr[currentValue] >arr[j]){
//              currentValue= j;
//           }
//        }
//        if(i !== currentValue){
//           var temp = arr[i];
//           arr[i]= arr[currentValue];
//           arr[currentValue]=temp;
//        }
//     }
//     return arr;
//  }
//  var newArr = selectionSort(arr);
//  console.log(newArr);
//  btnSapXepTang.addEventListener('click',function(){
//     selectionSort(arr);
//     dtbTang.innerHTML= newArr;
//  })