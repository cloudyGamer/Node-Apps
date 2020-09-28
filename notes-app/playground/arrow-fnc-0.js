const event = {
     name: 'Birthday Party',
     guestList: ['andrew','Jen'],
     printGuestList () {
          this.guestList.forEach(
             (guest) => {
               console.log(
               `${guest} is attending ${this.name}`);
            }
            );
          
     }
};

event.printGuestList();