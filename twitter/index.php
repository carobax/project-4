<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Twitter API</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
</head>

<body>

<style>
  a:link{
    color: #CF5B5A;
  }
  a:visited{
    color: gray;
  }
  p, .font{
    font-family: 'Open Sans', sans-serif;
  }

</style>

<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(

);

// /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
// $url = 'https://api.twitter.com/1.1/blocks/create.json';
// $requestMethod = 'GET';
//
// /** POST fields required by the URL above. See relevant docs as above **/
// $postfields = array(
//     'screen_name' => 'usernameToBlock',
//     'skip_status' => '1'
// );

/** Perform a POST request and echo the response **/
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->buildOauth($url, $requestMethod)
//              ->setPostfields($postfields)
//              ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/


$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=RoyalEngagement';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$tweetData = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(), $assoc=TRUE);

foreach($tweetData['statuses'] as $index => $items){
  $userArray = $items['user'];
  echo '<p class " tweet"><a href="https://twitter.com/' . $userArray['screen_name'] . '"><img src="' . $userArray['profile_image_url'] . '"></a> @' . $userArray['screen_name'] . '</p>';
  echo '<p class="tweet"><a class= "tweet" href="https://twitter.com/' . $userArray['screen_name'] . '"><img class="tweet" src="' . $userArray['profile_image_url'] . '"></a>';
  echo $items['text']. "<br /></p>";

  // echo $userArray['profile_image_url']. "<br />";
}
?>

</div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

<!-- <script type="text/javascript" href="scripts.js"></script> -->
<script src="tweetLinkIt.js"></script>
<script>
       $('.tweet').tweetLinkify();
</script>

</body>
</html>
