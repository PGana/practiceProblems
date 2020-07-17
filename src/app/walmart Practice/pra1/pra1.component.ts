import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pra1',
  templateUrl: './pra1.component.html',
  styleUrls: ['./pra1.component.scss']
})
export class Pra1Component implements OnInit {

  /// Number of instance and indexes of string in bigstr.
  strInsIndexes: string;

  /// Min and Max - Array
  minMaxArray = [5, 9, 7, 8, 9, 10];

  /// Mean Mode Median - Array
  meaModeMedianArray = [2, 3, 6, 4, 9, 7, 6, 5, 2, 1, 1, 4, 8, 8, 5, 1]

  /// Compare two arrays
  fCompareAry = [1, 2, 3, 5];
  sCompareAry = [1, 3, 5, 6];


  /// String Permutaions
  permutationResult = [];
  constructor() { }

  ngOnInit(): void {
    this.findPermutaions(['A', 'B', 'C']);
  }

  /**
   * This method finds 
   * - Number of times perticular str has been repeated
   * - Index postion of a string
   * 
   * @param str - Sentance/paragraph
   * @param val - This is val which we need to find in sentance.
   */
  OnStringIndexInstances(str: string, val: string) {
    if (str && val) {
      const index = str.indexOf(val);
      const noOfInstances = (str.match(new RegExp(val, '\g')) || []).length;
      return { index, noOfInstances };
    }
    return '';
  }

  /// Min and Max - Array
  OnMinMaxArray() {
    const min = Math.min(...this.minMaxArray);
    const max = Math.max(...this.minMaxArray);
    return { min, max };
  }


  /// Mean, Mode, Median
  onMeanModeMedianArray(): any {
    /// mean = (Sum of tot no. / count of numbers)
    const mean = Math.ceil(this.meaModeMedianArray.reduce((a, b) => a + b) / this.meaModeMedianArray.length);
    // Most repeated number
    const mode = this.onMode(this.meaModeMedianArray);

    /// Median - 1. Sort array in assending order, find the meddile value;
    const sortedArrayAsc = this.meaModeMedianArray.slice().sort();
    const postion = Math.ceil(this.meaModeMedianArray.length / 2);
    const median = { sortedArrayAsc, median: sortedArrayAsc[postion - 1], postion }
    return { length: this.meaModeMedianArray.length, mean, mode, median };
  }
  onMode(numbers: number[]): number {
    let maxList;
    for (let num of numbers) {
      const counter = numbers.filter(val => val === num).length;
      if (!maxList) {
        maxList = { counter, num };
      } else if (counter > maxList.counter) {
        maxList = { counter, num };
      }
    }
    return maxList;
  }


  /** ----------------------------------------------
   * Compare two arrays
   */
  onCompareArrays() {
    const indexes = [];
    let index = 0;
    for (let i of this.fCompareAry) {
      const j = this.sCompareAry.findIndex(val => val === i);
      if (j === -1) {
        indexes.push(index);
      }

      index++;
    }
    return indexes;
  }

  /**
   * Merge Two Arrays -
   */
  onArrayMerge(a1: any[], a2: any[]) {
    return {
      method1: [...a1, ...a2],
      method2: a1.concat(a2)
    }
  }


  /**
   * HasMap/Map Object 
   */
  onHashMap() {
    const map = new Map();
    map.set('key1', [1, 2, 3]);
    map.set('key2', [4, 5]);
    map.set('key3', [6, 7]);

    console.log('Map Entries', map.entries())
    /// delete key
    map.delete('key3');

    /// Update key
    map.set('key2', [5, 4]);

    console.log('Map after delete key3', map.entries())
    return map.get('key1');
  }

  /**
 *  Power calculation - Finding power for numbers
 * @param number Integer number that we want to find power
 * @param factor power factor
 * example : onPow(2,3); // ouput : 8, onPow(2,-2) //Ouput 0.25, onPow(2,0) // ouput 1;  
 */
  onPow(number: number, factor: number): number {
    let pow = factor;
    let num = 1;
    /// Formular : aPow0 = 1;
    if (pow === 0) {
      return 1;
    }
    /// Convert negative power to positive 
    /// because when we have -ve values at power place formula  is aPow-X = (1/aPowX)
    if (pow < 0) {
      pow = pow * -1;
    }
    while (pow > 0) {
      num = num * number;
      console.log('Num : ' + num)
      pow--;
    }
    /// formula  is aPow-X = (1/aPowX) , when -ve number at power place
    if (factor < 0) {
      num = 1 / num;
    }
    return num;
  }

  /**
   * Finding second larget number without sorting
   * @param arr Number array list
   */
  findSecondMaxNum(arr: number[]) {
    var res = [0, 0];
    for (var i = 0; i < arr.length; i++) {
      var j = arr[i];
      var fMax = res[0];
      var sMax = res[1];

      if (fMax < j) {
        res[0] = j;
        res[1] = fMax;
      } else if (sMax < j) {
        res[1] = j;
      }
    }
    return res[1];
  }

  /**
   * Sum of digits given in a integer
   * @param num Interger number
   * Ex : input - 123 // ouput 1+2+3 = 6
   */
  findSumOfDigits(num: number): number {
    var sumOf = 0;
    var lastDigit = 0;

    while (num !== 0) {
      var lastDigit = num % 10;
      sumOf += lastDigit;
      ///Bitwise operator Not (~) will removes if there is any decimals
      num = ~~(num / 10);
    }
    return sumOf;
  }

  /**
   * Anagram - Check 2nd string consits of 1st string letters or not. 
   * @param arr list of two strings, 1st string compare the letters with 2nd string
   */
  findingAnagram(arr: any[]) {
    var count = 0;
    if (arr[1].length !== arr[0].length) {
      return false;
    }
    for (var i of arr[0]) {
      for (var j of arr[1]) {
        if (i === j) {
          count++;
          break;
        }
      }
    }
    if (count === arr[0].length) {
      return true;
    }
    return false;
  }

  /// Reverse the sentance into word wise;
  onRevertheSentance(sentance) {
    var str = sentance;

    var arr = [];
    var empty = '';

    let j = 0;
    /// Form an array by split using space
    for (let i of str) {
      empty += i;

      if (i === ' ') {
        arr.push(empty);
        empty = '';
      }
      j++;

      if (j == str.length) {
        arr.push(empty);
      }
    }
    var result = ''
    for (var i = arr.length - 1; i >= 0; i--) {
      result += ' ' + arr[i];
    }
    return result;
  }



  onReverseStringExcepSymbol() {
    var str = 'sas$mi$th';
    var pos = [];
    for (let i of str) {
      if (i == '$') {
        pos.push(i);
      }
    }



    /// reverse
    let a = 0;
    let result = [];
    for (let j = str.length - 1; j >= 0; j--) {
      if (str[j] !== '$') {
        result.push(str[j]);
      } else {
        for (let k of pos) {
          console.log('K, a : ' + k, a);
          if (+k === +a) {
            result.push('$');
          }
        }
      }

      a = a + 1;

    }
  }

  /**
   * Revers the string except special sysmbols
  */
  onValidateExpression(str) {
    const arr = this.onConvertStrToArr(str);
    let status = '';
    for (let index = 0; index < arr.length; index++) {
      const ele = arr[index];
      if (ele === '[' || ele === '{' || ele === '(') {
        const nextIndex = this.onRecursive(ele, arr, index);
        const nextClosingSym = arr[nextIndex];
        if ((ele === '[' && nextClosingSym === ']') || (ele === '(' && nextClosingSym === ')') || (ele === '{' && nextClosingSym === '}')) {
          status = 'Valid';
        } else {
          status = 'Invalid';
          break;
        }
      }
    }
    console.log('Status :' + status);
    return status;
  }


  onRecursive(s, arr, startIndex) {
    let postion = -1;
    for (let index = startIndex; index < arr.length; index++) {
      const ele = arr[index];
      if (ele == '[' || ele == '{' || ele == '(') {
        postion++;
      } else {
        break;
      }
    }
    return (startIndex + (postion * 2) + 1);
  }


  /// Convert string to array
  onConvertStrToArr(str: string): any[] {
    const arr = [];
    for (let i of str) {
      arr.push(i);
    }
    return arr;
  }
  /**... End Validate opeing /closing brackets */



  /**
   * -------------------------------------------------------------------
   * Permutation - Using String 
   * Ex - ABC  : this string holds 6 possible permutatios such as 
   * ABC, ACB, BCA, BAC, CAB,CBA;
   */

  /**
   * Permutations - String
   * @param arr Array of string
   */
  findPermutaions(arr: any[]) {
    if (arr.length === 1) {
      this.permutationResult.push(...arr);
      return;
    }
    const loopCount = this.findNoPermutations(arr.length - 1);
    let nextPos = 1;
    /// TO prevent shallow copy of array object, making deep copy so that temp will be independent
    const temp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
      arr = temp;
      nextPos = 1;
      if (i !== 0 && loopCount !== 1) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
      }
      for (let j = 1; j <= loopCount; j++) {
        if (arr[nextPos]) {
          if (!arr[nextPos + 1]) {
            nextPos = 1;
          }
          this.swapArray(arr, nextPos);
          nextPos++;
        }
      }
    }

    /// ------------Method : 2
    /**
     * /// Find Array - Permutations
    var a =[10,20,30];
    var backUp = a;
    var res=[];
    var totPer=findTotalPer(a.length-1);
    
    for(let i in a){  
      i = +i;
      a=backUp;
      var temp =[];
      var index=1;   
      if(i!==0){
        [a[0], a[i]] = [a[i], a[0]];     
      };
      for(var j=1;j<=totPer;j++){
        if(!a[index+1]){
         index =1;
        }
        swap(index, index+1); 
        index++;
      }  
    }
    console.log(res.length);
    console.log(JSON.stringify(res));
    
    function swap(f,l){  
     var b = a.slice();
      b[f]=b[f];
      b[l]=b[l];
      res.push(b);  
      [a[f], a[l]] = [a[l], a[f]];
     
    }
    
    function findTotalPer(num) {
      var val =1;
      while(num >0){
        val *=num;
        num--;
      }  
      return val;
      
    }
     */



  }

  swapArray(arr, nextPos) {
    var sPos = nextPos + 1;
    /// This condition for to handle 2 characters in a string
    if (!arr[nextPos + 1]) {
      sPos = 0;
    }
    console.log(arr);
    [arr[nextPos], arr[sPos]] = [arr[sPos], arr[nextPos]];
    this.permutationResult.push(this.converToString(arr));
  }

  findNoPermutations(len) {
    let val = 1;
    for (let i = 1; i <= len; i++) {
      val *= i;
    }
    return val;
  }

  converToString(val) {
    var result = '';
    for (let i of val) {
      result += i;
    }
    return result;
  }

  /// End... Permutation calculation


  /*
    findSmalletsInt() {
      var n = 2614301620;
      var removeCount = 3;
  
      var smallestInt = 0;
      var LargetInt = 0;
  
  
      recursive(n, removeCount);
  
      function recursive(num, count) {
        num = num + '';
  
        for (let i in num) {
  
          var temp = '';
          for (let j in num) {
            if (i !== j) {
              temp += num[j];
            }
          }
  
          /// Find smallest value
          if (temp < smallestInt || smallestInt === 0) {
            smallestInt = temp;
          }
  
          /// find Larget value
          if (temp > LargetInt) {
            LargetInt = temp;
          }
  
        }
  
        if (removeCount > 1) {
          removeCount--;
          console.log(smallestInt);
          recursive(smallestInt, removeCount);
  
        }
  
      }
  
      console.log('Smallet Result:' + smallestInt);
      //console.log('Larget Result:' + LargetInt);
  
  
    }
  
  */
  onGenerateStrSeries(str) {
    str = 'said';

    var result = [];
    let len = str.length;

    recursive(str);
    function recursive(str) {

      var sub = '';
      var temp = '';
      for (let i in str) {
        if (i !== 0 + '') {
          temp += str[i];
        }
        sub += str[i];
        result.push(sub);
      }

      if (len > 1) {
        len--;
        recursive(temp);
      }

    }

    console.log('Ouput Result: ' + result);


  }

  /**
   * Remove the word before comes to a special sysmbol - 
   * Ex : ab!c  //output 'ac', ab!!c //Ouput 'c'
   */
  onRemoveWordFrontOFSymbol() {
    var str = 'bc!f!!d';
    var result = [];
    for (var i of str) {
      if (i == '!') {
        if (result.length > 0) {
          result.pop();
        }
      } else {
        result.push(i);
      }
    }

    console.log(result);

  }




  /** --------------------------------------------------------------------------------------
   * Finding first min number of time repeated character in given string
   * Ex - analogy //output 'n'
   */

  FindMinOccuranceOfChar(str) {
    var a = [];
    // Convert to an array
    for (var i of str) {
      a.push(i);
    }
    var result = this.onRepeatedCount(a);
    var min = result.length + 1;
    var index = -1;

    for (var k in result) {
      var val = result[+k].count;
      if (val < min) {
        min = val;
        index = +k;
      }
    }
    return result[index];
  }

  onRepeatedCount(a: any[]) {
    var count = 0;
    var res = [];
    var min = 0;
    for (var i = 0; i < a.length; i++) {
      count = 0;
      for (var j = 0; j < a.length; j++) {
        if (a[i] === a[j]) {
          count += 1;
        }
      }
      res.push({ x: a[i], count: count });
    }
    return res;
  }
/// ......... END first min number of time repeated character ...........




  /** -----------------------------------------------------------------------------
   * Find the Common exists numbers in the given Arrays
   * Ex : a1 = [1,2,3], a2=[3,2], a3=[5,6,4,2,3] // Output = 2,3
   */
  findExistCommonNumbers() {
    var a = [5, 2, 1];
    var b = [2, 3, 5, 6, 1];
    var c = [1, 2, 4, 7, 8, 3];

    var temp = [a.length, b.length, c.length];
    var res = [];
    var result = [];
    var index = 0;

    /// Sort the 3 variables based on Length, because we don't the bigger array to loop that way we need to find the bigger array first.
    for (var i of [a, b, c]) {
      for (var j of temp) {
        j = +j;
        if (i.length === +j) {
          res.push(i);
          break;
        }
        index++;
      }
    }

    for (let i of res[2]) {
      let c1 = this.isExists(res[0], i);
      let c2 = this.isExists(res[1], i);

      if (c1 === true && c2 === true) {
        result.push(i);
      }
    }
    return result;
  }


  isExists(arr, val) {
    for (var k of arr) {
      if (k == val) {
        return true;
      }
    }
    return false;
  }
  ////...................... End Common exists numbers in the given Arrays



  /**
   * Finding closest pair and pair sum = closest given input
   * Ex : array = [1,3,2,5], Input= 9 //output [2,5], Input = 4 //ouput [1,3]
   */
  findClosestSumPair(input) {
    /// 1.  Finding closest pair and pair sum = given input
    var a = [1, 2, 3, 4, 5, 8];  
    var index = 0;
    var close = input;
    for (var iIndex in a) {
      var i= +iIndex;
      if (a[i + 1]) {
        var val = a[i] + a[i + 1];
        var dif = input - val;
        if (dif < close && dif >= 0) {
          close = dif;
          index =i;
        }
      }
    }
    return '('+ a[index] +','+ a[index + 1] +')';
  }
  ////...................... End Finding closest pair

  /**
   * Finding the pairs and pair sum = given input
   * Ex : array = [1,3,2,5,2,2], Input= 9 //output [], Input = 4 //ouput [(1,3),(2,2)], input =7 //output [2,5]
   */
    findSumPair(input) {
    var a = [1, 2, 1, 3, 5, 8, 2, 2];
    var index = 0;
    var result = [];
    for (var iIndex in a) {
     var i=+iIndex;
      if (a[i + 1]) {
        var val = a[i] + a[i + 1];
        console.log(a[i]);
        if (val === input) {
          result.push('(' + a[i] + ',' + a[i + 1] + ')');
        }
      }
    }
   return result;
  }
 ////...................... End Finding sum pair


  /** ------------------------------------------------
   * Separate characters and numbers from given string 
   */
  onSeparateCharNums() {
    var input = "1a2b3c4defgh567jklmnopqrst89uwxyz0";
    var num = '';
    var str = '';
    for (let i of input) {
      let j = +i * 1;
      if (j === +i) {
        num += i
      } else {
        str += i;
      }
    }
    return { str, num };
  }

  /** ----------------------------------------------------
   * Removing multiple spaces in b/w string
   */
  onRemoveWhiteSpace() {
    var str = 'Country  name     is     India';
    var res = '';
    for (let i of str) {
      if (res[res.length - 1] !== " " || i !== " ") {
        res += i;
      }
    }
    return res;
  }



  /**
   * Finding larget subString between two strings
   * Ex: s1 =javaCore, s2=BeginnnerjavaScript // Output - java
   * Steps
   * 1. loop through s1  and find first matche in s2
   * 2. if it find check next postion in both s1 and s2. 
   * 3. if both the position are same, then store to temp, else push temp to 'res' and empty the temp;
   * 4. find the large length variable from 'res' as  an output.
   */

  findingLargestSubString() {
    var a = "sqltutorialapl";
    var b = "javatutorialcpl";

    var res = [];
    var temp = '';
    var index = 0;
    for (let i = 0; i < a.length; i++) {
      index = i;
      for (let j = 0; j < b.length; j++) {
        if (a[index] && a[index] === b[j]) {
          temp += b[j];
          index++;
        } else {
          if (temp.length > 1) {
            res.push(temp);
          }
          temp = '';
        }
      }
    }

    /// find the large length variable from 'res' as  an output
    var len = 0;
    var result = '';
    for (let ele of res) {
      if (ele.length > len) {
        len = ele.length;
        result = ele;
      }
    }
    return result;
  }
}
