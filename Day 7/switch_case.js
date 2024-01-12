// switch case statements

// Rules of switch case statements

// data type of expression and case must me same
// case must be constant or literal
// when any of the case fails to match then at that case default block is executed
// by convention default is at last but can be at any position

let day = 1;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
}