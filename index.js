var pass8index = [1, 2, 3, 4, 5, 6, 7, 8];

function createpassword () {

    var prompt = window.confirm("Would You Like A New Password?");

    if (!prompt) {
        return;
    };

    var upcsltrs = window.confirm("Would you like uppercase characters in your password?");

    if (!upcsltrs) {
        window.alert("No big deal! onto the next question!");
    }else{
        var uplttrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
        var generate = Math.floor(math.random() * uplttrs.length);
        var UCchoice = uplttrs[generate];
        var passgen1 = Math.floor(math.random() * pass8index.length);
        var pass1Choice = pass8index[passgen1];
    
        console.log(pass8index.values);

    };
    var lwcsltrs = window.confirm("Would you like lowercase characters in your password?");

    if (!lwcsltrs) {
        window.alert("Quite Alright Then! Onto the Next!");
    };

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


