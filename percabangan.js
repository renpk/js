/* 
1.  Aquarius: 21 Januari – 19 Februari   
2.  Pisces: 20 Februari – 20 Maret       
3.  Aries: 21 Maret – 20 April          
4.  Taurus: 21 April – 21 Mei           
5.  Gemini: 22 Mei – 21 Juni            
6.  Cancer: 22 Juni – 23 Juli
7.  Leo: 24 Juli – 23 Agustus            
8.  Virgo: 24 Agustus – 23 September
9.  Libra: 24 September – 23 Oktober
10. Scorpio: 24 Oktober – 22 November
11. Sagitarius: 23 November – 21 Desember 
12.  Capricorn: 22 Desember – 20 Januari */

var tanggal = prompt("Tanggal:");
var bulan = prompt("Bulan:");
    // Aquarius
    if(tanggal >=21   && bulan == "januari" || tanggal <=19 && bulan == "februari"){
        document.write("Zodiak yang di temukan yaitu : <b>Aquarius</b>");
    }
    // Pisces
    if(tanggal >=20   && bulan == "februari" || tanggal <=20 && bulan == "maret"){
        document.write("Zodiak yang di temukan yaitu : <b>Pisces</b>");
    } 
    // Aries
    if(tanggal >=21   && bulan == "maret" || tanggal <=20 && bulan == "april"){
        document.write("Zodiak yang di temukan yaitu : <b>Aries</b>");
    }
    // Taurus
    if(tanggal >=21   && bulan == "april" || tanggal <=21 && bulan == "mei"){
        document.write("Zodiak yang di temukan yaitu : <b>Taurus</b>");
    }
    // Gemini
    if(tanggal >=22   && bulan == "mei" || tanggal <=21 && bulan == "juni"){
        document.write("Zodiak yang di temukan yaitu : <b>Gemini</b>");
    }
    // Cancer
    if(tanggal >=22   && bulan == "juni" || tanggal <=23 && bulan == "juli"){
        document.write("Zodiak yang di temukan yaitu : <b>Cancer</b>");
    }
    // Leo
    if(tanggal >=24   && bulan == "juli" || tanggal <=23 && bulan == "agustus"){
        document.write("Zodiak yang di temukan yaitu : <b>Leo</b>");
    }
    // Virgo
    if(tanggal >=24   && bulan == "agustus" || tanggal <=23 && bulan == "september"){
        document.write("Zodiak yang di temukan yaitu : <b>Virgo</b>");
    }
    // Libra
    if(tanggal >=24   && bulan == "september" || tanggal <=23 && bulan == "oktober"){
        document.write("Zodiak yang di temukan yaitu : <b>Libra</b>");
    }
    // Scorpio
    if(tanggal >=24   && bulan == "oktober" || tanggal <=22 && bulan == "november"){
        document.write("Zodiak yang di temukan yaitu : <b>Scorpio</b>");
    }
    // Sagitarius
    if(tanggal >=23   && bulan == "november" || tanggal <=21 && bulan == "desember"){
        document.write("Zodiak yang di temukan yaitu : <b>Sagitarius</b>");
    }
    // Capicorn
    if(tanggal >=22   && bulan == "desember" || tanggal <=20 && bulan == "januari"){
        document.write("Zodiak yang di temukan yaitu : <b>Capicorn</b>");
    }