'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//console.log(overlay);

//with query selector it is limited when you want to select multiple elements with same class only the first item wil be selected
//querySelectorAll() selects all iems in that class and put them in array to access use for loop
const btnOpenModal = document.querySelectorAll('.show-modal');

//function to open modal
const openModal =function(){
modal.classList.remove('hidden','more-classes');/*separate by comma if you want to remove multiple classes */
overlay.classList.remove('hidden');	
}


for (let i = 0; i < btnOpenModal.length; i++ ){
	//call from function
	btnOpenModal[i].addEventListener('click',openModal);//again do not call the function


	 //    //function to replace this
     // btnOpenModal[i].addEventListener('click', function(){
	 //   //console.log('button clicked');

     //   //show modal block

     //  //the class modal is hidden so we can select it then use class list and then use class list properties(ie add, remove,contains,toggle) to hide and show the modal
     // modal.classList.remove('hidden','more-classes')/*separate by comma if you want to remove multiple classes */
     // overlay.classList.remove('hidden');	
     // //classList is the way to manipulate styles in aour html document by adding removing and changing them because classes clry alot of styles in the css
	
     // });

}//for loop end

//close button
	//btn name then add event listner specify the event ('click', then a function (){}) we do note claa the function because javascript will call it automatically when the event (clck) occurs
//Now we add the class(hidden) that we removed ad it will call the css to remove the modal block;
	

	//lets make a function for for add hidden in modal and overlay to avoid repetition
const closeModal = function(){
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	};

btnCloseModal.addEventListener('click',closeModal);//do not call the function  js will do it for you once the event occurs
overlay.addEventListener('click', closeModal);	


// 	//the function will replace he following
// btnCloseModal.addEventListener('click',function(){
// 		modal.classList.add('hidden');
// 		overlay.classList.add('hidden');
// 	});
// overlay.addEventListener('click',function(){
// 	modal.classList.add('hidden');
// 	overlay.classList.add('hidden');
// });

//listeningto the escape key event
//there are thee types of keyboard events (key down, key press, keyup)
//key down is fired continously when we keep our fingiure on a certain key
//keydown is fired as we just press down any key


//by giving the function a parameter(any) it will store all keys as an object as false and the pressed key as true

document.addEventListener('keydown', function (e) {
	
	// we use dot . and then the property name to read the proprty fom an object
	console.log(e.key);

	// if(e.key === 'Escape')
	//    console.log('Esc was pressed');

//we need to close the modal when escape key is pressed
	//but first we can check if the class is available coz we only want to close the moddal if it contains the hidden class

	 if(e.key === 'Escape'){
	 	if (!modal.classList.contains('hidden')){//check if modal does not have a hiden class
	 		closeModal();//here call the function to close the modal
	 		//if esc key is pressed and if modal is not hidden then hides it
	 	}
	 }
});

// //or

// if(e.key === 'Escape' && !modal.classList.contains('hidden')){
// 	closeModal(); //very staright forward
// }




