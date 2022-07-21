window.onload=getExif;

function getExif() {
    var img2 = document.getElementById("img2");
    //기존에 이미지를 불러오는 방법
    EXIF.getData(img2, function() {
       if(EXIF.pretty(this)){
           const maker = (EXIF.getTag(this, "Make"));
           const GpsLat = (EXIF.getTag(this, "GPSLatitude"));
           const GpsLong =(EXIF.getTag(this, "GPSLongitude"));
           const StringLat = JSON.stringify(GpsLat);
           console.log(StringLat)
           const StringLong = JSON.stringify(GpsLong);
           let GpsLoaction = StringLat+" "+StringLong;
           GpsLoaction = GpsLoaction.replace(/\,/g,' ');
           GpsLoaction = GpsLoaction.replace(/\[/g,'');
           GpsLoaction = GpsLoaction.replace(/\]/g,'');
        console.log(GpsLoaction);//37 32 48.2 127 3 55.9

        document.getElementById("abc").href = `https://maps.google.com/place/${GpsLoaction}`;
    
      console.log(`https://maps.google.com/place/${GpsLoaction}`);
       }
        

    });
}
