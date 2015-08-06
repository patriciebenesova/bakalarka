//var babel = require("babel");
//interface pro readline
class Regex{
	constructor(){
var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

main();
}

 main(){
	var regex, str
	//funkce, která přečte regulární výraz
	rl.question('Enter regex: ', (answer) =>{
		rl.question('Enter flags: ',(flag)=>{
			regex = prevodReg(answer,flag)
				//funkce, která přečte zadaný text
				rl.question('Enter text: ', (ans) =>{
					str = ans
					rl.question('Replacement: ',(repl)=>{
						if(repl != ""){
							nahradit(regex,ans,repl)
						}else{
							zjistitShodu(regex,ans)
						}
					});
					
				});
		});
	});
};

prevodReg(reg,f){
	var vystup
	try{
		if(f == ""){
			//zadaný výraz se převede do regulárního výrazu bez vlaječky
			vystup = new RegExp(reg)
		}else{
			//zadaný výraz se převede do regulárního výrazu i s vlaječkou
			vystup = new RegExp(reg,f)
		}
	}catch (error){
		//odchycení výjimky SyntaxError
		console.log("SyntaxError: Nesprávně zadaný výraz");
		main()
	}
	return vystup
};

zjistitShodu(re,str){
	//zajistí se, zda daný text odpovídá vzoru
	if(re.test(str)){
		//vrací substring odpovídající vzoru
		var newstr = str.match(re)
		//var newstr = re.exec(str);
		console.log(newstr)
		main()
	}else{
		console.log("Žádná shoda")
		main()
	}
};

nahradit(reg,str,repl){
	if(reg.test(str)){
		//nahradí zadaný text
		var newstr = str.replace(reg,repl)
		console.log(newstr)
		main()
	}else{
		console.log("Žádná shoda")
		main()
	}

}

}
