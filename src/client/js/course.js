const locationMap = document.getElementById("location-map");
let map;
let markers = [];
let isMapDrawn = false;
let userLatitude;
let userLongitude;

console.log(locationMap)

const drawMap = (latitude, longitude) => {
    const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level : 2
    };
    map = new kakao.maps.Map(locationMap, options);
    map.setZoomable(false);
}

const deleteMarkers = () => {
    for (let i = 0 ; i < markers.length; i++){
        markers[i].setMap(null);
    }
    markers = [];
}

const addUserMarker = () => {
    let marker = new kakao.maps.Marker({
        map : map,
        position : new kakao.maps.LatLng(userLatitude, userLongitude),
    });
    //배열 만들어주기 -> 그려진 마커를 지우기 위해서 
    markers.push(marker);
}

const addCourseMarker = () => {
    let markerImage = "/file/map_not_done.png";
    let markerSize = new kakao.maps.Size(24,35);

    const image = new kakao.maps.MarkerImage(markerImage, markerSize);
    const position = new kakao.maps.LatLng(35.87575112237566, 128.6815336121516);
    new kakao.maps.Marker({
        map : map,
        position : position,
        title : "민이집",
        image : image
    })
}

const configurationLocationWatch = () => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            //지도상 위에 있는 마커 지우기
            deleteMarkers();

            //유저 위치 받아오기 
            userLatitude = position.coords.latitude;
            userLongitude = position.coords.longitude;
            if(!isMapDrawn){ //!false; => true
                drawMap(userLatitude,userLongitude);
                isMapDrawn = true;
            }

            //유저 마커 그리기
            addUserMarker();
        })
    }
}


configurationLocationWatch();