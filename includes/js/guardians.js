$(document).ready(function() {
    setTimeout(function() {
        next("game_landing", "p3");
    }, 1500);
});

bacteria_array = ["b1.gif", "b2.gif", "b3.gif"];
var multiplier = 1;
var bacteria1 = 0;
var bacteria2 = 0;
var bacteria3 = 0;

function resetV() {
    var bi1, bi2, bi3, bi4, bi5, bi6, bi7, bi8, bi9;
}

function get_random_bacteria() {
    set_random_bacteria(1);
    set_random_bacteria(2);
    set_random_bacteria(3);
    set_random_bacteria(4);
    set_random_bacteria(5);
    set_random_bacteria(6);
    set_random_bacteria(7);
    set_random_bacteria(8);
    set_random_bacteria(9);
    setKill(1, "bi1");
    setKill(2, "bi2");
    setKill(3, "bi3");
    setKill(4, "bi4");
    setKill(5, "bi5");
    setKill(6, "bi6");
    setKill(7, "bi7");
    setKill(8, "bi8");
    setKill(9, "bi9");
}

//Multiplier x
function multiplierF() {
    $("#c1").bind("click", function() {
        multiplier += 1;
        bonus();
        $("#c1").addClass("d-none").unbind("click");
        //console.log(multiplier);
    });
    $("#c2").bind("click", function() {
        multiplier += 1;
        bonus();
        $("#c2").addClass("d-none").unbind("click");
        //console.log(multiplier);
    });
    $("#c3").bind("click", function() {
        multiplier += 1;
        bonus();
        $("#c3").addClass("d-none").unbind("click");
        //console.log(multiplier);
    });
}

function setKill(i, k) {
    if ($("#i" + i).attr("src") == "includes/img/gif/b1.gif") {
        window[k] = 1;
    } else if ($("#i" + i).attr("src") == "includes/img/gif/b2.gif") {
        window[k] = 2;
    } else if ($("#i" + i).attr("src") == "includes/img/gif/b3.gif") {
        window[k] = 3;
    }
}

function set_random_bacteria(b) {
    $("#i" + b).attr(
        "src",
        "includes/img/gif/" +
        bacteria_array[Math.floor(Math.random() * bacteria_array.length)]
    );
}

var score = 0;

//F. b.
function bacteriaFunction(bI, hideI) {
    window[bI]--;
    popSound();
    //console.log(window[bI]);
    if (window[bI] == 0) {
        $("#i" + hideI).addClass("opacity-0");
        geScore(hideI);
        $("#i" + hideI).unbind("click");
        //console.log(score);
        if (
            $("#i1").hasClass("opacity-0") &&
            $("#i2").hasClass("opacity-0") &&
            $("#i3").hasClass("opacity-0") &&
            $("#i4").hasClass("opacity-0") &&
            $("#i5").hasClass("opacity-0") &&
            $("#i6").hasClass("opacity-0") &&
            $("#i7").hasClass("opacity-0") &&
            $("#i8").hasClass("opacity-0") &&
            $("#i9").hasClass("opacity-0")
        ) {
            $("#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9").removeClass("opacity-0");
            get_random_bacteria();
            bFunction();
        }
    }
}

function geScore(gI) {
    if ($("#i" + gI).attr("src") == "includes/img/gif/b1.gif") {
        score += 10;
        bacteria1 += 1;
    } else if ($("#i" + gI).attr("src") == "includes/img/gif/b2.gif") {
        score += 20;
        bacteria2 += 1;
    } else if ($("#i" + gI).attr("src") == "includes/img/gif/b3.gif") {
        score += 30;
        bacteria3 += 1;
    }
}

function bFunction() {
    $("#i1").bind("click", function() {
        bacteriaFunction("bi1", 1);
    });
    $("#i2").bind("click", function() {
        bacteriaFunction("bi2", 2);
    });
    $("#i3").bind("click", function() {
        bacteriaFunction("bi3", 3);
    });
    $("#i4").bind("click", function() {
        bacteriaFunction("bi4", 4);
    });
    $("#i5").bind("click", function() {
        bacteriaFunction("bi5", 5);
    });
    $("#i6").bind("click", function() {
        bacteriaFunction("bi6", 6);
    });
    $("#i7").bind("click", function() {
        bacteriaFunction("bi7", 7);
    });
    $("#i8").bind("click", function() {
        bacteriaFunction("bi8", 8);
    });
    $("#i9").bind("click", function() {
        bacteriaFunction("bi9", 9);
    });
}

$("#next_legend").click(function() {
    next("legend_gfi", "gfi_gameplay");
    resetV();
    get_random_bacteria();
    bFunction();
    multiplierF();
    var s30 = 30 * 1;
    startTimer(s30);
});

//Back Button
$("#back_gfi_gameplay").click(function() {
    clearInterval(c);
    score = 0;
    resetV();
    $("#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9").unbind("click");
    $("#c1,#c2,#c3").unbind("click");
    $("#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9").removeClass("opacity-0");

    next("gfi_gameplay", "legend_gfi");
    $("#Btimer").text("0:30");
});

$("#p2_play").click(function() {
    next("p2", "p3");
});
$("#p3_play").click(function() {
    next("p3", "p4");
    $("html").css("background-image", "url('includes/img/bg/bg3.png')");
});
$("#p4_play").click(function() {
    next("p4", "p5");
});
$("#gfi_play").click(function() {
    next("p5", "gfi");
    $("html").css("background-image", "url('includes/img/bg/bg4.png')");
    $("#gfi_gameplay_frame").css(
        "background-image",
        "url('includes/img/frame/f3.png')"
    );
    $("#gfi_frame").css("background-image", "url('includes/img/frame/f3.png')");
    $("#legend_gfi_frame").css(
        "background-image",
        "url('includes/img/frame/f3.png')"
    );
    $("#mechanics_gfi_frame").css(
        "background-image",
        "url('includes/img/frame/f3.png')"
    );
});
$("#gfi_back").click(function() {
    back("gfi", "p5");
});
$("#mgfi_back").click(function() {
    back("mechanics_gfi", "gfi");
});
$("#back_legend").click(function() {
    back("legend_gfi", "mechanics_gfi");
});
$("#back_home").click(function() {
    multiplier = 1;
    bacteria1 = 0;
    bacteria2 = 0;
    bacteria3 = 0;
    clearInterval(c);
    score = 0;
    resetV();
    $("#w1,#w2,#w3,#w4,#w5,#w6,#w7").unbind("click");
    $("#cw1,#cw2,#cw3").unbind("click");
    $("#w1,#w2,#w3,#w4,#w5,#w6,#w7").removeClass("opacity-0");
    resetW();
    wscore = 0;
    clearInterval(c);
    Wmultiplier = 1;
    wounds1 = 0;
    wounds2 = 0;
    wounds3 = 0;
    $("#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9").unbind("click");
    $("#c1,#c2,#c3").unbind("click");
    $("#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9").removeClass("opacity-0");
    $("#Btimer").text("0:30");
    back("game_score", "p5");
    $("#p5_frame").css("background-image", "url('includes/img/frame/f2.png')");
});

//Next Button
$("#gfi_next").click(function() {
    next("gfi", "mechanics_gfi");
});
$("#mgfi_next").click(function() {
    next("mechanics_gfi", "legend_gfi");
});

function next(thisPage, nextPage) {
    $("#" + thisPage).addClass("d-none");
    $("#" + nextPage).removeClass("d-none");
}

function back(thisPage, prevPage) {
    $("#" + thisPage).addClass("d-none");
    $("#" + prevPage).removeClass("d-none");
}

var isPaused = false;

$("#PNR").click(function() {
    var ResumeAndPause = $(this).text();
    if (ResumeAndPause == "PAUSE") {
        isPaused = true;
        $("#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9").unbind("click");
        $("#c1,#c2,#c3").unbind("click");
        $(this).text("RESUME");
    } else {
        isPaused = false;
        multiplierF();
        bFunction();
        $(this).text("PAUSE");
    }
});

function startTimer(duration) {
    var timer = duration,
        minutes,
        seconds;

    c = setInterval(function() {
        if (!isPaused) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            $("#Btimer").text("0" + ":" + seconds);

            if (timer == 7) {
                $("#c1").removeClass("d-none");
                setTimeout(function() {
                    $("#c1").addClass("d-none");
                }, 1500);
            } else if (timer == 15) {
                $("#c2").removeClass("d-none");
                setTimeout(function() {
                    $("#c2").addClass("d-none");
                }, 1500);
            } else if (timer == 25) {
                $("#c3").removeClass("d-none");
                setTimeout(function() {
                    $("#c3").addClass("d-none");
                }, 1500);
            }

            if (--timer < 0) {
                timer = duration;
                clearInterval(c);
                var totalScore1 = 10 * bacteria1;
                var totalScore2 = 20 * bacteria2;
                var totalScore3 = 30 * bacteria3;
                var finalScore = totalScore1 + totalScore2 + totalScore3;
                // $(".score").text(finalScore + "  x" + multiplier + " = " + score * multiplier);
                if (multiplier == 1) {
                    $(".score")
                        .html(
                            '<span class="left_bg_score">BONUS</span><span class="right_bg_score"> = 0</span>'
                        )
                        .removeClass("bg_scoring_green")
                        .addClass("bg_scoring");
                } else {
                    $(".score")
                        .html(
                            '<span class="left_bg_score">BONUS</span><span class="right_bg_score"> = x' +
                            multiplier +
                            "</span>"
                        )
                        .removeClass("bg_scoring_green")
                        .addClass("bg_scoring");
                }
                $("#click1")
                    .html(
                        '<span class="left_bg_score">x' +
                        bacteria1 +
                        '</span><span class="right_bg_score"> = ' +
                        totalScore1 +
                        "</span>"
                    )
                    .removeClass("bg_scoring_green")
                    .addClass("bg_scoring");
                $("#click2")
                    .html(
                        '<span class="left_bg_score">x' +
                        bacteria2 +
                        '</span><span class="right_bg_score"> = ' +
                        totalScore2 +
                        "</span>"
                    )
                    .removeClass("bg_scoring_green")
                    .addClass("bg_scoring");
                $("#click3")
                    .html(
                        '<span class="left_bg_score">x' +
                        bacteria3 +
                        '</span><span class="right_bg_score"> = ' +
                        totalScore3 +
                        "</span>"
                    )
                    .removeClass("bg_scoring_green")
                    .addClass("bg_scoring");
                $("#final_score").text(score * multiplier);
                $("#img1")
                    .attr("src", "includes/img/bacteria_frame/wf1.png")
                    .removeClass("rounded-circle");
                $("#img2")
                    .attr("src", "includes/img/bacteria_frame/wf2.png")
                    .removeClass("rounded-circle");
                $("#img3")
                    .attr("src", "includes/img/bacteria_frame/wf3.png")
                    .removeClass("rounded-circle");
                //  $("#coxid_img_res").addClass("wb_lg_14_frame_size");
                $("#game_score").removeClass("d-none");
                $("#gfi_gameplay").addClass("d-none");
                $("#game_score_frame").css(
                    "background-image",
                    "url('includes/img/frame/f3.png')"
                );
                $("#utoJ")
                    .attr("src", "includes/img/products/unilab.png")
                    .addClass("wU_size")
                    .removeClass("j_size");
                timeUp();
            }
        }
    }, 1000);
}

$("#sounds").click(function() {
    if ($("#sounds").attr("src") == "includes/img/off.png") {
        $("#sounds").attr("src", "includes/img/on.png");
        $("#music_bg")[0].play();
        $("#music_bg")[0].volume = 0.5;
        $("#music_bg")[0].loop = true;
    } else {
        $("#sounds").attr("src", "includes/img/off.png");
        $("#music_bg")[0].pause();
    }
});

//SFX
function popSound() {
    var myAudio = new Audio("includes/sfx/pop.mp3");
    myAudio.play();
}

function timeUp() {
    var myAudio = new Audio("includes/sfx/stage_clear.mp3");
    myAudio.play();
}

function bonus() {
    var myAudio = new Audio("includes/sfx/bonus.mp3");
    myAudio.play();
}