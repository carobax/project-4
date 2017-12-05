var html = ""
var apiurl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=tagformyapiproject&tagmode=any&format=json&jsoncallback=?"

$(document).ready(function() {

    $.getJSON(apiurl,function(json){
        // console.log(json);

        $.each(json.items,function(i,data){
            // html += '<p>From:"'+ data.author_id+'"</p>';
            html += '<div class="flickr"><a href="' + data.link + '" target="_newtab"><img src ="'
            + data.media.m + '" class="flickr-img"></a></div>'
            });
        $("#flikpics").append(html);
    });
});

function myFunction() {
    document.getElementById("demo").innerHTML = '<iframe src="http://carolinebaxendale.com/mj487/apps/twitter/"></iframe>';

}

function initMap() {

  var centerPos1 = {lat: 51.4988992, lng: -0.12827449999997498};
  var centerPos2 = {lat: 51.48417920000001, lng: -0.6060852000000523};

  var map1 = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    styles:
    [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fdb7b0"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
    center: centerPos1,
    mapTypeId: 'terrain',
    scrollwheel: false
  });


  var westminster = "<h4>Westminster Abbey</h4>" + "<p>This is where Prince William and Catherine Middleton married.</p>" + '<img src="images/westminster.jpg" alt="Westminster Abbey" style="width:300px;">';
  var windsor = "<h4>Saint George's Chapel at Windsor Castle</h4>" + "<p>This is where Prince Harry and Meghan Markle will marry.</p>" + '<img src="images/windsor.jpg" alt="Westminster Abbey" style="width:300px;">';

  var infowindow1 = new google.maps.InfoWindow({
    content: westminster
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: windsor
  });

  var marker1 = new google.maps.Marker({
    position: centerPos1,
    map: map1,
    icon: {
      url:'engagement-small.png'
    }
  });

  marker1.addListener('click', function() {
    infowindow1.open(map1, marker1);
  });

  var marker2 = new google.maps.Marker({
    position: centerPos2,
    map: map1,
    icon: {
      url:'engagement-small.png'
    }
  });

  marker2.addListener('click', function() {
    infowindow2.open(map1, marker2);
  });
};
