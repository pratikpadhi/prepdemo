import {Browser,chromium,test,expect} from '@playwright/test'
import value from '../File/data.json'
import { home } from '../Pages/Home'
import { booking } from '../Pages/Booking'
let h:home;
let b:booking;
test.beforeEach('before each',async({page})=>{

    //const Browser = await chromium.launch({headless:false})
    //const context = await Browser.newContext()
     //page = await context.newPage()
    h = new home(page);
    b = new booking(page);

})

test('usecase three',async({page})=>
{
    
   
   await h.navigate();
   const p = await h.filldetails(value.source,value.destination,value.futuredate,value.futuremonth,value.futureyear)

  
   await b.fillbookingdetailsandvalidate();


})