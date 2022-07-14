window.onload=getExif;

function getExif() {
    var img2 = document.getElementById("img2");
    EXIF.getData(img2, function() {
        var allMetaData = EXIF.getAllTags(this);
        var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
        console.log(allMetaDataSpan); //span에 텍스트상태
        console.log(allMetaData)//object상태
        console.log(Object.entries(allMetaData)); //array형태
        const ExifArray = Object.entries(allMetaData) //array형태
        const GpsLat = ExifArray[41]; //array에서 41번째 == GpsLatitude
        const GpsLong = ExifArray[43]; //array에서 43번째 == GpsLongitude
        console.log(GpsLat); //["GPSLatitude", Array] 의 형태로나옴 아직 array형태 
        const StringLat = JSON.stringify(GpsLat); //stringfy로 string형태로 바꿈 
        const StringLong = JSON.stringify(GpsLong);
        console.log(StringLat);//["GPSLatitude",[37,32,48.2]] string형태
        console.log(JSON.parse(StringLat)[1]);//위 string을 parsing해서 1번째 원소 꺼냄 == [37, 32, 48.2] [123, 3, 55.7]
        const realLat = JSON.parse(StringLat)[1];
        const realLong = JSON.parse(StringLong)[1];
        console.log(realLat);//[37, 32, 48.2]
        console.log(realLong);//[127, 3, 55.9]
        let GpsLoaction = realLat+" "+realLong;
        console.log(GpsLoaction);//37,32,48.2 127,3,55.9
        GpsLoaction = GpsLoaction.replace(/\,/g,' ');
        console.log(GpsLoaction);//37 32 48.2 127 3 55.9

        //37 32 48.2 127 3 55.7 이런 형태가 나오면 사용가능.
        
        

    });
}