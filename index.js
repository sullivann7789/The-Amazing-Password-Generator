

function createpassword () {
    var pass8index = [1, 2, 3, 4, 5, 6, 7, 8];
    
    var uplttrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
    var upgenerate = Math.floor(Math.random() * uplttrs.length);
    var UCchoice = uplttrs[upgenerate];
    var passgen1 = Math.floor(Math.random() * pass8index.length);

    function uppercase(lttr) {
    
    console.log(UCchoice);
    };

    var prompt = window.confirm("Would You Like A New Password?");

    if (!prompt) {
        return;
    };

    var upcsltrs = window.confirm("Would you like uppercase characters in your password?");

    if (!upcsltrs) {
        window.alert("No big deal! onto the next question!");
    }else{

        var pass1Choice = pass8index[passgen1];
        console.log(pass1Choice);
        pass8index[pass1Choice] = UCchoice;
        console.log(pass8index);

    };
    var lwcsltrs = window.confirm("Would you like lowercase characters in your password?");

    var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
    var lcgenerate = Math.floor(Math.random() * lclttrs.length);
    var lcchoice = lclttrs[lcgenerate];
    var passgen2 = Math.floor(Math.random() * pass8index.length);


    if (!lwcsltrs) {
        window.alert("Quite Alright Then! Onto the Next!");
    }else{
        var pass2Choice = pass8index[passgen2];
        console.log(pass2Choice);
        pass8index[pass2Choice] = lcchoice;
        console.log(pass8index);
    }

    var spclchts = window.confirm("Would you like special characters in your password?");

    if (!spclchts) {
        window.alert("Great! Moving on to our final question!")
    }
    var numchts = window.confirm("Would you like numbers in your password?");
    if (!numchts) {
        window.alert("Generating Password Now, click when ready...")
    }


}

createpassword();


