function userDownload(number){

    const api = `https://randomuser.me/api/?nat=us&results=${number}`;

    fetch(api)
        .then(Response=>Response.json())
        .then(data=>printHTML(data.results));

}

function printHTML(data){
    //console.log(data);
    data.forEach(user => {
        const {name:{first}, name:{name}, picture:{medium}, nat }=user;

        const li = document.createElement('li');
        li.innerHTML=`
        Name: ${first}
        Country: ${nat}
        Image: <img src="${medium}" >
        `;

        $('#users').append(li);
        //console.log(user.name.first);
    });
}

userDownload(15);

