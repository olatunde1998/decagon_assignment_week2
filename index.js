    const subButton = document.getElementById('sub-btn');
    const navigationBar = document.getElementById('nav-container');
    const itemsContainer = document.getElementById('items-container');
    
    subButton.addEventListener('click',function(){
        const itemList = document.getElementById('item-list');
        const inputField = document.getElementById('item-field');
        let listItem = document.createElement("li");
        listItem.textContent = inputField.value;
        listItem.classList.add('item')
        if(inputField.value.length > 0){
            itemList.appendChild(listItem);
        }
        
    });
    
    
