function send(){
        num_1 = document.getElementById("num_1").value ;
        num_2 = document.getElementById("num_2").value ;
        actual_answer = parseInt(num_1) * parseInt(num_2);
        Qnum = "<h4>" + num_1 + "X" + num_2 + "</h4>";
        inputbox = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
        check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check </button>";
        row = Qnum + inputbox + check_button ;
        document.getElementById("output").innerHTML = row;
        document.getElementById("num_1").value = "";
        document.getElementById("num_2").value = "";    


        
}