// app.js use map and restaurant apis from mapbox (open street map, leaflet), and zomato.

var markers = [];
var alreadyShowedRestaurentIds = [];
var offset = 0;
var resultSize = 4;
$(document).ready(function () {
    
    let map = L.map('map').setView([37.773972, -122.431297], 12);

    let l1 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYWR1bmNhbjEyIiwiYSI6ImNqbTluM3RuNTAwMW8zcXRhbmU5c3VleHMifQ.tWsz1HZQbMbqHiOXsOoZEQ'
    }).addTo(map);

    let popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);

    $('#getRestList').on('click', function () {
        markers.forEach(function (ele) {
            console.log(ele);
            map.removeLayer(ele);
        });
        $('#restList').empty();
        // get data from django backend database to frontend use ajax.
        // request through the route name preferences, 
        // which is in views.py user_preferences() function,
        // response is a dictionary with a key name "preferences",
        // the value is an array of integer represent type of cuisines
        var track_array = [];

        $.ajax({
            method: "GET",
            url: "preferences",
            success: function (response) {
                var cuisines = response["preferences"].join('%2C');
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        initMarker(parseFloat(pos.lat), parseFloat(pos.lng), map);
                        // var my_url = `https://developers.zomato.com/api/v2.1/search?lat=${pos.lat}&lon=${pos.lng}&cuisines=${cuisines}&sort=real_distance`
                        var my_url = `https://developers.zomato.com/api/v2.1/search?start=${offset}&count=${resultSize}&lat=${pos.lat}&lon=${pos.lng}&cuisines=132%2C159&sort=real_distance`
                        console.log(my_url)
                        $.ajax({
                            url: my_url,
                            headers: {
                                "user-key": "f6e6a18b7e1f07fd9821453b651767fb"
                            },
                            method: 'GET',
                            dataType: 'json',
                            success: function (data) {
                                console.log(data)
                                console.log(data.restaurants)
                                var totalresults = data.restaurants;
                                if (totalresults.length > 0) {
                                    // var newArr = nRandEleArr(totalresults, 4);
                                    // if (alreadyShowedRestaurentIds.length % 20 == 0){
                                    //     offset += 20;
                                    // }
                                    // console.log(offset);
                                    // console.log(alreadyShowedRestaurentIds);
                                    // console.log(newArr);
                                    // newArr.forEach(ele => {
                                    totalresults.forEach(ele => {
                                        track_array.push(ele);
                                        $('#restList').append(`
                                        <div>
                                        <p>Name: ${ele.restaurant.name}</p>
                                        <img src="${ele.restaurant.featured_image}" width="200em">
                                        <p>Cuisines: ${ele.restaurant.cuisines}</p>
                                        <p>Address: ${ele.restaurant.location.address}</p>
                                        <input type="submit" value="Save restaurant">
                                        </div>
                                        `);
                                        addMarker(parseFloat(ele.restaurant.location.latitude), parseFloat(ele.restaurant.location.longitude), ele.restaurant.name, map);
                                    });
                                    offset += 4;
                                }else{
                                    $('#restList').append(`
                                        <div>
                                        <p>No result</p>
                                        </div>
                                        `);
                                }
                            },
                            error: function (error) {
                                console.log(error);
                            }
                        });
                        return pos;
                    });
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
        $('#restList').on('click','input',function(e){
            e.preventDefault();
            var idxClicked = $(this).index('input');
            console.log(track_array[idxClicked]);
            saveURL = 'save_restaurant'
            $.ajax({
                url: saveURL,
                method: 'POST',
                data:{
                    'array':track_array[idxClicked],
                },
                dataType: 'json',
                success:function(json){
                    console.log(json)
                },
                error:function(error){
                    console.log(error)
                }
            })
        })
    });
});

// function nRandEleArr(arr, size) {
//     var tempArr = [];
//     if (arr.length <= size){
//         console.log('arr: ',arr);
//         return arr;
//     }else{
//         while (tempArr.length < size) {
//             console.log('tempArr.length',tempArr.length);
//             console.log("Hi1", alreadyShowedRestaurentIds.length)
//             var ele = arr[Math.floor(Math.random() * arr.length)];
//             console.log("Hi2")
//             if (!alreadyShowedRestaurentIds.includes(ele.restaurant.id)) {
//                 tempArr.push(ele);
//                 console.log("Hi3")
//                 alreadyShowedRestaurentIds.push(ele.restaurant.id);
//                 console.log("Hi4")
//             }
//         }
//         console.log("Hi5")
//         console.log('tempArr',tempArr);
//         return tempArr;
//     }
// }

// function nRandEleArr(arr, size) {
//     var mySet = new Set();
//     while (mySet.size < size) {
//         var ele = arr[Math.floor(Math.random() * arr.length)];
//         mySet.add(ele);
//     }
//     return [...mySet];
// }

function addMarker(lat, lng, name, map) {
    var tempM = L.marker([lat, lng]).addTo(map).bindPopup(`<b>${name}</b>`);
    markers.push(tempM);
}

function initMarker(lat, lng, map) {
    var tempM = L.marker([lat, lng]).addTo(map).bindPopup(`<b>You Are Here</b>`).openPopup();
    markers.push(tempM);
}