const Profile = () => {
  
    const person1 = {
        firstName : "Chris",
        location : "Arizona",
        printString : function () {    
            return `${this.firstName} lives in ${this.location}.`
        }
    }
    console.log(person1.printString)

    const person2 ={
        secondName : "Patsy",
        location : "Illinois",
        printString : function () {
            return `${this.secondName} lives in ${this.location}`
        }
    }      
    console.log(person2.printString)
}

export default Profile 