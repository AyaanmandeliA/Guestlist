guest_list_array=[];

function submit(){
    var listvar=document.getElementById("guestname").value;
    guest_list_array.push(listvar);

    console.log(guest_list_array);

    document.getElementById("output").innerHTML=guest_list_array;
    document.getElementById("guestname").value="";
}

function show(){

    console.log(guest_list_array);

    document.getElementById("show_output").innerHTML=guest_list_array;
    document.getElementById("sort").style.display="block";
    document.getElementById("sort").style.float="center";
}

function sort(){
    guest_list_array.sort();
    document.getElementById("sort_output").innerHTML=guest_list_array;
}
