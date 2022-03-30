outputsection = document.querySelector('.output-section')

const input = document.querySelector('.input');

fetch('https://72ih8opnm2.execute-api.ap-south-1.amazonaws.com/live',{mode:'no-cors'},
{
    method:'GET',
    'Content-type':'application/json'
}
).then(response =>{
    return response.json;
}).then(data =>{
    console.log(data)
    // displayString(data)


    input.addEventListener('input', function (text) {
        inputtext = text.target.value;
        console.log(inputtext)
        const value = data.filter(element => {
            // console.log(element.login)
            return element.element.location == inputtext || element.company_name == inputtext
        });
        console.log(value)
        // displayString(value)
    });
})



// function displayString(display){
//     let string = display.map((element) => {
//         return `<div class="output">
//             <h1>${element.login}</h1>
//             <h1>${element.id}</h1>
//         </div>`
//     });
//     string = string.join('');
//     //  console.log(string)
//     outputsection.innerHTML = string;
// }
