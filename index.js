
var password = [1,2,3,4,5,6,7,8,9];

function createint(max) {
    return Math.floor(Math.random() * max);
}

function createpassword() {
    function rep1UC() {
        var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var alphkey = Math.floor(Math.random() * uppercase.length);
        password[createint(9)] = uppercase[alphkey];
        console.log(password);
        };

    function rep1LC() {
        var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
        var lcgenerate = Math.floor(Math.random() * lclttrs.length);
        password[createint(9)] = lclttrs[lcgenerate];
        console.log(password);
        };
    
    function rep1SC() {
        var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
        var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
        password[createint(9)] = spcllttrs[spclgenerate];
        console.log(password);
        };
    
    function rep1NMC() {
        var numbers = ["1","2","3","4","5","6","7","8","9","0"];
        var nmbrgenerate = Math.floor(Math.random() * numbers.length);
        password[createint(9)] = numbers[nmbrgenerate];
        console.log(password);
        };



    // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 

    function randomassign() {
        (createint(4));
        if (createint(4) == 0) {
            rep1UC();
        } 
        else if (createint(4) == 1) {
            rep1LC();
        }
        else if (createint(4) == 2) {
            rep1SC();
        }
        else if (createint(4) == 3) {
            rep1NMC();
        };
    };
    randomassign(password[1]);
    randomassign(password[2]);
    randomassign(password[3]);
    randomassign(password[4]);
    randomassign(password[5]);
    randomassign(password[6]);
    randomassign(password[7]);
    randomassign(password[8]);
    randomassign(password[0]);
    randomassign(password[1]);
    randomassign(password[2]);
    randomassign(password[3]);
    randomassign(password[4]);
    randomassign(password[5]);
    randomassign(password[6]);
    randomassign(password[7]);
    randomassign(password[8]);
    randomassign(password[0]);
    randomassign(password[1]);
    randomassign(password[2]);
    randomassign(password[3]);
    randomassign(password[4]);
    randomassign(password[5]);
    randomassign(password[6]);
    randomassign(password[7]);
    randomassign(password[8]);
    randomassign(password[0]);
    randomassign(password[1]);
    randomassign(password[2]);
    randomassign(password[3]);
    randomassign(password[4]);
    randomassign(password[5]);
    randomassign(password[6]);
    randomassign(password[7]);
    randomassign(password[8]);
    randomassign(password[0]);

    function repeat () {
        if (password[0] === 0) {
            randomassign(password[0]);
        }
    }
    console.log(password[createint(9)]);

    console.log(password);

};

createpassword();
console.log(password);





