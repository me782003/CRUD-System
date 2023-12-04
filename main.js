    // repeat
    // length
    // access
    // search
    // slice
    // split
    // substring
    // substr

// let name = 'i love java script';

    // console.log(name.charAt()); view undefined message
    // console.log(name.indexOf('a'));view the index .. don't view undefined message.. (" " ,start point)
    // console.log(name.lastIndexOf('i',13)); examine from the last index (" " ,start point)
    // console.log(name.slice(0,2)); cut from start to end-1
    // console.log(name.split(''));cut and put in an array

    // console.log(name.slice(-6,-4));//take a negative value
    // console.log(name.substring(2,6)); //no negative value
    // console.log(name.substr(2,6));//(start , length)

    // console.log(name.indexOf("a", 9)); 
    // console.log(name.lastIndexOf("a" ,9));
    // console.log(name.includes("o",4)); //return true or flase (" ",strat point)
    // console.log(name.startsWith("e",5)) //return true or false ...it means does this strt with " " ? (" ",start point)
    // console.log(name.endsWith("j",8)) //return true or false ...it means does this end with " " ? (" ",length)

// ...................................................................................
    // let names = ['ahmed', 'zyad', 'salem', 'mazin'];

    // names.push('gamal', "taha") // add elements at the end of the array
    // names.unshift('mohammed', 'anas') //add elements at the beginning of the array
    // names.shift()//removes the first element from the array
    // console.log(names.shift())//prints the first element and removes it from the array
    // names.pop(); //removes the last element form the array
    // console.log(names.pop())//prints the last element and removes it form the array

    // names.splice(1,1,"...")//removes any elements you want..(start index, count, البديل, البديل)
    // console.log(names.slice(-3,-1))// remove any elements you want..(start index , end index)..take negative values

    // console.log(names.indexOf('ahmed',1)) //view the index of any element you want from the left side ..(" ", start index)
    // console.log(names.lastIndexOf('ahmed',-1)) //view the index of any element you want from the right side ..("", start index)
    // console.log(names.includes('mazin',0)) //return true or false.. whether the element exists or not (" ",start point)

    // names.reverse()//reverse the array
    // names.sort()//arranges the array alphabetically & numerically
// .................................................................................................................
    // let arr1 =['ahmed', 'ali', 'mazen'];
    // let arr2 =['gamal', 'karem', 'omar']
    // let arr3 =['mohammd', 'sayed', 'abdo']

    // arr1+=arr2;//merge arrays together and return the result in string
    // console.log(arr1.concat(arr2,arr3,"mona"))//merges arrays together and returns the result in array..and adds any thing you want.==>names.concat(arr2,arr3,'mona')
    // console.log(arr1.join('-'))// returns the array into string..and separates elements with any thing ==> arr1.join(separator)
// ..........................................................................................................................................

    // let x = 'ahmed';
    // let y = 'ali';
    // console.log (x==y) //if x aquals y, it returns true 

    // let askemail = 'abdelrahman@gmail.com';
    // let email ='abdelrahman@gmail.com';

    // console.log(askemail.toLowerCase().trim()==email)//.toLowerCase() tyrns the words int lowercase letters// trim() removes the spaces at the beginning and end of the sentence 

//_______________________________________________________________

    // console.log(5=='5'); //compare values only ...returns true
    // console.log(5 ==='5');//compare values and data types..returns flase
    // console.log(4 < 5); // will return true
    // console.log(4 > 5); // will return false
    // console.log(4 <= 5); // will return true
    // console.log(4 >= 5); // will return false
    // console.log(5 >= 5); // will return true
    // console.log(4 != 5); // will return true ...is not equal to ?

    // && and 
    // || or
//..........................................................................................................................................................................................

// let age =prompt('whats your age?');
// let result = age > 18? 'hello user' :age == 18? 'you are 18 now' : 'no you very young'

// console.log(result)

// .................................................................................................................................................................................

// let role = prompt('what is your role?');

// switch(role){
//     case 'admin':
//         document.write('create , update , delete');
//         break;

//     case 'moderator':
//         document.write('create , update');
//         break;

//     case 'editor':
//         document.write('update');
//         break;

//     default:
//         document.write('hello user');
    
// }
// .........................................................................................................................................................................................

// let cars = ['BMW', 'Mercedes Benz', 'Honda' ];
// let models = [2020, 2021, 2022];
// let colors = ['black', 'white', 'red', 'blue' ]

// for(let i = 0; i<cars.length;i++){
//     console.log(`car: ${cars[i]}`);
//     for(let j = 0; j<models.length; j++){
//         console.log(`model: ${models[j]}`);
//     }
//     for(let x = 0; x<colors.length; x++){
//         console.log(`color: ${colors[x]} `)
//     }
//     console.log('____________________________')
// }
// ................................................................................................................................................................

// let users = ['ali', 'mazin', 'gamal' ,'oday', 'yousef', 'ahmed', 'sayed', 'fathy']

// for(let i = 0 ; i<users.length; i++){
//     console.log(users[i]);
//     if(users[i]=='gamal'){
//         break;
//     }
//     // console.log(users[i]);

// }
// ................................................................................................................................................................
// let i =0;

// do{

//     document.write('<h1>hello</h1>')
//         i++;

// }while(i<3);
// ................................................................................................................................................................

// function days(age){
//     let result = age * 365;
//     return result;
// }
// let day = days(19);

// function calcAgeByHours(age){
//     let result = age*24;
//     return result;
// }
// let hour = calcAgeByHours(day)
// console.log(hour + ' hours');
// ................................................................................................................................................................


    // let digits =[5,5,5,5,2]
    // function calc(digits) {
        
    //     let result =0;
    //     for(let i=0; i<digits.length; i++){
    //         result+=digits[i];
    //     }
    //     console.log(result);
    // }
    // calc(digits);
    // ................................................................................................................................................................

                //.........[object]........


        // let car = {
        //     title:'BMW',
        //     price:500000,
        //     color:['white', 'red' ,'black'],
        //     model:2020,

        //     hello:function(){
        //         return 'hello';
        //     }

        // }

        // console.log(car.hello()); 

// ................................................................................................................................................................
//     let x=14;

// let user = {
//     //property

//     firstName:'abdo',
//     lastName:'gamal',
//     email:'test@gmail.com',
//     age:x,
//     skills:['html','css','python','php'],
//     acrive:false, //the activity

//     // nested object
//     phoneNumber:{
//         first:'01289790034',
//         second:'01288156209',

//     },
//     adriss:{
//         egypt:'elmohandsen',
//         uae:'abu dhabi',
//     },
//     //method

//     isActive:function(){
//         if (user.acrive===true){
//             return 'hello user';
//         }else{
//             return 'sorry you are not active'
//         }
//     },

//     getAge:function(){
//         if(user.age>=18){
//             return 'available';
//         }else{
//             return 'unavailable'
//         }
//     },

// }

// console.log(user.firstName);
// console.log(user['firstName']);
// console.log(user.phoneNumber.first)
// console.log(user['phoneNumber']['second'])
// console.log(user.isActive());
// console.log(user['getAge']());

// ................................................................................................................................................................

// let user ={
//     name:'abedlrahman',
//     age: 25,
// };

// console.log(user.name);
    
// user.hello = function(){
//     return 'hello';
// }
// console.log(user.hello());

// ................................................................................................................................................................


// let user = new Object({
//     name:'ahmed',
// });

// console.log(user.name);
// ................................................................................................................................................................

// let user1 = {
//     name:'mohammed',

//     getName:function(){
//         return `hello ${this.name}`;
//     },
// }

// let user2 = Object.create(user1, {
//     age:{value:20}
// });
// user2.name = 'ali';
// user2.age = 30;
// console.log(user2.name);
// console.log(user1.name);
// console.log(user2.age);
// console.log(user2.getName());
// ................................................................................................................................................................

// let a1= {
//     num1:1,

//     hello:function(){
//         return 'hello'
//     },
// }
// let a2= {
//     num2:2,
// }
// let a3= {
//     num3:3,
// }

// let a4 = Object.assign(a1,a2,a3,{
//     num4:4,
// })
// a4.num1 = 10;
// a4.r = 100;
// console.log(a4);

// ................................................................................................................................................................

// let img = document.getElementById('img');

// img.removeAttribute('alt')
// img.removeAttribute('class')
// img.removeAttribute('id')
// img.removeAttribute('src')

// console.log(img);
// ................................................................................................................................................................
// ................................................................................................................................................................


// let names = ['ahmed','ali','gamal','abdo'];
// let ages = ['18 years old','20 years old','12 years old','19 years old'];
// let container = document.createElement('div');

// document.body.appendChild(container);
// container.style.textAlign = 'center';

// function element(name, olders) {
//     // elements
//     let card = document.createElement('div');
//     let title = document.createElement('h2');
//     let age = document.createElement('p');
//     let img = document.createElement('img');


//     // creataContent
//     let head = document.createTextNode(name);
//     let ageContent =document.createTextNode(olders);
//     img.src = 'background.jpg';

// // ///
//     title.appendChild(head);
//     age.appendChild(ageContent);
    
//     // style.....
//     card.style.width = '200px'
//     card.style.background = '#444'
//     card.style.color = '#fff'
//     card.style.padding = '10px'
//     card.style.margin = '2px'
//     card.style.display = 'inline-block'


//     img.style.width = '100%'
    


//     card.appendChild(title)
//     card.appendChild(age)
//     card.appendChild(img)
//     container.appendChild(card);
    

// }

// for(let i =0; i<4 ;i++ ){
//     element(names[i],ages[i]);
// }


// https://   =>protocol            |
//                                  |=> href
//www.instagram.com   =>host name   |

//  /mohamedelsayed1414/  =>path name

// location.pathname = 'dhfjd'

///////////////////////////////////////////////////////////////////////////////////////////

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let total = document.getElementById('total');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let updateMessage = document.getElementById('updateMessage') 
let up = document.getElementById('up') 


onscroll = function(){
    if(scrollY>=400){
        up.style.display = 'flex';
    }else{
        up.style.display = 'none';
    }

}

up.onclick = function(){
    scroll({
        top:0,
        behavior:'smooth',
    })
}


     let mode = 'create';
     let tmp;

//get totla...

function getTotal(){

    if(price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value )
        - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040'
    }else{
        total.innerHTML = '';
        total.style.background = '#992323'

    }
}



//creat product

let dataPro;
if(localStorage.product !=null){
    dataPro = JSON.parse(localStorage.product);

}else{
    dataPro = [];
}


submit.onclick = function(){
    updateMessage.style.display = 'none';
    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),

    }
    
    if(title.value !='' && price.value !='' && category.value !='' && newPro.count<= 100){
        if(mode==='create'){
            if(newPro.count > 1){

                for(let i =0; i<count.value; i++){
                    dataPro.push(newPro);

                }
            }else{
                dataPro.push(newPro);
            }

        }else{
            dataPro[  tmp  ] = newPro;
            mode ='create';
            submit.innerHTML = 'Create'
            count.style.display = 'block'
        }
        clearData();
    }


    
    localStorage.setItem('product', JSON.stringify(dataPro));
    showData();
    
}



//save in localStorage

//clear inputs

function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}




//read

function showData(){
    getTotal()
    let table = ''
    for(let i = 0; i < dataPro.length;i++ ){
        table += `
    <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>

        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>
    `
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(dataPro.length > 0){
        btnDelete.innerHTML = `
            <button onclick="deleteAll()">delete all</button>
        
        `
    }else{
        btnDelete.innerHTML =''
    }
}
showData();




//delete

function deleteData(i){

    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData();

}

function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}




//update

function updateData(i){
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    category.value = dataPro[i].category;
    count.style.display = 'none';
    submit.innerHTML = 'Update'
    mode = 'update';
    updateMessage.style.display = 'block';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth',
    });
    
}

//search

let searchMode = 'title';
function getSearchMode(id){
let search = document.getElementById('search');
    if(id == 'searchTitle'){
        searchMode = 'title';
    }else{
        searchMode = 'category'

    }
    search.placeholder = 'Search By ' + searchMode;
    search.focus();
    search.value = '';
    showData()
}


function searchDate(value){
    let table = '';
    if(searchMode == 'title'){

        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].title.includes(value.toLowerCase())){
                console.log(i);
                table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
        
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>
            `
            }
        }



    }
    
    
    else{
        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].category.includes(value.toLowerCase())){
                console.log(i);
                table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
        
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>
            `
            }
        }
    }

    document.getElementById('tbody').innerHTML = table;


}








//clean data











































































