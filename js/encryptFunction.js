let encryptButton = document.getElementById('encryptButton')

encryptButton.addEventListener('click', () => {

        let textIn = document.getElementById('textIn')
        let textValue = textIn.value
        let textOut = document.getElementById('textOut')
        let encryptBoxVisibility = document.getElementById('encryptBoxVisibility')
        let encryptImage = document.getElementById('encryptImage')

        let text = []
        const vowels = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 'd']
        const keys = ['pez', 'carro', 'amor', 'laura', 'lio', 'fish', 'car', 'love', 'problem']

        
        text = textValue.split('')

        
        const encryptText = []
        
        text.map(item => {
                if(item == vowels[0]){
                    encryptText.push(item = keys[0])
                }else if(item == vowels[1]) {
                    encryptText.push(item = keys[1])
                }else if(item == vowels[2]) {
                    encryptText.push(item = keys[2])
                }else if(item == vowels[3]) {
                    encryptText.push(item = keys[3])
                }else if(item == vowels[4]) {
                    encryptText.push(item = keys[4])
                }else {
                    encryptText.push(item)
                }
        })


        const joinedText = encryptText.join('')
        encryptImage.style.visibility = 'hidden'
        encryptImage.style.transition = '0.5s all'

        setTimeout(() => {
            textOut.innerText = joinedText
            encryptBoxVisibility.style.visibility = 'visible'
        }, 650);
    }
)