### EMAIL CONTACT FORM
#### ==================================
<h5>Contact form using HTML5, CSS (Bootstrap), JavaScript and PHP</h5>

1.  Watch the videos on YouTube
    * :tv: URL: https://www.youtube.com/watch?v=YhL9YAkb7pc
    * :bell: MyChannel : https://www.youtube.com/channel/UCKT8d2zKgg2D-wRxzReNAGA (Subscribe)

<br/><br/>

HTML is quite easy, Javascript and PHP is scripting language.
You can follow us on Youtube.
You can also follow me at Twitter
* https://twitter.com/_rajendrayadav (I used to talk on Politics)

* This section of code is using to match the regular expression.
```javascript
let regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
```

* :pencil: :flower_playing_cards: In this segment of code, I am using FormData() API, It is new feature. If you are using old version of browser. It may not work in your case.
 ```javascript
function getData() {
    let data = new FormData();
    // getting the data from form
    let name = document.getElementById("txtname").value
    let email = document.getElementById("emailField").value
    let subject = document.getElementById("txtsubject").value
    let comment = document.getElementById("txtareacomment").value
    // appending the fields with data object
    data.append("name", name);
    data.append("email", email);
    data.append("subject", subject);
    data.append("comment", comment);
    return data;
}

```
:dart:
Please Wath the Video, Ask the question if you have any..