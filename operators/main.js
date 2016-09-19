"usestrict";

var a = 1, b = 1, c, d;

var a = 1, b = 1, c, d;

c =++a; alert(c);// 2 prefix return new value (1+1)
d = b++; alert(d);// 1 postfix return old value (1+1-1)

c = 2 + ++a; alert(c);// 5 new value of a equals 3 (2+1)
d = 2 + b++; alert(d);// 4 previous value of b equals 2 (2+1-1)

alert(a);// 3 last value of a equals 3 (1+1+1)
alert(b);// 3 last value of b equals 3 (1+1+1)