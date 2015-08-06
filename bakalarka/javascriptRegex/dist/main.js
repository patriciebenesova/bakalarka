//var babel = require("babel");
//interface pro readline
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Regex = (function () {
	function Regex() {
		_classCallCheck(this, Regex);

		var readline = require('readline');
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		main();
	}

	_createClass(Regex, [{
		key: 'main',
		value: function main() {
			var regex, str;
			//funkce, která přečte regulární výraz
			rl.question('Enter regex: ', function (answer) {
				rl.question('Enter flags: ', function (flag) {
					regex = prevodReg(answer, flag);
					//funkce, která přečte zadaný text
					rl.question('Enter text: ', function (ans) {
						str = ans;
						rl.question('Replacement: ', function (repl) {
							if (repl != '') {
								nahradit(regex, ans, repl);
							} else {
								zjistitShodu(regex, ans);
							}
						});
					});
				});
			});
		}
	}, {
		key: 'prevodReg',
		value: function prevodReg(reg, f) {
			var vystup;
			try {
				if (f == '') {
					//zadaný výraz se převede do regulárního výrazu bez vlaječky
					vystup = new RegExp(reg);
				} else {
					//zadaný výraz se převede do regulárního výrazu i s vlaječkou
					vystup = new RegExp(reg, f);
				}
			} catch (error) {
				//odchycení výjimky SyntaxError
				console.log('SyntaxError: Nesprávně zadaný výraz');
				main();
			}
			return vystup;
		}
	}, {
		key: 'zjistitShodu',
		value: function zjistitShodu(re, str) {
			//zajistí se, zda daný text odpovídá vzoru
			if (re.test(str)) {
				//vrací substring odpovídající vzoru
				var newstr = str.match(re);
				//var newstr = re.exec(str);
				console.log(newstr);
				main();
			} else {
				console.log('Žádná shoda');
				main();
			}
		}
	}, {
		key: 'nahradit',
		value: function nahradit(reg, str, repl) {
			if (reg.test(str)) {
				//nahradí zadaný text
				var newstr = str.replace(reg, repl);
				console.log(newstr);
				main();
			} else {
				console.log('Žádná shoda');
				main();
			}
		}
	}]);

	return Regex;
})();
//# sourceMappingURL=main.js.map