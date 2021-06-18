var ds = document.querySelector('#tblBody');

console.log(ds.rows)
console.log(ds.rows[3].cells[2].innerHTML)
var dsDTB =[];
function inDanhSach(){
    var arrRow = ds.rows;
    for(var i =0; i<arrRow.length;i++){
        var dtb = arrRow[i].cells[3].innerHTML;
        dsDTB.push(parseFloat(dtb));
    }
    console.log(dsDTB);
}
inDanhSach();
function findMax(){
    var max =dsDTB[0];
    var viTriMax;
    for(var i =0;i<dsDTB.length;i++){
        if(max < dsDTB[i]){
            max = dsDTB[i];
            viTriMax =i;
        }
    }
    svGioiNhat.innerHTML ="diem: "+ max + " " + "ten: "+ ds.rows[viTriMax].cells[2].innerHTML;
    console.log("max: "+ max, "vi tri max: "+ viTriMax)
}

function findMin(){
    var min =dsDTB[0];
    var viTriMin;
    for(var i =0;i<dsDTB.length;i++){
        if(min > dsDTB[i]){
            min= dsDTB[i];
            viTriMin =i;
        }
    }
    svYeuNhat.innerHTML ="diem: "+ min + " " + "ten: "+ ds.rows[viTriMin].cells[2].innerHTML;
    console.log("max: "+ min + "vi tri max: "+ viTriMin)
}

function sapXep(arr){
    var currentValue;
    for(var i=0; i<dsDTB.length; i++){
        currentValue = i;
        for(var j=i+1; j<dsDTB.length; j++){
            if(dsDTB[currentValue] > dsDTB[j]){
                currentValue = j;
            }
        }
        if(i !== currentValue){
            var temp = dsDTB[i];
            dsDTB[i]  = dsDTB[currentValue];
            dsDTB[currentValue]= temp;
        }
    }
    return arr

}


btnSVThapDiemNhat.addEventListener('click', function(){
    findMin();
    
})
btnSVCaoDiemNhat.addEventListener('click', function(){
    findMax();
    
})
btnSapXepTang.addEventListener('click', function(){
    sapXep();
    dtbTang.innerHTML =sapXep(dsDTB);
    console.log(dsDTB)
console.log(sapXep(dsDTB));
})