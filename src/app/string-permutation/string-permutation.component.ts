import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-permutation',
  templateUrl: './string-permutation.component.html',
  styleUrls: ['./string-permutation.component.scss']
})
export class StringPermutationComponent implements OnInit {
  ngOnInit() {}


/** Method 1: recommended method latest 
/// This solution works for minimum 3 length; 
var a = ['A', 'B', 'C', 'D'];
var backup = a.slice();
// Find total permulations for given string -1
var per = totPer(a.length-1);
var i, j;

var res = [];
console.log();
for(i=0;i <a.length;i++){   
  a = backup.slice();
 
  if(i!==0){
  [a[0],a[i]] = [a[i], a[0]]; 
  }
  
  var cur = 1;
  for(j=0;j<per;j++){   
   
    var next = cur+1;  
    if(!a[next]){    
      cur= 1;
      next = cur+1;
    }
    
    [a[cur],a[next]] = [a[next], a[cur]];
    res.push(a.join());    
    cur++;    
  }
}

console.log(res);

function totPer(len){
  var res =1;
  for(j=1;j<=len;j++){ 
    res = j*res;
  }
  return res;
}
 */












  /** Methode 2
   * 
    var arr = ['A']; 
 var res = [];
 findPermutaions(this.arr);
 console.log('Total Permutations : ' + res.length);
 console.log(res);
 


  function findPermutaions(arr){
    if(arr.length <= 1){
      return res.push(...arr);
      return;
    }
    var loopCount = findNoPermutations(arr.length-1);    
    var temp = arr.slice();
    var nextPos = 1; 
    for (var i = 0; i < arr.length; i++) {     
      arr = temp;      
      nextPos = 1; 
      if (i !== 0 && loopCount!==1) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
      }
     
      for (let j = 1; j <= loopCount; j++) {
        if (arr[nextPos]) {
          if (!arr[nextPos + 1]) {
             nextPos = 1;          
          }         
          swapArray(arr, nextPos);
          nextPos++;          
        }
      }
    }
  }


function swapArray(arr, nextPos){
 var sPos = nextPos +1;
  /// This condition for to handle 2 characters in a string
  if(!arr[nextPos +1]){
    sPos =0;
  }
  console.log(arr);
  [arr[nextPos], arr[sPos]] = [arr[sPos], arr[nextPos]];
  res.push(converToString(arr));
}


function findNoPermutations(len) {
    let val = 1;
    for (let i = 1; i <= len; i++) {
     val *=i;
    }
    return val;
  }

function converToString(val){
  var result ='';
  for(let i of val){
    result +=i;
  }
  return result;
}
*/


}
