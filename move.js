function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom,callback){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            if (y > window.innerHeight) {
                y=0
            }
            if (y <0) {
                y=window.innerHeight
            }
            if (x > window.innerWidth) {
                x=0
            }
            if (x <0) {
               x=window.innerWidth
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            if(callback!= null){
                callback(direction)
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            if(callback!= null){
                callback(direction)
            }
        })
    }
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}
