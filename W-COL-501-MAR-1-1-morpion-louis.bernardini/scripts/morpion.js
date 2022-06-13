jQuery.fn.morpion = function () {

    $('#replay').click(function () {
        $("#grid").removeClass('won');
        $('.cell').empty();
        jeu = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    });
    
    var jeu = new Array();
    jeu = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function upDateArray(jeu, index, valeur) {
        jeu[index] = valeur;
    }

    function verif(jeu, element) {
        result = 0;
        for (index = 0; index < 3; index++) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } 
        else {
            result = 0;
        }
        for (index = 3; index <= 5; index++) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } 
        else {
            result = 0;
        }

        for (index = 6; index <= 9; index++) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } 
        else {
            result = 0;
        }
        for (index = 0; index <= 6; index = index + 3) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } 
        else {
            result = 0;
        }
        for (index = 1; index <= 7; index = index + 3) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } 
        else {
            result = 0;
        }
        for (index = 2; index <= 8; index = index + 3) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } else {
            result = 0;
        }

        for (index = 0; index <= 8; index = index + 4) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } 
        else {
            result = 0;
        }
        for (index = 2; index <= 6; index = index + 2) {
            if (element == jeu[index]) {
                result++;
            }
        }
        if (result == 3) {
            return true;
        } 
        else {
            result = 0;
        }
        return false;
    }

    function arrayComplet(jeu) {
        if (jeu.indexOf(0) == -1) {
            return true;
        } 
        else { 
            return false 
        }
    }
    var par = 1;
    j_1 = "Joueur 1";
    point_j1 = 0;
    point_j2 = 0;
    $("#currentPlayer").text(j_1);
    j_2 = "Joueur 2";

    $(".cell").click(function () {
        if (par & 1) {
            if ($(this).text() == "") {
                var index = $(".cell").index(this);
                upDateArray(jeu, index, "X");
                if (verif(jeu, "X")) {
                    $("#grid").addClass("won");
                    $(".win-display").text(" Jouer 1 a gagné !");
                    point_j1++;
                    $("#playerOne").text(point_j1);

                } else {
                    if (arrayComplet(jeu)) {
                        $("#grid").addClass("won");
                        $(".win-display").text(" Match nul !");
                    }
                }
                $("#currentPlayer").text(j_2);
                $(this).text("X");
                par++;
            }

        } else {
            if ($(this).text() == "") {
                var index = $(".cell").index(this);
                upDateArray(jeu, index, "O");
                if (verif(jeu, "O")) {
                    $("#grid").addClass("won");
                    $(".win-display").text(" Jouer 2 a gagné !");
                    point_j2++;
                    $("#playerTwo").text(point_j2);
                } else {
                    if (arrayComplet(jeu)) {
                        $("#grid").addClass("won");
                        $(".win-display").text(" Match nul !");
                    }
                }
                $("#currentPlayer").text(j_1);
                $(this).text("O");
                par++;
            }
        }
    });


}
$('#grid').morpion();