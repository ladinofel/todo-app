

const switchLogic = (() => {  
    const switchPriority = document.getElementById('switch-priority');
    const switchTime = document.getElementById('switch-time');  

    switchPriority.addEventListener('click', () => {
        console.log('You clicked once.')
        //switchTime.checked = !switchPriority.checked;
    });

    switchTime.addEventListener('click', () => {
        console.log('You clicked twice');
        //switchPriority.checked = !switchTime.checked;
    });
    

})();



export default switchLogic;
