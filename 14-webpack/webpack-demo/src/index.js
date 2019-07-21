 //import _ from 'lodash';
 import "./style.css";
 import "./app.css";
 import imgs from "./sj.jpg"
 import da from "./data.json"
 import print from "./print"

 function component() {
     //     var element = document.createElement('div');

     //    // Lodash, currently included via a script, is required for this line to work
     //    // Lodash, now imported by this script
     //     //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     //     var img = new Image();
     //     img.src = imgs;
     //     element.innerHTML = "hellow world";
     //     element.appendChild(img);
     //     console.log(da)
     //     return element;
     const btn = document.createElement('button');
     btn.innerHTML = '点击我1';
     btn.onclick = print;
     console.log("1111")
     var element = document.createElement('div');
     element.appendChild(btn);
     if (module.hot) {
         module.hot.accept('./print.js', function () {
             console.log('Accepting the updated printMe module!');
            //  printMe();
         })
     }
     return element;
 }

 document.body.appendChild(component());