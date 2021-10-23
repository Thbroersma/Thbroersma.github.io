<html lang="en-US">
<head>
    <title>Intro</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styling.css">
    <!--

	Emmet een snelle manier van codes zoals ul>li.item$*5 waarbij je een ul met 5 li die item1 oplopend tot 5 heten.

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
-->
</head>
<body class="myBody ">


    <nav class="navbar-style">
        <div class="row">
            <div class="col-sm-12">
                <ul class="nav">
                    <button class="switchButton">
                        Switch up
                    </button>
                    <span><a href="index.html">😄</a></span>
                    <div class="navigation">
                        <a href="index.html" class="nav-right">Home</a>
                        <a href="mot.html" class="nav-right">Motivation</a>
                        <a href="over.html" class="nav-right">About myself</a>
                        <a href="Pacman/index.html" class="nav-right">Games</a>
                    </div>
            </div>
            </ul>
    </nav>
    </div>
    </div>
    </nav>
    <header>
        <div class="row">
            <div class="col-sm">
                <h1 class="head">Hello, what nice of you to have a look at my website!</h1>
            </div>
        </div>
    </header>
    <aside>
    </aside>
    <main>
    <?php
    try {try {
        $db = new PDO("mysql:host=localhost;dbname=project-films", "root", "");
        if (isset($_POST['inloggen'])) {
            $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
            $password = $_POST['password'];
            $query = $db->prepare("SELECT * FROM gebruikers WHERE username = :user");
            $query->bindParam("user", $username);
            $query->execute();
        if ($query->rowCount() == 1) {
            $result = $query->fetch(PDO::FETCH_ASSOC);
            if (password_verify($password, $result["password"])) {
                echo "Juiste gegevens!";
            } else {
                echo "Onjuiste gegevens!";
            }
        } else {
            echo "Onjuiste gegevens!";
        }
        echo "<br>";
        }
    }
    catch (PDOException $e) {
        die ("Error!: " . $e->getMessage());
    }
    ?>
    <form method="post" action="set.php">
        <label>Username</label>
        <input type="text" name="username"><br>

        <label>Password</label>
        <input type="password" name="password"><br>

        <input type="submit" name="inloggen" value="Inloggen">
    </form>
    
    </main>
    <footer></footer>
    <!-- 
<a href="https://getbootstrap.com/docs/3.4/css/" class="btn btn-primary btn-lg active" role="button">Contact me</a>
-->
    <script src="js/action.js"> </script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</body>
</html>