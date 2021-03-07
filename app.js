const count=document.getElementById('count');
//console.log(count);
let cnt=0;
const btns=document.querySelectorAll('.btn');
//console.log(btn);

// This will run for all the buttons that are selected through query
btns.forEach(function(btn){
   // console.log(btn);

   // This will work when a button is click and will pass on a event e which contains all the event property
    btn.addEventListener("click",function(e){

        // This will target current Target through which the event occured that is the button which has been clicked and class list will show all the class that has been present in class
        let demo=e.currentTarget.classList;
        // console.log(demo);
        // console.log(demo.classList.contains("increase"));
        
        if(demo.contains("increase")){
            // console.log("increase");
            cnt++;
           // console.log(cnt);
        }
        else if(demo.contains("decrease")){
            //console.log("decrease");
            cnt--;
           // console.log(cnt);
        }
        else if(demo.contains("reset")){
            //console.log("reset");
            cnt=0;
          //  console.log(cnt);
        }


        if(cnt>=1){
            count.style.color="green";
        }
        else if(cnt<=-1){
            count.style.color="red";
        }
        else
            count.style.color="black";


        count.textContent=cnt;

    });

});