let names = ['thahee', 'john', 'hathil', 'Joseph']

for (let name of names) {

    // set name first letter capital
    const fLetter = name[0].toUpperCase();
    const balLetter = name.slice(1);
    if(fLetter == 'J'){
        console.log(`Hello ${fLetter}${fLetter}${balLetter}!`);

    }else{
        console.log(`Hello ${fLetter}${balLetter}!`);
    }   
}