
var password = [1,2,3,4,5,6,7,8,9];

function createpassword() {
    function rep1UC(x) {
        var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var alphkey = Math.floor(Math.random() * uppercase.length);
        var x = uppercase[alphkey];
        console.log(password);
        };
    
    function rep1LC(x) {
        var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
        var lcgenerate = Math.floor(Math.random() * lclttrs.length);
        var x = lclttrs[lcgenerate];
        console.log(password);
        };
    
    function rep1SC(x) {
        var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
        var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
        var x = spcllttrs[spclgenerate];
        console.log(password);
        };
    
    function rep1NMC(x) {
        var numbers = ["1","2","3","4","5","6","7","8","9","0"];
        var nmbrgenerate = Math.floor(Math.random() * numbers.length);
        var x = numbers[nmbrgenerate];
        console.log(password);
        };


    function createint(max) {
        return Math.floor(Math.random()* max);
    }; // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 

    function randomassign(x) {
        createint(4);
        if (createint(4) == 0) {
            rep1UC(x);
        } 
        else if (createint(4) == 1) {
            rep1LC(x);
        }
        else if (createint(4) == 2) {
            rep1SC(x);
        }
        else if (createint(4) == 3) {
            rep1NMC(x);
        };
    };
    console.log(randomassign(password[0]));
    console.log(createint(4));

    randomassign(password[0]);
    randomassign(password[1]);
    randomassign(password[2]);
    randomassign(password[3]);
    randomassign(password[4]);
    randomassign(password[5]);
    randomassign(password[6]);
    randomassign(password[7]);
    randomassign(password[8]);

    console.log(password);

};

createpassword();
console.log(password);





