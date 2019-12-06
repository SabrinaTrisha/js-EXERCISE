function sumArry(x){
    var z = 0;
    for (var i=0; i<x.length; i++){
        z += x[i];
    }

    return (MUL) => { return z*MUL};

}

var arry = [1,2,3,4,5]
var sum = sumArry(arry)
console.log(sum(2));

sum = sumArry(arry)(3);
console.log(sum);

// task 3

function validEmail(email){
    
    var check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    return check.test(email);
}

console.log(validEmail("arif1881996@gmail.com"));

// Task 4

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    
    function readStatus(index){
        return library[index].readingStatus
    }

    console.log(readStatus(1))

    // task 5

    var cart = [ 
        {
            name: 'Shoes',
            price: 560,
            quantity: 4
        },
        {
            name: 'Regular Tees',
            price: 455.50,
            quantity: 6
        },
        {
            name: 'Socks',
            price: 65.99,
            quantity: 2
        }];

    function add_items(new_name,new_price,new_quantity){
        var element = {}
        element.name = new_name
        element.price = new_price
        element.quantity = new_quantity
        cart.push(element)
    }

    function sort_item(item)
    {
        cart.sort(function(a,b){
            return a[item] - b[item]
        })
    }
    function findByNAme(get_name){
        var item  = cart.find(item => item.name === get_name); 
        return item;

    }
    function totalCost(){
        var sum =0

        for (var i=0; i<cart.length; i++){
            sum = sum + cart[i].price
        }  

        return sum;
    }
    

    add_items("T-shirt",100,3)
    sort_item("price")
    var found = findByNAme("Shoes")
    var Totalprice = totalCost()
    

    

    console.log("Item Found: ",found)
    console.log(cart)
    console.log(Totalprice)







