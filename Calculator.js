/* Link Vue with app,  add onclick events to each
setup variable for total an dlink it to the display
setup a string with the current computation so that it is displayed
setup onclick with equals sign 
perform computation when any button is clicked
add to an array with each key pressed, display an array of strings with the computation
change state according to clicked button, if !number, state = that 

add C reset functionality

add everything up and then let computer do computation, structure it in a format and then return what computer gives as answer
if integer add like string, if sign add another element, convert strings to numbers then return computation
*/

var vm = new Vue({
	el:"#app",
	data:{
		displayArray:[],
		total:null,
		state:null,
		topPart:null,
		lowerPart:null,
		topPartStyle:{
			color:"#E3CEA7",			
			paddingRight:"1em"
		},
		lowerPartStyle:{
			color:'#E3CEA7',
			fontSize:'3em'
		}
	},
	methods:{
		pushed(element){
			this.displayArray.push(element)
			this.lowerPart = this.displayArray.join('')

			if(!this.total && this.total != 0){
				this.total = element
			}

			if(element == "="){
				this.lowerPart = this.total;
				this.topPart =  this.displayArray.join('');
			}else if(Number.isInteger(element)) {

				switch(this.state){
					case '+':
						this.total = this.total + element
						console.log(this.total)
						break;
					case '-':
						this.total= this.total - element
						break;
					case 'x':
						this.total = this.total * element
						break;
					case '/':
						this.total = this.total/element
						break;
				}
			}
			else if(!Number.isInteger(element)){
				this.state = element
			}

		},
		reset(){
			this.displayArray = [],
			this.total = null,
			this.lowerPart = null,
			this.topPart = null,
			this.state = null
		}
	}
})