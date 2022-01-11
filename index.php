<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:site_name" content="Guardians of the Surgery" />
    <meta property="og:image" content="includes/img/gametitle.png" />
    <link rel="stylesheet" href="includes/css/style.css">
    <link rel="stylesheet" href="includes/css/bs4.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Guardians of the Surgery</title>
</head>

<body>


    <?php include 'pages/game_landing.php' ?>
    <?php include 'pages/p2.php' ?>
    <?php include 'pages/p3.php' ?>
    <?php include 'pages/p4.php' ?>
    <?php include 'pages/p5.php' ?>

    <!-- GFI -->
    <?php include 'pages/gfi/gfi.php' ?>
    <?php include 'pages/gfi/mechanics_gfi.php' ?>
    <?php include 'pages/gfi/legend_gfi.php' ?>
    <?php include 'pages/gfi/gfi_gameplay.php' ?>
    <?php include 'pages/game_score.php' ?>

    <!-- Wounds -->
    <?php include 'pages/gfh/gfh.php' ?>
    <?php include 'pages/gfh/mechanics_gfh.php' ?>
    <?php include 'pages/gfh/legend_gfh.php' ?>
    <?php include 'pages/gfh/gfh_gameplay.php' ?>

    <?php include 'pages/thank_you.php' ?>

     <!-- Sound -->
    <div class="sounds_margin">
        <img src="includes/img/off.png" class="sounds" id="sounds" alt="off">
    </div>

    <div class="healthcare">
        <h6>FOR HEALTHCARE PROFESSIONALS ONLY</h6>
    </div>




    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <script src="includes/js/guardians.js"></script>
    <script src="includes/js/gfh.js"></script>
</body>

</html>