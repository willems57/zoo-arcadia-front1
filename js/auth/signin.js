
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");



const signoutBtn = document.getElementById("signout-btn");
const RoleCookieName = "role";

signoutBtn.addEventListener("click", signout); 

function getRole(){
    return getCookie(RoleCookieName);
}

function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}



const tokenCookieName = "accesstoken";


function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    
    function eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function isConnected(){
        if(getToken() == null || getToken == undefined){
            return false;
        }
        else{
            return true;
        }
    }






    btnSignin.addEventListener("click", checkCredentials);


    function checkCredentials(){
        if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
            alert("vous etes connecter");
    
            const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
    
            setToken(token);
    
            setCookie("role", "admin", 7);
            setCookie(tokenCookieName, "admin", 7);
    
            window.location.replace("/");
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    }






/*

const signinForm = document.getElementById("signinForm");
*/

/*
const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");

signoutBtn.addEventListener("click", signout);
*/



/*
function getRole(){
  return getCookie(RoleCookieName);
}

//fonction de deconnection
function signout(){
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName)
  window.location.reload();
}

function setToken(token){
  setCookie(tokenCookieName, token, 7);
}

function getToken(){
  return getCookie(tokenCookieName);
}

//fonction pour placer un cookie
function setCookie(name,value,days) {
      let expires = "";
      if (days) {
          let date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  //fonction pour recuperer un cookie
  function getCookie(name) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(';');
      for(const element of ca) {
          let c = element;
          while (c.startsWith(' ')) c = c.substring(1,c.length);
          if (c.startsWith(nameEQ)) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
  //fonction pour effacer un cookie
  function eraseCookie(name) {   
      document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }


  //fonction de verification de connexion
  function isConnected(){
          if(getToken() == null || getToken == undefined){
              return false;
          }
          else{
              return true;
          }
      }

        function showAndHideElementsForRoles(){
          const userConnected = isConnected();
          const role = getRole();

          let allElementsToEdit = document.querySelectorAll('[data-show]');

          allElementsToEdit.forEach(element =>{
                      switch(element.dataset.show){
                          case 'disconnected': 
                              if(userConnected){
                                  element.classList.add("d-none");
                              }
                              break;

                          case 'connected': 
                              if(!userConnected){
                                  element.classList.add("d-none");
                              }
                              break;

                          case 'admin': 
                              if(!userConnected || role != "admin"){
                                  element.classList.add("d-none");
                              }
                              break;

                          case 'client': 
                              if(!userConnected || role != "client"){
                                  element.classList.add("d-none");
                              }
                              break;
                      }
                  })
              }

              function sanitizeHtml(text) {
                  const tempHtml = document.createElement('div');
                  tempHtml.textContent = text;
                  return tempHtml.innerHTML;
              }
*/






/*
//fonction de verification de connection
function checkCredentials(){
    const dataForm = new FormData(signinForm);
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": dataForm.get("Email"),
      "password": dataForm.get("Password")
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://127.0.0.1:8000/api/login", requestOptions)

    .then(response => {
        if(response.ok){
            return response.json();

        }
        else{
            mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
        }
      })

      .then(result => {
        //pou récupérer token
        const token = result.apiToken;
        setToken(token);

        //placer ce token en cookie
        setCookie(RoleCookieName, result.roles[0], 7);
        window.location.replace("/");
   })
   .catch((error) => console.error(error));
} */