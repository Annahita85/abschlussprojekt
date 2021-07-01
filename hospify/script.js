
    
//-----------------------------------------------
    
    // json Datei
    function Klinik_Am_Zuckerberg() {
        table_name = "Klinik_Am_Zuckerberg"
        file = "Klinik_Am_Zuckerberg_2.json"
        const dbParam = JSON.stringify({table:table_name,limit:20});
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        let text = "<table border='1'>"
        for (let x in myObj) {
            if (myObj[x].Gesamtzufriedenheit === "star-6") {
               myObj[x].Gesamtzufriedenheit = "<strong>******</strong> <br> <6>Stern";
               extra = "<span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-4") {
               myObj[x].Gesamtzufriedenheit = "**** <br> <4>Stern";
               extra = "<span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-3") {
               myObj[x].Gesamtzufriedenheit = "<strong>***</strong> <br> <3>Stern";
               extra = "<span>grade</span><br><span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-2") {
               myObj[x].Gesamtzufriedenheit = "** <br> <2>Stern";
               extra = "<span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-1") {
               myObj[x].Gesamtzufriedenheit = "* <br> <1>Stern";
               extra = "<span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-0") {
               myObj[x].Gesamtzufriedenheit = " <br> <0>Stern";
               extra = "";
            }
            text += "<tr><td>Review</td></tr>" + "<tr><td>" + myObj[x].Erfahrungsbericht + "</td><td>" + myObj[x].Gesamtzufriedenheit + "</td><td>" + extra + "</td></tr>";
         }
        text += "</table>"    
        document.getElementById("demo").innerHTML = text;

        //Stern-two-tone
        let elements = document.getElementsByTagName('span');
         for (var i = 0; i < elements.length; i++) { 
            elements[i].className = "material-icons-two-tone";
         }
        }
        xmlhttp.open("GET", file);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
        //images
         let elem = document.createElement("img");
         elem.setAttribute("src", "imgs/Klinik_Am_Zuckerberg.jpg");
         elem.setAttribute("height", "468");
         elem.setAttribute("width", "524");
         elem.setAttribute("alt", "Klinik_Am_Zuckerberg");
         document.getElementById("my_img").innerHTML = "";
         document.getElementById("my_img").append(elem);

         let elem1 = document.createElement("img");
         elem1.setAttribute("src", "imgs/Klinik_Am_Zuckerberg_1.jpg");
         elem1.setAttribute("height", "168");
         elem1.setAttribute("width", "324");
         elem1.setAttribute("alt", "Klinik_Am_Zuckerberg_1");
         document.getElementById("my_img_1").innerHTML = "";
         document.getElementById("my_img_1").append(elem1);

         
         let x = document.getElementById("g_div");
         if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("k_img").src="";
            document.getElementById("h_txt").innerText="";
            document.getElementById("p_txt").innerText="";
            document.getElementById("a_link").setAttribute('href', '#');

            document.getElementById("k_img").src="imgs/Klinik_Am_Zuckerberg_GmbH_2.jpg";
            document.getElementById("h_txt").innerText="Erfolg und Perfektion durch konsequente Spezialisierung";
            document.getElementById("p_txt").innerText="Die Klinik am Zuckerberg Braunschweig ist aus der täglichen Erfahrung spezialisierter Fachärzte hervorgegangen. Das beweisen die hervorragenden Bewertungen auf Klinikbewertungen.  Der hohe medizinische Standard wird durch ständige Weiterbildung und Qualitätskontrolle gesichert. Wir setzen diese Erfahrungen kompromisslos in den Dienst unserer Patienten.";
            document.getElementById("a_link").setAttribute('href', 'https://www.klinik-am-zuckerberg.de/');
         
         }else {
            document.getElementById("k_img").src="";
            document.getElementById("h_txt").innerText="";
            document.getElementById("p_txt").innerText="";
            document.getElementById("a_link").setAttribute('href', '#');

            document.getElementById("k_img").src="imgs/Klinik_Am_Zuckerberg_GmbH_2.jpg";
            document.getElementById("h_txt").innerText="Erfolg und Perfektion durch konsequente Spezialisierung";
            document.getElementById("p_txt").innerText="Die Klinik am Zuckerberg Braunschweig ist aus der täglichen Erfahrung spezialisierter Fachärzte hervorgegangen. Das beweisen die hervorragenden Bewertungen auf Klinikbewertungen.  Der hohe medizinische Standard wird durch ständige Weiterbildung und Qualitätskontrolle gesichert. Wir setzen diese Erfahrungen kompromisslos in den Dienst unserer Patienten.";
            document.getElementById("a_link").setAttribute('href', 'https://www.klinik-am-zuckerberg.de/');
         }
            
         document.getElementById("map").innerHTML = "";
         let link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9772.319900509852!2d10.529485!3d52.241931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x788aaea76b3c9c0a!2sKlinik%20Am%20Zuckerberg%20GmbH!5e0!3m2!1sde!2sde!4v1625151809189!5m2!1sde!2sde"
         let iframe = document.createElement('iframe');
         iframe.border=0;
         iframe.width="100%";
         iframe.height="300px";
         iframe.lazy=true;
         iframe.setAttribute("src", link);
         document.getElementById("map").appendChild(iframe);
         
    }
    
    function Herzogin_Elisabeth_Hospital() {
        table_name = "Herzogin_Elisabeth_Hospital"
        file = "Herzogin_Elisabeth_Hospital.json"
        const dbParam = JSON.stringify({table:table_name,limit:20});
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        let text = "<table border='1'>"
        for (let x in myObj) {
            if (myObj[x].Gesamtzufriedenheit === "star-6") {
               myObj[x].Gesamtzufriedenheit = "<strong>******</strong> <br> <6>Stern";
               extra = "<span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-4") {
               myObj[x].Gesamtzufriedenheit = "**** <br> <4>Stern";
               extra = "<span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-3") {
               myObj[x].Gesamtzufriedenheit = "<strong>***</strong> <br> <3>Stern";
               extra = "<span>grade</span><br><span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-2") {
               myObj[x].Gesamtzufriedenheit = "** <br> <2>Stern";
               extra = "<span>grade</span><br><span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-1") {
               myObj[x].Gesamtzufriedenheit = "* <br> <1>Stern";
               extra = "<span>grade</span>";
            }else if (myObj[x].Gesamtzufriedenheit === "star-0") {
               myObj[x].Gesamtzufriedenheit = " <br> <0>Stern";
               extra = "";
            }
            text += "<tr><td>Review</td></tr>" + "<tr><td>" + myObj[x].Erfahrungsbericht + "</td><td>" + myObj[x].Gesamtzufriedenheit + "</td><td>" + extra + "</td></tr>";
         }
        text += "</table>"    
        document.getElementById("demo").innerHTML = text;

        //Stern-two-tone
        let elements = document.getElementsByTagName('span');
         for (var i = 0; i < elements.length; i++) { 
            elements[i].className = "material-icons-two-tone";
         }
        }
        xmlhttp.open("GET", file);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
        //images
        let elem = document.createElement("img");
         elem.setAttribute("src", "imgs/Herzogin_Elisabeth_Hospital.jpg");
         elem.setAttribute("height", "468");
         elem.setAttribute("width", "524");
         elem.setAttribute("alt", "Herzogin_Elisabeth_Hospital");
         document.getElementById("my_img").innerHTML = "";
         document.getElementById("my_img").append(elem);
         
         let elem1 = document.createElement("img");
         elem1.setAttribute("src", "imgs/Herzogin_Elisabeth_Hospital_1.jpg");
         elem1.setAttribute("height", "168");
         elem1.setAttribute("width", "324");
         elem1.setAttribute("alt", "Herzogin_Elisabeth_Hospital_1");
         document.getElementById("my_img_1").innerHTML = "";
         document.getElementById("my_img_1").append(elem1);
        

         
         //document.getElementById("g_div").display= "none";

         let x = document.getElementById("g_div");
         if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("k_img").src="";
            document.getElementById("h_txt").innerText="";
            document.getElementById("p_txt").innerText="";
            document.getElementById("a_link").setAttribute('href', '#');

            document.getElementById("k_img").src="imgs/Herzogin_Elisabeth_Hospital_2.jpg";
            document.getElementById("h_txt").innerText="Ihr Standort Gesundheit";
            document.getElementById("p_txt").innerText="Wir freuen uns, dass Sie den Weg zu uns gefunden haben.  1909 auf Initiative der Herzogin Elisabeth und des Stadtrates Dr. h. c. Max Jüdel  gegründet, betreibt die Stiftung Herzogin Elisabeth Hospital heute ein Krankenhaus mit modernster medizinischer, therapeutischer und pflegerischer Ausrichtung. Durch den hohen Qualitätsanspruch und die Patientenorientierung ist die Stiftung Herzogin Elisabeth Hospital - kurz HEH - ein fester Bestandteil der Versorgungslandschaft in Braunschweig und Südostniedersachsen. Mit unseren engagierten und spezialisierten Mitarbeitenden betreiben wir am Standort Gesundheit hochmoderne Medizin und professionelle Pflege ganz nah am Menschen. Sie werden sehen, dass Sie mit unserem besonderen Hospital die richtige Wahl getroffen haben Mit den besten Wünschen für Ihre Gesundheit - Ihr HEH-Team";
            document.getElementById("a_link").setAttribute('href', 'https://www.heh-bs.de/');
         
         }else {
            document.getElementById("k_img").src="";
            document.getElementById("h_txt").innerText="";
            document.getElementById("p_txt").innerText="";
            document.getElementById("a_link").setAttribute('href', '#');

            document.getElementById("k_img").src="imgs/Herzogin_Elisabeth_Hospital_2.jpg";
            document.getElementById("h_txt").innerText="Ihr Standort Gesundheit";
            document.getElementById("p_txt").innerText="Wir freuen uns, dass Sie den Weg zu uns gefunden haben.  1909 auf Initiative der Herzogin Elisabeth und des Stadtrates Dr. h. c. Max Jüdel  gegründet, betreibt die Stiftung Herzogin Elisabeth Hospital heute ein Krankenhaus mit modernster medizinischer, therapeutischer und pflegerischer Ausrichtung. Durch den hohen Qualitätsanspruch und die Patientenorientierung ist die Stiftung Herzogin Elisabeth Hospital - kurz HEH - ein fester Bestandteil der Versorgungslandschaft in Braunschweig und Südostniedersachsen. Mit unseren engagierten und spezialisierten Mitarbeitenden betreiben wir am Standort Gesundheit hochmoderne Medizin und professionelle Pflege ganz nah am Menschen. Sie werden sehen, dass Sie mit unserem besonderen Hospital die richtige Wahl getroffen haben Mit den besten Wünschen für Ihre Gesundheit - Ihr HEH-Team";
            document.getElementById("a_link").setAttribute('href', 'https://www.heh-bs.de/');
         }
         
         document.getElementById("map").innerHTML = "";
         let link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9774.287919239825!2d10.5267147!3d52.2329937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66131345a9ba3dfe!2sHerzogin%20Elisabeth%20Hospital!5e0!3m2!1sde!2sde!4v1625150656818!5m2!1sde!2sde"
         let iframe = document.createElement('iframe');
         iframe.border=0;
         iframe.width="100%";
         iframe.height="300px";
         iframe.lazy=true;
         iframe.setAttribute("src", link);
         document.getElementById("map").appendChild(iframe);

    }

    function Klinikum_Wolfsburg() {
        table_name = "Klinikum_Wolfsburg"
        file = "Klinikum_Wolfsburg.json"
        const dbParam = JSON.stringify({table:table_name,limit:20});
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        let text = "<table border='1'>"
        for (let x in myObj) {
            if (myObj[x].Gesamtzufriedenheit === "star-6") {
                myObj[x].Gesamtzufriedenheit = "<strong>******</strong> <br> <6>Stern";
                extra = "<span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span>";
             }else if (myObj[x].Gesamtzufriedenheit === "star-4") {
                myObj[x].Gesamtzufriedenheit = "**** <br> <4>Stern";
                extra = "<span>grade</span><br><span>grade</span><br><span>grade</span><br><span>grade</span>";
             }else if (myObj[x].Gesamtzufriedenheit === "star-3") {
                myObj[x].Gesamtzufriedenheit = "<strong>***</strong> <br> <3>Stern";
                extra = "<span>grade</span><br><span>grade</span><br><span>grade</span>";
             }else if (myObj[x].Gesamtzufriedenheit === "star-2") {
                myObj[x].Gesamtzufriedenheit = "** <br> <2>Stern";
                extra = "<span>grade</span><br><span>grade</span>";
             }else if (myObj[x].Gesamtzufriedenheit === "star-1") {
                myObj[x].Gesamtzufriedenheit = "* <br> <1>Stern";
                extra = "<span>grade</span>";
             }else if (myObj[x].Gesamtzufriedenheit === "star-0") {
                myObj[x].Gesamtzufriedenheit = " <br> <0>Stern";
                extra = "";
             }
            text += "<tr><td>Review</td></tr>" + "<tr><td>" + myObj[x].Erfahrungsbericht + "</td><td>" + myObj[x].Gesamtzufriedenheit + "</td><td>" + extra + "</td></tr>";
        }
        text += "</table>"    
        document.getElementById("demo").innerHTML = text;

        //Stern-two-tone
        let elements = document.getElementsByTagName('span');
         for (var i = 0; i < elements.length; i++) { 
            elements[i].className = "material-icons-two-tone";
         }
        }
        xmlhttp.open("GET", file);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);

        //images
        let elem = document.createElement("img");
         elem.setAttribute("src", "imgs/Klinikum_Wolfsburg.jpg");
         elem.setAttribute("height", "468");
         elem.setAttribute("width", "524");
         elem.setAttribute("alt", "Klinikum_Wolfsburg");
         document.getElementById("my_img").innerHTML = "";
         document.getElementById("my_img").append(elem);
         
         let elem1 = document.createElement("img");
         elem1.setAttribute("src", "imgs/Klinikum_Wolfsburg_1.jpg");
         elem1.setAttribute("height", "168");
         elem1.setAttribute("width", "324");
         elem1.setAttribute("alt", "Klinikum_Wolfsburg_1");
         document.getElementById("my_img_1").innerHTML = "";
         document.getElementById("my_img_1").append(elem1);

         let x = document.getElementById("g_div");
         if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("k_img").src="";
            document.getElementById("h_txt").innerText="";
            document.getElementById("p_txt").innerText="";
            document.getElementById("a_link").setAttribute('href', '#');

            document.getElementById("k_img").src="imgs/Hospital_of_the_city_of_Wolfsburg_2.jpg";
            document.getElementById("h_txt").innerText="Frauenklinik - Unsere Geburtshilfe";
            document.getElementById("p_txt").innerText="im Klinikum Wolfsburg praktizieren wir eine familienfreundliche Geburtshilfe. Eine positive Atmosphäre ist uns dabei besonders wichtig. Jährlich erblicken in unserem Klinikum rund 1.800 Neugeborene das Licht der Welt. Mit einem Perinatalzentrum Level I (Versorgung von Frühgeburten ab 24. SSW) und einer großen Erfahrung bei Risikoschwangerschaften und Risikogeburten sorgen wir außerdem für ein maximales Maß an Sicherheit für Sie und Ihr Kind.";
            document.getElementById("a_link").setAttribute('href', 'https://www.klinikum.wolfsburg.de/start/');
         
         }else {
            document.getElementById("k_img").src="";
            document.getElementById("h_txt").innerText="";
            document.getElementById("p_txt").innerText="";
            document.getElementById("a_link").setAttribute('href', '#');

            document.getElementById("k_img").src="imgs/Hospital_of_the_city_of_Wolfsburg_2.jpg";
            document.getElementById("h_txt").innerText="Frauenklinik - Unsere Geburtshilfe";
            document.getElementById("p_txt").innerText="im Klinikum Wolfsburg praktizieren wir eine familienfreundliche Geburtshilfe. Eine positive Atmosphäre ist uns dabei besonders wichtig. Jährlich erblicken in unserem Klinikum rund 1.800 Neugeborene das Licht der Welt. Mit einem Perinatalzentrum Level I (Versorgung von Frühgeburten ab 24. SSW) und einer großen Erfahrung bei Risikoschwangerschaften und Risikogeburten sorgen wir außerdem für ein maximales Maß an Sicherheit für Sie und Ihr Kind.";
            document.getElementById("a_link").setAttribute('href', 'https://www.klinikum.wolfsburg.de/start/');
         }

         document.getElementById("map").innerHTML = "";
         let link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9734.546194918203!2d10.7688799!3d52.413263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd52464a39741d3c!2sKlinikum%20Wolfsburg!5e0!3m2!1sde!2sde!4v1625151971453!5m2!1sde!2sde"
         let iframe = document.createElement('iframe');
         iframe.border=0;
         iframe.width="100%";
         iframe.height="300px";
         iframe.lazy=true;
         iframe.setAttribute("src", link);
         document.getElementById("map").appendChild(iframe);   
         
    }


// Side navigation
function w3_open() {
   var x = document.getElementById("mySidebar");
   x.style.width = "100%";
   x.style.fontSize = "40px";
   x.style.paddingTop = "10%";
   x.style.display = "block";
 }
 
 function w3_close() {
   document.getElementById("mySidebar").style.display = "none";
 }
    