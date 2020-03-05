import React from 'react'
import Box from './Box'

const style = {
    height: 480,
    width: 900,
    border: "2px solid #333333"
}

let arr1 = []

for (let ii = 0; ii < 480; ii++) {
    arr1.push(ii)
}

let num = -1
let squareTaken1 = []

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            squareTaken: [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]
            
        }
    }

    getRandomNumber = (low, high) => {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    generateGame = () => {
        squareTaken1 = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]]
        for (let ii = 0; ii < 99; ii++) {
            squareTaken1[this.getRandomNumber(0, 15)][this.getRandomNumber(0, 29)] = "X"
        }
        if(this.checkGame(squareTaken1)){
            this.getNumber(squareTaken1)
            this.setState({ squareTaken: squareTaken1 })
            this.state.squareTaken = squareTaken1
        }else{
            this.generateGame()
        }
    }

    getNumber = (arr) => {
        for(let nn = 1; nn < arr.length-1; nn++){
            for(let kk = 1; kk < arr[nn].length-1; kk++){
                if(arr[nn][kk] === ""){
                    let count = 0
                    if(arr[nn-1][kk] === "X"){
                        count ++
                    }
                    if(arr[nn+1][kk] === "X" ){
                        count ++
                    }
                    if(arr[nn][kk-1] === "X" ){
                        count ++
                    }
                    if(arr[nn][kk+1] === "X" ){
                        count ++
                    }
                    if(arr[nn-1][kk-1] === "X"){
                        count ++
                    }
                    if(arr[nn-1][kk+1] === "X"){
                        count ++
                    }
                    if(arr[nn+1][kk-1] === "X"){
                        count ++
                    }
                    if(arr[nn+1][kk+1] === "X"){
                        count ++
                    }
                    arr[nn][kk] = count
                }
            }
        }

        for(let oo = 1; oo < arr.length-1; oo ++){
            if(arr[oo][0] === ""){
                let count = 0
                if(arr[oo+1][1] === "X"){
                    count ++
                }
                if(arr[oo-1][0] === "X"){
                    count ++
                }
                if(arr[oo+1][0] === "X"){
                    count ++
                }
                if(arr[oo-1][1] === "X"){
                    count ++
                }
                if(arr[oo][1] === "X"){
                    count ++
                }
                arr[oo][0] = count
            }
            if(arr[oo][0] === ""){
                let count = 0
                if(arr[oo+1][arr[oo].length-1] === "X"){
                    count ++
                }
                if(arr[oo-1][arr[oo].length] === "X"){
                    count ++
                }
                if(arr[oo+1][arr[oo].length] === "X"){
                    count ++
                }
                if(arr[oo-1][arr[oo].length-1] === "X"){
                    count ++
                }
                if(arr[oo][arr[oo].length-1] === "X"){
                    count ++
                }
                arr[oo][0] = count
            }
        }

        for(let pp = 1; pp < arr[0].length-1; pp ++){
            if(arr[0][pp] === ""){
                let count = 0
                if(arr[0][pp-1] === "X"){
                    count ++
                }
                if(arr[0][pp+1] === "X"){
                    count ++
                }
                if(arr[1][pp-1] === "X"){
                    count ++
                }
                if(arr[1][pp] === "X"){
                    count ++
                }
                if(arr[1][pp+1] === "X"){
                    count ++
                }
                arr[0][pp] = count
            }

            if(arr[arr.length-1][pp] === ""){
                let count = 0
                if(arr[arr.length-1][pp-1] === "X"){
                    count ++
                }
                if(arr[arr.length-1][pp+1] === "X"){
                    count ++
                }
                if(arr[arr.length-2][pp-1] === "X"){
                    count ++
                }
                if(arr[arr.length-2][pp] === "X"){
                    count ++
                }
                if(arr[arr.length-2][pp+1] === "X"){
                    count ++
                }
                arr[arr.length-1][pp] = count
            }
        }

        if(arr[0][0] === ""){
            let count = 0
            if(arr[0][1] === "X"){
                count ++
            }
            if(arr[1][0] === "X"){
                count ++
            }
            if(arr[1][1] === "X"){
                count ++
            }
            arr[0][0] = count
        }

        if(arr[0][15] === ""){
            let count = 0
            if(arr[0][14] === "X"){
                count ++
            }
            if(arr[1][15] === "X"){
                count ++
            }
            if(arr[1][14] === "X"){
                count ++
            }
            arr[0][15] = count
        }

        if(arr[15][0] === ""){
            let count = 0
            if(arr[15][1] === "X"){
                count ++
            }
            if(arr[14][0] === "X"){
                count ++
            }
            if(arr[14][1] === "X"){
                count ++
            }
            arr[15][0] = count
        }

        if(arr[15][15] === ""){
            let count = 0
            if(arr[15][14] === "X"){
                count ++
            }
            if(arr[14][14] === "X"){
                count ++
            }
            if(arr[14][15] === "X"){
                count ++
            }
            arr[15][15] = count
        }
    }

    checkGame = (arr) => {
        console.log("doing")
        for(let jj = 1; jj < arr.length-1; jj++){
            for(let kk = 1; kk < arr[jj].length-1; kk++){
                if(arr[jj][kk] === "X"){
                    if(arr[jj-1][kk] === "X" && arr[jj+1][kk] === "X" && arr[jj][kk-1] === "X" && arr[jj][kk+1] === "X" && arr[jj-1][kk-1] === "X" && arr[jj-1][kk+1] === "X" && arr[jj+1][kk-1] === "X" && arr[jj+1][kk+1] === "X"){
                        return false
                    }
                }
            }
        }

        for(let ll = 1; ll < arr.length-1; ll ++){
            if(arr[ll][0] === "X" && arr[ll-1][0] === "X" && arr[ll+1][0] === "X" && arr[ll-1][1] === "X" && arr[ll][1] === "X" && arr[ll+1][1] === "X"){
                return false
            }
            if(arr[ll][arr[ll].length] === "X" && arr[ll-1][arr[ll].length] === "X" && arr[ll+1][arr[ll].length] === "X" && arr[ll-1][arr[ll].length-1] === "X" && arr[ll][arr[ll].length-1] === "X" && arr[ll+1][arr[ll].length+1] === "X"){
                return false
            }
        }

        for(let mm = 1; mm < arr[0].length-1; mm ++){
            if(arr[0][mm] === "X" && arr[0][mm-1] === "X" && arr[0][mm+1] === "X" && arr[1][mm-1] === "X" && arr[1][mm] === "X" && arr[1][mm+1] === "X"){
                return false
            }
            if(arr[arr.length-1][mm] === "X" && arr[arr.length-1][mm-1] === "X" && arr[arr.length-1][mm+1] === "X" && arr[arr.length-2][mm-1] === "X" && arr[arr.length-2][mm] === "X" && arr[arr.length-2][mm+1] === "X"){
                return false
            }
        }

        if(arr[0][0] === "X" && arr[0][1] === "X" && arr[1][0] === "X" && arr[1][1] === "X"){
            return false
        }

        if(arr[0][15] === "X" && arr[0][14] === "X" && arr[1][15] === "X" && arr[1][14] === "X"){
            return false
        }

        if(arr[15][0] === "X" && arr[15][1] === "X" && arr[14][0] === "X" && arr[14][1] === "X"){
            return false
        }

        if(arr[15][15] === "X" && arr[15][14] === "X" && arr[14][14] === "X" && arr[14][15] === "X"){
            return false
        }

        return true
    }

    createBox = () => {
        num += 1
        return <Box id={num}></Box>
    }

    resetNum = () => {
        num = -1
    }

    createBoxes = () => {
        return arr1.map(this.createBox)
    }

    componentDidMount() {
        this.generateGame()
    }

    render() {
        console.log(this.state.squareTaken)
        return <div>
            <div style={style}>
                {this.createBoxes()}
            </div>
        </div>
    }
}

export default Game