"use strict"

let a = 3;

while (a < 9)
{
    a++;
    if (a == 7)
    {
        break;
    }
    else if (a == 8)
    {
        continue;
    }
    console.log(a);
}