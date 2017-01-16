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
		total:0,
		decimal:false,
		topPart:null,
		lowerPart:null,
		afterEquals:false,
		state:false,
		topPartStyle:{
			color:"#E3CEA7",			
			paddingRight:"1em"
		},
		lowerPartStyle:{
			color:'#E3CEA7',
			fontSize:'3em'
		}
	},

/*Add elements to a string, when equals,join array, then eval string ,allow delete previous through del button,allow decimal
	if decimal
*/
	methods:{
		pushed(element){
			if(this.afterEquals){
				this.topPart = this.lowerPart
				this.afterEquals=false
			}
			//if decimal, set decimal true, if !decimal 
			if(Number.isInteger(element) && this.state){
				this.state = false;
			}

			if(element == "."){
				this.state= true;
				this.displayArray[this.displayArray.length - 1] = this.displayArray[this.displayArray.length - 1] + element;
			}

			if(!this.state){
				this.displayArray.push(element)
				this.lowerPart = this.displayArray.join('')
			}
			if(element == "="){
				this.displayArray.pop()
				this.afterEquals = true
				this.total = eval(this.displayArray.join(''))
				this.lowerPart = this.total;
				this.topPart =  this.displayArray.join('');
				this.displayArray=[];          
			}

		},
		reset(){
			this.displayArray = [],
			this.total = null,
			this.lowerPart = null,
			this.topPart = null
		},
	}
})