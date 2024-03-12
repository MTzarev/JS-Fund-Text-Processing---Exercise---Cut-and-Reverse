function cutAndReverse (firstString){
    let midString = firstString.length/2;
    let left = firstString.substring(0, midString).split(``).reverse().join(``)
    let right = firstString.substring(midString).split(``).reverse().join(``);
    console.log(left);
    console.log(right);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
//cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
