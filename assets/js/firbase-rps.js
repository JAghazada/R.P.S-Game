var firebaseConfig = {
    apiKey: "AIzaSyCXx1GoIA-jNwql9mMYbP-twVffKg-p_fU",
    authDomain: "jamilaghazada-b5dba.firebaseapp.com",
    databaseURL: "https://jamilaghazada-b5dba-default-rtdb.firebaseio.com",
    projectId: "jamilaghazada-b5dba",
    storageBucket: "jamilaghazada-b5dba.appspot.com",
    messagingSenderId: "725775842770",
    appId: "1:725775842770:web:3133c98a5d3a6f26309c0b"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database()
var checkplayers = 0
var playerOne = false
var playerTwo = false;
var playerOneWins = 0 
var playerTwoWins = 0 
var cavab  = "";
var userName =""
for (let a of $('.p1-choice')){
    a.style.visibility = "hidden"
}
for (let e of $('.p2-choice')){
    e.style.visibility = "hidden"
}
function playerExist(){
    db.ref('user1').on('value',function(resp){
        if(resp.val() != null){
            document.querySelector('.p1name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName) 
            document.querySelector('.p1-score').textContent = (Object.values(resp.val())[(Object.values(resp.val())).length-1].userName +":" +playerOneWins)

        }
    })
    db.ref('user2').on('value',function(resp){
        if(resp.val() != null){
            document.querySelector('.p2name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName) 
            document.querySelector('.p2-score').textContent = (Object.values(resp.val())[(Object.values(resp.val())).length-1].userName +":" +playerTwoWins)
            document.querySelector('.name-btn').disabled = true
            
        }

    })
}
function startGame(){
    if($('.enname').val().trim()!=""){
        if(document.querySelector('.p1name').textContent == "Player 1"){
            userName = $('.enname').val().trim()
            document.querySelector('.name-btn').disabled =true
            for(let d of $('.p2-choice')){
                d.style.display ="none"
                }
                for (let a of $('.p1-choice')){
                    a.style.visibility = "visible"
                }
            db.ref('user1').push(
                {
                    userName
                 })
            db.ref('user1').on('value',function(resp){
                document.querySelector('.p1name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName) 
                document.querySelector('.p1-score').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName+":" +playerOneWins) 

            })

        }
        else{
            document.querySelector('.name-btn').disabled =true
            
            for(let c of $('.p1-choice')){
                c.style.display ="none"
            }
            for (let ax of $('.p2-choice')){
                ax.style.visibility = "visible"
            }
            userName = $('.enname').val().trim()
           
            db.ref('user2').push(
                {
                  userName
                }
          )
          db.ref('user2').on('value',function(resp){
            document.querySelector('.p2name').textContent =(Object.values(resp.val())[(Object.values(resp.val())).length-1].userName)
            document.querySelector('.p2-score').textContent = (Object.values(resp.val())[(Object.values(resp.val())).length-1].userName+":" +playerTwoWins)
        })
        }
       
    }
    else{
        alert('Please enter your Nickname')
        return
    }
   
    
}
function versus(){
    var response_1  =''
var response_2 ='' 
db.ref('p1').on('value',function(response){
    response_1 = (response.val())
})
db.ref('p2').on('value',function(response){
    response_2 = (response.val())
    console.log(response_1+" "  + " "+response_2)
    if(response_1 !='' && response_2 !='' )
{
    console.log(Object.values(response_2)[0].choose)
    $('.p1-choosed').html(`<h4 class="p1-score">${Object.values(response_1)[0].choose}</h4>`)
    $('.p2-choosed').html(`<h4 class="p1-score">${Object.values(response_2)[0].choose}</h4>`)

    fight(Object.values(response_1)[0].choose,Object.values(response_2)[0].choose)
}
})
}
function playerOneStarted(x){
    var getClassName = ((x.target.classList)[1])
        db.ref('p1').push({
            choose:document.querySelector('.' + getClassName).textContent
        })
    console.log(getClassName)
    console.log(document.querySelector('.' + getClassName).textContent)
        versus()
    // $('.p1-choiced').html(`<h4 class="choosed">${document.querySelector('.' + getClassName).textContent}</h4>`)
    }

function playerTwoStarted(x){
        var getClassName = ((x.target.classList)[1])
        db.ref('p2').push({
            choose:document.querySelector('.' + getClassName).textContent
        })
    
    console.log(getClassName)
    console.log(document.querySelector('.' + getClassName).textContent)
        versus()
}
function showScore(){
    db.ref('score').push({
        playerTwoWins,
        playerOneWins
    })
    db.ref('score').on('value',function(resp){
        document.querySelector('.p1-score').innerHTML=("Player-1:"+(Object.values(resp.val())[0].playerOneWins))
        document.querySelector('.p2-score').innerHTML=("Player-2:"+(Object.values(resp.val())[0].playerTwoWins))
    })
}
function deleteFirebase(){
    // db.ref("p1").on('delete',function(){
    //     alert("Firebase clear!")
    // })
    db.remove()
}
function fight(a,b){
        console.log( a +" " + b)
        if(a == "Rock" && b=='Paper' ){
           alert("PLayer2 win")
           playerTwoWins +=1
            showScore()
            deleteFirebase()
            return
            
        }
        else  if(a == "Rock" && b=='Scissors' ){
           alert("PLayer1 win")
           playerOneWins +=1
        showScore()
        return
        }
        else  if(a == "Paper" && b=='Rock' ){
           alert("PLayer1 win")
           playerOneWins +=1
        showScore()
        return
        }
        else  if(a == "Paper" && b=='Scissors' ){
           alert("PLayer2 win")
           playerTwoWins +=1
        showScore()
        return
        }
        else  if(a == "Scissors" && b=='Rock' ){
           alert("PLayer2 win")
           playerTwoWins +=1
        showScore()
        return
        }
        else  if(a == "Scissors" && b=='Paper' ){
           alert("PLayer1 win")
           playerOneWins +=1
        showScore()
        return
        }
    
        else{
           alert('Draw')
         showScore()
         return
        }
}    
$('.p1-choice').on('click',playerOneStarted)
$('.p2-choice').on('click',playerTwoStarted)


$('.name-btn').on('click',startGame)
playerExist()