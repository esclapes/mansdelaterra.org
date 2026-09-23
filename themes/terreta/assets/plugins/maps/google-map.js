/*!***************************************************
 * Google Map
 *****************************************************/

window.marker = null;

function initialize() {
  var map,
    mapId = document.getElementById("map");
  if (mapId == null) {
    return;
  }
  var latitude = mapId.getAttribute("data-latitude");
  var longitude = mapId.getAttribute("data-longitude");
  var mapMarker = mapId.getAttribute("data-marker");
  var mapMarkerName = mapId.getAttribute("data-marker-name");
  var orba = new google.maps.LatLng(latitude, longitude);
  // var style = [
  //   {
  //     featureType: "administrative",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         saturation: "-100",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "administrative.province",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         visibility: "off",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "landscape",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         saturation: -100,
  //       },
  //       {
  //         lightness: 65,
  //       },
  //       {
  //         visibility: "on",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "poi",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         saturation: -100,
  //       },
  //       {
  //         lightness: "50",
  //       },
  //       {
  //         visibility: "simplified",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         saturation: "-100",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.highway",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         visibility: "simplified",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.arterial",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         lightness: "30",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.local",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         lightness: "40",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "transit",
  //     elementType: "all",
  //     stylers: [
  //       {
  //         saturation: -100,
  //       },
  //       {
  //         visibility: "simplified",
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "water",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         hue: "#ffff00",
  //       },
  //       {
  //         lightness: -25,
  //       },
  //       {
  //         saturation: -97,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "water",
  //     elementType: "labels",
  //     stylers: [
  //       {
  //         lightness: -25,
  //       },
  //       {
  //         saturation: -100,
  //       },
  //     ],
  //   },
  // ];
  var mapOptions = {
    center: orba,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 15,
    panControl: !1,
    zoomControl: !0,
    mapTypeControl: !1,
    scaleControl: !1,
    streetViewControl: !1,
    overviewMapControl: !1,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
    },
    clickableIcons: false,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // var mapType = new google.maps.StyledMapType(style, {
  //   name: "Grayscale",
  // });
  // map.mapTypes.set("grey", mapType);
  // map.setMapTypeId("grey");
  var markerOptions = {
    position: orba,
    map: map,
    title: mapMarkerName,
  };
  // Only pass an icon when one is actually configured. An empty icon has no
  // url and no path, which throws InvalidValueError from setIcon.
  if (mapMarker) {
    markerOptions.icon = {
      url: mapMarker,
      scaledSize: new google.maps.Size(30, 50),
    };
  }
  marker = new google.maps.Marker(markerOptions);
  google.maps.event.addListener(marker, "click", function () {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(googleMapsUrl, "_blank");
  });
}
// Invoked by the Maps JS loader via &callback=initialize. Assigned
// explicitly so the name survives minification.
window.initialize = initialize;
