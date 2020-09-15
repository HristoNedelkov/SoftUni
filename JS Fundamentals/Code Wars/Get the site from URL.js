function getTheName(url) {
    let howItStart = false
    let arr = []
    let site = null
    if (url.includes('//') ? howItStart = true : howItStart = false) {

    }
    
    if (howItStart) {
        
        theSite = url.split('//')[1]
        site = theSite.split(".")
    } else {
         theSite = url.split('.')[1]
        site = theSite.split(".")

    }
    if (site[0] == 'www' || site[0] == 'org') {
        return site[1]
    }

   
    console.log(site[0]);
    
   
    

}
//Its not ready!!

getTheName("http://google.com")
getTheName("http://google.co.jp")
getTheName("www.xakep.ru")


//Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");