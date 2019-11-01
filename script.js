
function firstLast6(arr) {
    if(arr[0]==6) {
        return true ;
    }
    if(arr[arr.length-1]==6) {
        return true ;
    }
    return false ;
}

function has23(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i]==2||arr[i]==3) {
            return true ;
        }
    }
    return false;
}

function fix23(arr) {
    for(var i=0; i<arr.length-1; i++) {
        if(arr[i]==2&&arr[i+1]==3) {
            arr[i+1] = 0;
        }
    }
    return arr ;
}

function countYZ(string) {
    var count =0 ;
    for(var i=0; i<string.length; i++) {
        if((string.substring(i,i+1)==="y"||string.substring(i,i+1)==="z"||string.substring(i,i+1)==="Y"||string.substring(i,i+1)==="Z")&&(string.substring(i+1,i+2)===" "||i+1===string.length)) {
            count++ ;
        }
    }
    return count ;
}

function endOther(stringx,stringy) {
    var xl = stringx.length ;
    var yl = stringy.length ;
    var stringxl = stringx.toLowerCase() ;
    var stringyl = stringy.toLowerCase() ;

    if(xl-yl>0) {
        var miniStringx = stringx.substring(xl-yl,xl) ;
        var miniStringxl = miniStringx.toLowerCase() ;
        if(miniStringxl===stringyl) {
            return true ;
        } else {
            return false ;
        }
    }

    if(yl-xl>0){
        var miniStringy = stringy.substring(yl-xl,yl) ;
        var miniStringyl = miniStringy.toLowerCase() ;
        if(miniStringyl===stringxl) {
            return true ;
        } else {
            return false ;
        }
    }

    if(xl===yl) {
        if(stringxl===stringyl) {
            return true ;
        } else {
            return false ;
        }
    }
}

function starOut(string) {
    for(var i=0; i<string.length; i++) {
        var currentLetter = string.substring(i,i+1);
        var lastLetter = string.substring(i-1,i);
        var nextLetter = string.substring(i+1,i+2);
        var newString = "";
        if(currentLetter!=="*" && nextLetter!=="*" && lastLetter!=="*") {
            newString += currentLetter ;
        }
    }

    return newString ;

}

function getSandwich(string) {
    var f = string.indexOf("bread") ;
    var l = string.lastIndexOf("bread") ;
    var breadl = 5 ;
    if(f === l) {
        return "";
    } else {
        var newString = string.substring(f+breadl,l) ;
        return newString ;
    }
}

function canBalance(array) {
    var sumOne = 0;
    var sumTwo = 0;
    for(var i=0; i<array.length; i++) {
        for(var l=0; l<i; l++) {
            sumOne += array[l];
        }
        for(var k=l; k<array.length; k++) {
            sumTwo += array[k] ;
        }
        if(sumOne===sumTwo) {
            return true ;
        }
    }
    return false ;
}

function countClumps(array) {
    var count = 0;
    for(var i=0; i<array.length; i++) {
        if(array[i]===array[i+1]){
            count += 1;
            if(array[i+1]===array[i+2]) {
                count-=1;
            }
        }
    }
    return count;
}

function evenlySpaced(a,b,c) {
    if(a>b) {
        if(b>c) {
            var lg = a;
            var med = b;
            var sm = c;
        }
        if(c>b) {
            if(c>a) {
                var lg = c;
                var med = a;
                var sm= b;
            } else {
                var lg = a;
                var med = c;
                var sm = b;
            }
        }
    }
    if(b>c) {
        if(c>a) {
            var lg = b;
            var med = c;
            var sm = a;
        }
        if(a>c) {
            if(a>b) {
                var lg = a;
                var med = b;
                var sm = c;
            } else {
                var lg = b;
                var med = a;
                var sm = c;
            }
        }
    }
    if(c>a) {
        if(a>b) {
            var lg = c;
            var med = a;
            var sm = b;
        }
        if(b>a) {
            if(b>c) {
                var lg = b;
                var med = c;
                var sm = a;
            } else {
                var lg = c;
                var med = b;
                var sm = a;
            }
        }
    }
    if(a===b) {
        if(b===c) {
            return true;
        } else {
            return false ;
        }
    }
    if(b===c) {
        return false;
    }
    if(med-sm===lg-med) {
        return true ;
    }
    if(med===sm&&sm===lg) {
        return true;
    }
    return false;
}

function tester() {
    document.getElementById("output").innerHTML += firstLast6([1,5,8]);
    document.getElementById("output").innerHTML += has23([3,5]);
    document.getElementById("output").innerHTML += fix23([2,3,5]);
    document.getElementById("output").innerHTML += countYZ("help");
    document.getElementById("output").innerHTML += endOther("help");
    document.getElementById("output").innerHTML += starOut("help");
    document.getElementById("output").innerHTML += getSandwich();
    document.getElementById("output").innerHTML += canBalance([3,5,9,6]);
    document.getElementById("output").innerHTML += countClumps([9,9,8]);
    document.getElementById("output").innerHTML += evenlySpaced(2,4,6);


}
