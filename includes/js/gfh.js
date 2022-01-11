var wscore = 0;
var Wmultiplier = 1;
var wounds1 = 0;
var wounds2 = 0;
var wounds3 = 0;
wounds_array = ["w1.png", "w2.png", "w3.png"];

function resetW() {
    var wi1, wi2, wi3, wi4, wi5, wi6, wi7;
}

function get_random_wounds() {
    set_random_wounds(1);
    set_random_wounds(2);
    set_random_wounds(3);
    set_random_wounds(4);
    set_random_wounds(5);
    set_random_wounds(6);
    set_random_wounds(7);
    setHeal(1, "wi1");
    setHeal(2, "wi2");
    setHeal(3, "wi3");
    setHeal(4, "wi4");
    setHeal(5, "wi5");
    setHeal(6, "wi6");
    setHeal(7, "wi7");
    // console.log(wi1);
    // console.log(wi2);
    // console.log(wi3);
    // console.log(wi4);
    // console.log(wi5);
    // console.log(wi6);
    // console.log(wi7);
}

function set_random_wounds(b) {
    $("#w" + b).attr(
        "src",
        "includes/img/wounds_frame/" +
        wounds_array[Math.floor(Math.random() * wounds_array.length)]
    );
}

function setHeal(i, k) {
    if ($("#w" + i).attr("src") == "includes/img/wounds_frame/w1.png") {
        window[k] = 1;
    } else if ($("#w" + i).attr("src") == "includes/img/wounds_frame/w2.png") {
        window[k] = 2;
    } else if ($("#w" + i).attr("src") == "includes/img/wounds_frame/w3.png") {
        window[k] = 3;
    }
}

function wFunction() {
    $("#w1").bind("click", function() {
        woundsFunction("wi1", 1);
    });
    $("#w2").bind("click", function() {
        woundsFunction("wi2", 2);
    });
    $("#w3").bind("click", function() {
        woundsFunction("wi3", 3);
    });
    $("#w4").bind("click", function() {
        woundsFunction("wi4", 4);
    });
    $("#w5").bind("click", function() {
        woundsFunction("wi5", 5);
    });
    $("#w6").bind("click", function() {
        woundsFunction("wi6", 6);
    });
    $("#w7").bind("click", function() {
        woundsFunction("wi7", 7);
    });
}
var click_wounds = 0;

function woundsFunction(bW, hideW) {
    window[bW]--;
    popSound();
    // console.log(window[bW]);
    click_wounds++;
    // console.log(click_wounds);

    if ($("#w" + hideW).attr("src") == "includes/img/wounds_frame/w2.png") {
        $("#w" + hideW).attr("src", "includes/img/wounds_frame/w1.png");
    } else if (
        $("#w" + hideW).attr("src") == "includes/img/wounds_frame/w3.png"
    ) {
        $("#w" + hideW).attr("src", "includes/img/wounds_frame/w2.png");
    }

    if (window[bW] == 0) {
        $("#w" + hideW).addClass("opacity-0");
        getWscore();
        $("#w" + hideW).unbind("click");
        // console.log(wscore);
        if (
            $("#w1").hasClass("opacity-0") &&
            $("#w2").hasClass("opacity-0") &&
            $("#w3").hasClass("opacity-0") &&
            $("#w4").hasClass("opacity-0") &&
            $("#w5").hasClass("opacity-0") &&
            $("#w6").hasClass("opacity-0") &&
            $("#w7").hasClass("opacity-0")
        ) {
            $("#w1,#w2,#w3,#w4,#w5,#w6,#w7").removeClass("opacity-0");
            get_random_wounds();
            wFunction();
        }
    }
}

function getWscore() {
    if (click_wounds == 1) {
        wscore += 10;
        click_wounds = 0;
        wounds1 += 1;
    } else if (click_wounds == 2) {
        wscore += 20;
        click_wounds = 0;
        wounds2 += 1;
    } else if (click_wounds == 3) {
        wscore += 30;
        click_wounds = 0;
        wounds3 += 1;
    }
}

// btn

$("#gfh_gameplay_back").click(function() {
    wBack("gfh_gameplay", "legend_gfh");
    $("#w1,#w2,#w3,#w4,#w5,#w6,#w7").unbind("click");
    $("#cw1,#cw2,#cw3").unbind("click");
    $("#w1,#w2,#w3,#w4,#w5,#w6,#w7").removeClass("opacity-0");
    resetW();
    wscore = 0;
    clearInterval(c);
});

function multiplierW() {
    $("#cw1").bind("click", function() {
        Wmultiplier += 1;
        bonus();
        $("#cw1").addClass("d-none").unbind("click");
        //console.log(multiplier);
    });
    $("#cw2").bind("click", function() {
        Wmultiplier += 1;
        bonus();
        $("#cw2").addClass("d-none").unbind("click");
        //console.log(multiplier);
    });
    $("#cw3").bind("click", function() {
        Wmultiplier += 1;
        bonus();
        $("#cw3").addClass("d-none").unbind("click");
        //console.log(multiplier);
    });
}

$("#legend_gfh_next").click(function() {
    wNext("legend_gfh", "gfh_gameplay");
    $("#gfh_gameplay_frame").css(
        "background-image",
        "url('includes/img/frame/green_skin.png')"
    );
    $("#Wtimer").text("0:30");
    get_random_wounds();
    wFunction();
    multiplierW();

    var s30 = 30 * 1;
    startTimer_wounds(s30);
});

$("#gfh_play").click(function() {
    wNext("p5", "gfh");
    $("#gfh_frame").css("background-image", "url('includes/img/frame/f1.png')");
    $("#legend_gfh_frame").css(
        "background-image",
        "url('includes/img/frame/f1.png')"
    );
    $("#mechanics_gfh_frame").css(
        "background-image",
        "url('includes/img/frame/f1.png')"
    );
});

$("#gfh_next").click(function() {
    wNext("gfh", "mechanics_gfh");
});
$("#gfh_back").click(function() {
    wBack("gfh", "p5");
});
$("#mechanics_gfh_next").click(function() {
    wBack("mechanics_gfh", "legend_gfh");
});
$("#mechanics_gfh_back").click(function() {
    wBack("mechanics_gfh", "gfh");
});
$("#legend_gfh_back").click(function() {
    wBack("legend_gfh", "mechanics_gfh");
});
$("#end_game").click(function() {
    wNext("game_score", "thank_you");
    $("html").css("background-image", "url('includes/img/bg/bg2.jpg')");
});

function wNext(thisPage, nextPage) {
    $("#" + thisPage).addClass("d-none");
    $("#" + nextPage).removeClass("d-none");
}

function wBack(thisPage, prevPage) {
    $("#" + thisPage).addClass("d-none");
    $("#" + prevPage).removeClass("d-none");
}

var isPaused = false;

$("#gfh_gameplay_pause").click(function() {
    var ResumeAndPause = $(this).text();
    if (ResumeAndPause == "PAUSE") {
        isPaused = true;
        $("#w1,#w2,#w3,#w4,#w5,#w6,#w7").unbind("click");
        $("#cw1,#cw2,#cw3").unbind("click");
        $(this).text("RESUME");
    } else {
        isPaused = false;
        multiplierW();
        wFunction();
        $(this).text("PAUSE");
    }
});

function startTimer_wounds(duration) {
    var timer = duration,
        minutes,
        seconds;

    c = setInterval(function() {
        if (!isPaused) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            $("#Wtimer").text("0" + ":" + seconds);

            if (timer == 7) {
                $("#cw1").removeClass("d-none");
                setTimeout(function() {
                    $("#cw1").addClass("d-none");
                }, 1500);
            } else if (timer == 15) {
                $("#cw2").removeClass("d-none");
                setTimeout(function() {
                    $("#cw2").addClass("d-none");
                }, 1500);
            } else if (timer == 25) {
                $("#cw3").removeClass("d-none");
                setTimeout(function() {
                    $("#cw3").addClass("d-none");
                }, 1500);
            }

            if (--timer < 0) {
                timer = duration;
                clearInterval(c);

                var wtotalScore1 = 10 * wounds1;
                var wtotalScore2 = 20 * wounds2;
                var wtotalScore3 = 30 * wounds3;
                var wfinalScore = wtotalScore1 + wtotalScore2 + wtotalScore3;
                // $(".score").text(wfinalScore + "  x" + Wmultiplier + " = " + wscore * Wmultiplier);
                if (Wmultiplier == 1) {
                    $(".score")
                        .html(
                            '<span class="left_bg_score">BONUS</span><span class="right_bg_score"> = 0</span>'
                        )
                        .removeClass("bg_scoring")
                        .addClass("bg_scoring_green");
                } else {
                    $(".score")
                        .html(
                            '<span class="left_bg_score">BONUS</span><span class="right_bg_score"> = x' +
                            Wmultiplier +
                            "</span>"
                        )
                        .removeClass("bg_scoring")
                        .addClass("bg_scoring_green");
                }
                $("#click1")
                    .html(
                        '<span class="left_bg_score_green">x' +
                        wounds1 +
                        '</span><span class="right_bg_score_green"> = ' +
                        wtotalScore1 +
                        "</span>"
                    )
                    .removeClass("bg_scoring")
                    .addClass("bg_scoring_green");
                $("#click2")
                    .html(
                        '<span class="left_bg_score_green">x' +
                        wounds2 +
                        '</span><span class="right_bg_score_green"> = ' +
                        wtotalScore2 +
                        "</span>"
                    )
                    .removeClass("bg_scoring")
                    .addClass("bg_scoring_green");
                $("#click3")
                    .html(
                        '<span class="left_bg_score_green">x' +
                        wounds3 +
                        '</span><span class="right_bg_score_green"> = ' +
                        wtotalScore3 +
                        "</span>"
                    )
                    .removeClass("bg_scoring")
                    .addClass("bg_scoring_green");
                $("#final_score").text(wscore * Wmultiplier);
                $("#img1")
                    .attr("src", "includes/img/wounds_frame/wf1.jpg")
                    .addClass("rounded-circle");
                $("#img2")
                    .attr("src", "includes/img/wounds_frame/wf2.jpg")
                    .addClass("rounded-circle");
                $("#img3")
                    .attr("src", "includes/img/wounds_frame/wf3.jpg")
                    .addClass("rounded-circle");
                $("#img1").attr("src", "includes/img/wounds_frame/wf1.jpg");
                $("#img2").attr("src", "includes/img/wounds_frame/wf2.jpg");
                $("#img3").attr("src", "includes/img/wounds_frame/wf3.jpg");
                $("#game_score").removeClass("d-none");
                $("#gfh_gameplay").addClass("d-none");
                $("#game_score_frame").css(
                    "background-image",
                    "url('includes/img/frame/f1.png')"
                );
                $("#utoJ")
                    .attr("src", "includes/img/products/juvenaid.png")
                    .addClass("j_size")
                    .removeClass("wU_size");
                timeUp();
            }
        }
    }, 1000);
}