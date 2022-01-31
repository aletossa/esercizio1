var turniGiocatore; 


var griglia=[6,12,18,24,30,36,42,
    5,11,17,23,29,35,41,
    4,10,16,22,28,34,40,
    3,9,15,21,27,33,39,
    2,8,14,20,26,32,38,
    1,7,13,19,25,31,37];


function cambiaGiocatori() {

    if (turniGiocatore == true) {
        turniGiocatore = false;
    } 
    else {
        turniGiocatore = true;
    }

    

    return turniGiocatore;
}


function ripeti() {

    var griglia=[6,12,18,24,30,36,42,
        5,11,17,23,29,35,41,
        4,10,16,22,28,34,40,
        3,9,15,21,27,33,39,
        2,8,14,20,26,32,38,
        1,7,13,19,25,31,37]; 

    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("c4").innerHTML = "";
    document.getElementById("c5").innerHTML = "";
    document.getElementById("c6").innerHTML = "";
    document.getElementById("c7").innerHTML = "";
    document.getElementById("c8").innerHTML = "";
    document.getElementById("c9").innerHTML = "";
    document.getElementById("c10").innerHTML = "";
    document.getElementById("c11").innerHTML = "";
    document.getElementById("c12").innerHTML = "";
    document.getElementById("c13").innerHTML = "";
    document.getElementById("c14").innerHTML = "";
    document.getElementById("c15").innerHTML = "";
    document.getElementById("c16").innerHTML = "";
    document.getElementById("c17").innerHTML = "";
    document.getElementById("c18").innerHTML = "";
    document.getElementById("c19").innerHTML = "";
    document.getElementById("c20").innerHTML = "";
    document.getElementById("c21").innerHTML = "";
    document.getElementById("c22").innerHTML = "";
    document.getElementById("c23").innerHTML = "";
    document.getElementById("c24").innerHTML = "";
    document.getElementById("c25").innerHTML = "";
    document.getElementById("c26").innerHTML = "";
    document.getElementById("c27").innerHTML = "";
    document.getElementById("c28").innerHTML = "";
    document.getElementById("c29").innerHTML = "";
    document.getElementById("c30").innerHTML = "";
    document.getElementById("c31").innerHTML = "";
    document.getElementById("c32").innerHTML = "";
    document.getElementById("c33").innerHTML = "";
    document.getElementById("c34").innerHTML = "";
    document.getElementById("c35").innerHTML = "";
    document.getElementById("c36").innerHTML = "";
    document.getElementById("c37").innerHTML = "";
    document.getElementById("c38").innerHTML = "";
    document.getElementById("c39").innerHTML = "";
    document.getElementById("c40").innerHTML = "";
    document.getElementById("c41").innerHTML = "";
    document.getElementById("c42").innerHTML = "";


    document.getElementById("messaggio").innerHTML = "";

}


function controllo(cella) {

    if (griglia[cella] == "X" || griglia[cella] == "O") {
        return true;
    }

    return false;
}


function vittoria() {

    //VERTICALE  
    
    if (griglia[6] == griglia[5] && griglia[6] == griglia[4] && griglia[6]==griglia[3]) { 
        vincitore(6);
    } 
    else if (griglia[5] == griglia[4] && griglia[5] == griglia[3] && griglia[5]==griglia[2]) { 
        vincitore(5);
    } 
    else if (griglia[4] == griglia[3] && griglia[4] == griglia[2] && griglia[4]==griglia[1]) { 
        vincitore(4);
    } 
    else if (griglia[12] == griglia[11] && griglia[12] == griglia[10] && griglia[12]==griglia[9]) { 
        vincitore(12);
    } 
    else if (griglia[11] == griglia[10] && griglia[11] == griglia[9] && griglia[11]==griglia[8]) { 
        vincitore(11);
    } 
    else if (griglia[10] == griglia[9] && griglia[10] == griglia[8] && griglia[10]==griglia[7]) { 
        vincitore(10);
    } 
    else if (griglia[18] == griglia[17] && griglia[18] == griglia[16] && griglia[18]==griglia[15]) { 
        vincitore(18);
    }
    else if (griglia[17] == griglia[16] && griglia[17] == griglia[15] && griglia[17]==griglia[14]) { 
        vincitore(17);
    } 
    else if (griglia[16] == griglia[15] && griglia[16] == griglia[14] && griglia[16]==griglia[13]) { 
        vincitore(16);
    } 
    else if (griglia[24] == griglia[23] && griglia[24] == griglia[22] && griglia[24]==griglia[21]) { 
        vincitore(24);
    } 
    else if (griglia[23] == griglia[22] && griglia[23] == griglia[21] && griglia[23]==griglia[20]) { 
        vincitore(23);
    } 
    else if (griglia[22] == griglia[21] && griglia[22] == griglia[20] && griglia[22]==griglia[19]) { 
        vincitore(22);
    } 
    else if (griglia[30] == griglia[29] && griglia[30] == griglia[28] && griglia[30]==griglia[27]) { 
        vincitore(30);
    } 
    else if (griglia[29] == griglia[28] && griglia[29] == griglia[27] && griglia[29]==griglia[26]) { 
        vincitore(29);
    } 
    else if (griglia[28] == griglia[27] && griglia[28] == griglia[26] && griglia[28]==griglia[25]) { 
        vincitore(28);
    }
    else if (griglia[36] == griglia[35] && griglia[36] == griglia[34] && griglia[36]==griglia[33]) { 
        vincitore(36);
    } 
    else if (griglia[35] == griglia[34] && griglia[35] == griglia[33] && griglia[35]==griglia[32]) { 
        vincitore(35);
    } 
    else if (griglia[34] == griglia[33] && griglia[34] == griglia[32] && griglia[34]==griglia[31]) { 
        vincitore(34);
    } 
    else if (griglia[42] == griglia[41] && griglia[42] == griglia[40] && griglia[42]==griglia[39]) { 
        vincitore(42);
    } 
    else if (griglia[41] == griglia[40] && griglia[41] == griglia[39] && griglia[41]==griglia[38]) { 
        vincitore(41);
    } 
    else if (griglia[40] == griglia[39] && griglia[40] == griglia[38] && griglia[40]==griglia[37]) { 
        vincitore(40);
    } 

    //ORIZZONTALE

    else if (griglia[6] == griglia[12] && griglia[6] == griglia[18] && griglia[6]==griglia[24]) { 
        vincitore(6);
    } 
    else if (griglia[12] == griglia[18] && griglia[12] == griglia[24] && griglia[12]==griglia[30]) { 
        vincitore(12);
    } 
    else if (griglia[18] == griglia[24] && griglia[18] == griglia[30] && griglia[18]==griglia[36]) { 
        vincitore(18);
    } 
    else if (griglia[24] == griglia[30] && griglia[24] == griglia[36] && griglia[24]==griglia[42]) { 
        vincitore(24);
    } 
    else if (griglia[5] == griglia[11] && griglia[5] == griglia[17] && griglia[5]==griglia[23]) { 
        vincitore(5);
    } 
    else if (griglia[11] == griglia[17] && griglia[11] == griglia[23] && griglia[11]==griglia[29]) { 
        vincitore(11);
    } 
    else if (griglia[17] == griglia[23] && griglia[17] == griglia[29] && griglia[17]==griglia[35]) { 
        vincitore(17);
    } 
    else if (griglia[23] == griglia[29] && griglia[23] == griglia[35] && griglia[23]==griglia[41]) { 
        vincitore(23);
    } 
    else if (griglia[4] == griglia[10] && griglia[4] == griglia[16] && griglia[4]==griglia[22]) { 
        vincitore(4);
    } 
    else if (griglia[10] == griglia[16] && griglia[10] == griglia[22] && griglia[10]==griglia[28]) { 
        vincitore(10);
    } 
    else if (griglia[16] == griglia[22] && griglia[16] == griglia[28] && griglia[16]==griglia[34]) { 
        vincitore(16);
    } 
    else if (griglia[22] == griglia[28] && griglia[22] == griglia[34] && griglia[22]==griglia[40]) { 
        vincitore(22);
    } 
    else if (griglia[3] == griglia[9] && griglia[3] == griglia[15] && griglia[3]==griglia[21]) { 
        vincitore(3);
    } 
    else if (griglia[9] == griglia[15] && griglia[9] == griglia[21] && griglia[9]==griglia[27]) { 
        vincitore(9);
    } 
    else if (griglia[15] == griglia[21] && griglia[15] == griglia[27] && griglia[15]==griglia[33]) { 
        vincitore(15);
    } 
    else if (griglia[21] == griglia[27] && griglia[21] == griglia[33] && griglia[21]==griglia[39]) { 
        vincitore(21);
    } 
    else if (griglia[2] == griglia[8] && griglia[2] == griglia[14] && griglia[2]==griglia[20]) { 
        vincitore(2);
    } 
    else if (griglia[8] == griglia[14] && griglia[8] == griglia[20] && griglia[8]==griglia[26]) { 
        vincitore(8);
    } 
    else if (griglia[14] == griglia[20] && griglia[14] == griglia[26] && griglia[14]==griglia[32]) { 
        vincitore(14);
    } 
    else if (griglia[20] == griglia[26] && griglia[20] == griglia[32] && griglia[20]==griglia[38]) { 
        vincitore(20);
    } 
    else if (griglia[1] == griglia[7] && griglia[1] == griglia[13] && griglia[1]==griglia[19]) { 
        vincitore(1);
    } 
    else if (griglia[7] == griglia[13] && griglia[7] == griglia[19] && griglia[7]==griglia[25]) { 
        vincitore(7);
    } 
    else if (griglia[13] == griglia[19] && griglia[13] == griglia[25] && griglia[13]==griglia[31]) { 
        vincitore(13);
    } 
    else if (griglia[19] == griglia[25] && griglia[19] == griglia[31] && griglia[19]==griglia[37]) { 
        vincitore(19);
    }        
    
                                                                                 

    //OBLIQUO

    else if (griglia[6] == griglia[11] && griglia[6] == griglia[16] && griglia[6]==griglia[21]) { 
        vincitore(6);
    }       
    else if (griglia[11] == griglia[16] && griglia[11] == griglia[21] && griglia[11]==griglia[26]) { 
        vincitore(11);
    }       
    else if (griglia[16] == griglia[21] && griglia[16] == griglia[26] && griglia[16]==griglia[31]) { 
        vincitore(16);
    } 
    else if (griglia[5] == griglia[10] && griglia[5] == griglia[15] && griglia[5]==griglia[20]) { 
        vincitore(5);
    }       
    else if (griglia[10] == griglia[15] && griglia[10] == griglia[20] && griglia[10]==griglia[25]) { 
        vincitore(10);
    }       
    else if (griglia[4] == griglia[9] && griglia[4] == griglia[14] && griglia[4]==griglia[19]) { 
        vincitore(4);
    }  
    else if (griglia[12] == griglia[17] && griglia[12] == griglia[22] && griglia[12]==griglia[27]) { 
        vincitore(12);
    }     
    else if (griglia[17] == griglia[22]&& griglia[17] == griglia[27] && griglia[17]==griglia[32]) { 
        vincitore(17);
    }
    else if (griglia[22] == griglia[27]&& griglia[22] == griglia[32] && griglia[22]==griglia[37]) { 
        vincitore(22);
    }
    else if (griglia[18] == griglia[23] && griglia[18] == griglia[28] && griglia[18]==griglia[33]) { 
        vincitore(18);
    }   
    else if (griglia[23] == griglia[28] && griglia[23] == griglia[33] && griglia[23]==griglia[38]) { 
        vincitore(23);
    }   
    else if (griglia[24] == griglia[29] && griglia[24] == griglia[34] && griglia[24]==griglia[39]) { 
        vincitore(24);
    }   

    else {
        pareggio();
    }
}




function pareggio() {
    
    var conta = 0;
    for (var i = 0; i < 16; i++) {
        if (griglia[i] == "X" || griglia[i] == "O") {
            conta++;
        }
    
    if (conta == 8) {
        document.getElementById("messaggio").style.textAlign = "center";
        document.getElementById("messaggio").style.color = "#ffffff";
        document.getElementById("messaggio").innerHTML = "Pareggio";
        
    }

    }
}


function vincitore(cella) {

    if (griglia[cella] == "X") {
        document.getElementById("messaggio").style.textAlign = "center";
        document.getElementById("messaggio").style.color = "#ffff00";
        document.getElementById("messaggio").innerHTML = "Giocatore 1 ha vinto!";
        
        
    } else if (griglia[cella] == "O") {
        document.getElementById("messaggio").style.textAlign = "center";
        document.getElementById("messaggio").style.color = "#cd853f";
        document.getElementById("messaggio").innerHTML = "Giocatore 2 ha vinto!";
        
        
    }
}


function premi1() {

    if (controllo(35) == false) {

        if (turniGiocatore == true) {
            
            document.getElementById("c36").style.color = "#ffff00";
            document.getElementById("c36").innerHTML = "X";
            griglia[35] = "X";
            vittoria();
        } else {
            document.getElementById("c36").style.color = "#cd853f";
            document.getElementById("c36").innerHTML = "O";
            griglia[35] = "O";
            vittoria();
        }
        cambiaGiocatori();


    }
    
    
}

function premi2() {
    if (controllo(36) == false) {

        if (turniGiocatore == true) {
            
            document.getElementById("c37").style.color = "#ffff00";
            document.getElementById("c37").innerHTML = "X";
            griglia[36] = "X";
            vittoria();
        } else {
            document.getElementById("c37").style.color = "#cd853f";
            document.getElementById("c37").innerHTML = "O";
            griglia[36] = "O";
            vittoria();
        }
        cambiaGiocatori();


    }
    
}

function premi3() {
    if (controllo(37) == false) {

        if (turniGiocatore == true) {
            
            document.getElementById("c38").style.color = "#ffff00";
            document.getElementById("c38").innerHTML = "X";
            griglia[37] = "X";
            vittoria();
        } else {
            document.getElementById("c38").style.color = "#cd853f";
            document.getElementById("c38").innerHTML = "O";
            griglia[37] = "O";
            vittoria();
        }
        cambiaGiocatori();


    }
    
}

function premi4() {
    if (controllo(38) == false) {

        if (turniGiocatore == true) {
            
            document.getElementById("c39").style.color = "#ffff00";
            document.getElementById("c39").innerHTML = "X";
            griglia[38] = "X";
            vittoria();
        } else {
            document.getElementById("c39").style.color = "#cd853f";
            document.getElementById("c39").innerHTML = "O";
            griglia[38] = "O";
            vittoria();
        }
        cambiaGiocatori();


    }
    
}

function premi5() {
    if (controllo(39) == false) {

        if (turniGiocatore == true) {
            
            document.getElementById("c40").style.color = "#ffff00";
            document.getElementById("c40").innerHTML = "X";
            griglia[39] = "X";
            vittoria();
        } else {
            document.getElementById("c40").style.color = "#cd853f";
            document.getElementById("c40").innerHTML = "O";
            griglia[39] = "O";
            vittoria();
        }
        cambiaGiocatori();


    }
    
}

function premi6() {
    if (controllo(40) == false) {

        if (turniGiocatore == true) {
            
            document.getElementById("c41").style.color = "#ffff00";
            document.getElementById("c41").innerHTML = "X";
            griglia[40] = "X";
            vittoria();
        } else {
            document.getElementById("c41").style.color = "#cd853f";
            document.getElementById("c41").innerHTML = "O";
            griglia[40] = "O";
            vittoria();
        }
        cambiaGiocatori();


    }
    
}

function premi7() {
    if (controllo(41) == false) {

        if (turniGiocatore == true) {
            
            document.getElementById("c42").style.color = "#ffff00";
            document.getElementById("c42").innerHTML = "X";
            griglia[41] = "X";
            vittoria();
        } else {
            document.getElementById("c42").style.color = "#cd853f";
            document.getElementById("c42").innerHTML = "O";
            griglia[41] = "O";
            vittoria();
        }
        cambiaGiocatori();


    }
    
}

