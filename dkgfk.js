function megaFriend([a,b,c]){
    var mega = arguments[0];
    for(i=0;i<arguments.length;i++){
        if(arguments[i].length> mega.length){
            mega = arguments[i];
        }
    }
    return mega;
}
var result = megaFriend('shakil','azad','raklib','Thuhin','iqbal',' jhankar');
console.log(result);