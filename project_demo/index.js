
let {Builder, By} = require('selenium-webdriver');
driver = new Builder().forBrowser('chrome').build();

    (async function test(){

        //Navigate to url
        await driver.get('https://www.klinikbewertungen.de');

        let elem = driver.findElement(By.css('input')).getText().then(function(el) {
            console.log("Success " + elem);
        });
/*
        driver.findElements(By.css('.ratinglist')).then(function(elements) {
            elements.map(function(el) {
                el.getText().then(function(txt) {
                    console.log("=======> " + txt);
                });
            });
        });
*/
        let elements = await driver.findElements(By.css('.ratinglist'));
        for(let e of elements) {
            console.log(">>>>>>>>>>>>>>" + await e.getText());
        }   
        
        

})();
  
/*
https://library-app.firebaseapp.com

let b = await e.getText();
document.getElementsByClassName("bewertung").innerHTML = b;

// Get search box element from webElement 'q' using Find Element
        let aa = driver.findElements(By.css('.ratinglist')).then(function() {
            for(let e of aa) {
            console.log(">>>>>>>>>>>>>>" + e.getText());
            }
        });
*/

