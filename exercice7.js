document.addEventListener('keydown', function (e) {
    /*switch (e.code){...*/
    
    //check if method in imageManage exists 

    if (imageManager.hasOwnProperty(e.code)){
        imageManager.execute(e.code)
    }
    
})

let imageManager ={
    image: document.querySelector(' .twitter-picture'),
    ArrowUp: function () {
        this.image.style.top= this.image.offsetTop -10 + 'px'
    },
    ArrowLeft: function () {
        this.image.style.left= this.image.offsetLeft -10 + 'px'

    },
    ArrowRight: function () {
        this.image.style.left= this.image.offsetLeft - 10 + 'px'

    },
    ArrowDown: function () {
        this.image.style.top= this.image.offsetTop- 10 + 'px'

    },

}
imageManager.execute = function (key) {
    let methodName = imageManager[key]
    return methodName.apply(imageManager)
}
setInterval(function(){
    //add a random move
    console.log('ici')
},500)