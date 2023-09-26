/* Author: 

*/

// 1)
//      *
//     *A*
//    *A*A*
//   *A*A*A*

const pyramid = () => {
  let a = "", num = 3, num1 = 1;
  for (let i = 1; i <= 4; i++) {
    for (let k = 1; k <= num; k++) {
      a += " ";
    }
    for (let j = 1; j <= num1; j++) {
      if (((i + j) - i) % 2 == 1) {
        a += "*";
      }
      else if (((i + j) - i) % 2 == 0) {
        a += "A";
      }
    }
    num--;
    num1 += 2;
    a += "\n"
  }
  console.log(a);
};

pyramid();



//2) *  *
//   ** **
//   ******
//   ** **
//   *  *

const doubleHalfKite = () => {
  let space = 2, a = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
      a += "*";
    }
    for (let k = 1; k <= space; k++) {
      a += " ";
    }
    for (let l = 1; l <= i; l++) {
      a += "*";
    }
    a += "\n";
    space--;
  }
  let space1 = 1;
  for (let p = 2; p >= 1; p--) {
    for (let q = 1; q <= p; q++) {
      a += "*";
    }
    for (let r = 1; r <= space1; r++) {
      a += " ";
    }
    for (let s = 1; s <= p; s++) {
      a += "*";
    }
    space1++;
    a += "\n";
  }
  console.log(a)
};

doubleHalfKite();



//3)  ********
//    *** ***
//    **  **
//    *   *
//    **  **
//    *** ***
//    ********

const doubleHalfHollowHourGlass = () => {
  let a = "", num = 4, space = 0, num2 = 4;
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= num; j++) {
      a += "*";
    }
    for (let k = 1; k <= space; k++) {
      a += " ";
    }
    for (let l = 1; l <= num2; l++) {
      a += "*";
    }

    num--;
    space++;
    num2--;

    a += "\n";
  }
  let space1 = 2, num3 = 2, num4 = 2;
  for (let b = 1; b <= 3; b++) {
    for (let c = 1; c <= num3; c++) {
      a += "*";
    }
    for (let d = 1; d <= space1; d++) {
      a += " ";
    }
    for (let e = 1; e <= num4; e++) {
      a += "*";
    }
    space1--;
    num3++;
    num4++;
    a += "\n";
  }
  console.log(a);
};

doubleHalfHollowHourGlass();

//4)  1
//    1 4
//    1 8 27

const cubeNumberTriangle = () => {
  let a = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
      a += (Math.pow(j, i)).toString();
    }
    a += "\n";
  }
  console.log(a);
};

cubeNumberTriangle();

//5) #
//   ##
//   ###
//   ####
//   #####
//   ######

const hashTriangle = () => {
  let a = "";
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
      a += "#";
    }
    a += "\n";
  }
  console.log(a);
};

hashTriangle();

//6)   *
//    * *
//   *   *
//  *     *
// *********

const hollowTriangle = () => {
  let n = 5;
let a = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    a += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === n) {
      a += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        a += "*";
      }
      else {
        a += " ";
      }
    }
  }
  a += "\n";
}
console.log(a);
};

hollowTriangle();






