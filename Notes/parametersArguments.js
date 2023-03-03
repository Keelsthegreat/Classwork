
favoritePlaces = {

}


const uploadFavorties = (name, ...favoritePlaces) =>{
    
    //1. find a place to put inputs
    let mainBox = document.querySelector('container')
    
    favoritePlaces.forEach((place) =>{
        //2. create new element
        let newPlace = document.createElement('div')
        newPlace.setAttribute("class,'place")
        //3. Add place into new element 
        newPlace.innerHTML = place
        //4. put places in container
        mainBox.prepend(newPlace)
        
        const getInfo= ()=> {
            name= prompt("Enter Name")

    places=prompt("Enter A Favorite Place of Yours")
    areUsure=prompt("Would you like to add another place")

    if(areUsure === 'Y') {
        places=prompt("Enter A Favorite place of yours")
        favoritePlaces.push(places)
    } else {
        console.log("Done")
    }
}


    })


}

