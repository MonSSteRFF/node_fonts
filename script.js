const fs = require('fs');
let fonts_array = [];
const dir = 'fonts/';

fs.unlink("fonts.scss", function(){});

const mixin = '@mixin font($fname, $fontweight, $fnamefull, $fontstyle) {\n' +
	'\t@font-face {\n' +
	'\t\tfont-family: $fname;\n' +
	'\t\tfont-style: $fontstyle;\n' +
	'\t\tfont-weight: $fontweight;\n' +
	'\t\tsrc: url(\'/fonts/\'+ $fnamefull +\'.eot\') format("eot");\n' +
	'\t\tsrc: url(\'/fonts/\'+ $fnamefull +\'.otf\') format("eot");\n' +
	'\t\tsrc: url(\'/fonts/\'+ $fnamefull +\'.svg\') format("svg");\n' +
	'\t\tsrc: url(\'/fonts/\'+ $fnamefull +\'.ttf\') format("ttf");\n' +
	'\t\tsrc: url(\'/fonts/\'+ $fnamefull +\'.woff\') format("woff");\n' +
	'\t\tsrc: url(\'/fonts/\'+ $fnamefull +\'.woff2\') format("woff2");\n' +
	'\t}\n' +
	'}'
fs.appendFileSync('fonts.scss', `${mixin}`);

fs.readdir(dir, (err, files) => {if (err) {return}
	files.forEach(function(item) {
		let default_name = item.replace(/.woff2|.svg|.woff|.otf|.ttf|.eot$/, '');
		if (!fonts_array.includes(default_name)){
			fonts_array.push(default_name);
		}
	});
	fonts_array.forEach(function (item){
		let fname = item.toLowerCase().indexOf('italic') !== -1
			? item.split('-').shift().replace('-','').replace('italic','')
			: item.split('-').shift().replace('-',''),
				fontstyle = item.toLowerCase().indexOf('italic') !== -1 ? 'italic' : 'normal',
				fontweight = replace_font(item.toLowerCase()),
				data_to_append = '@include font('+fname+','+fontweight+",'"+item+"',"+fontstyle+');';

		fs.appendFileSync('fonts.scss', `\n${data_to_append}`);
	});
});

function replace_font($item){
	let item, naming = $item.split('-').pop().replace('italic','');

	switch (naming){
		case 'thin':
			item = 100; break;
		case 'extralight':
		case 'ultralight':
			item = 200; break;
		case 'light':
			item = 300; break;
		case 'book':
		case 'normal':
		case 'regular':
		case 'roman':
			item = 400; break;
		case 'medium':
			item = 500; break;
		case 'semibold':
		case 'demibold':
			item = 600; break;
		case 'bold':
			item = 700; break;
		case 'extrabold':
		case 'ultrabold':
			item = 800; break;
		case 'black':
		case 'heavy':
			item = 900; break;
		default:
			item = 'normal';
	}

	return item;
}