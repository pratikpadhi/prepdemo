import {test,Browser,Page,expect,Locator} from '@playwright/test'
import path from 'path'
export class booking
{
    private page:Page
    private selctbus : Locator
    private seat
    private selectboarding:Locator
    private selectboardingpoint:Locator
     private selectdropping:Locator
     private providepassengerdetails:Locator
     private mobileno:Locator
     private email:Locator
     private proceed:Locator
     private name:Locator
       private gender:Locator
         private genderselection:Locator
         private age:Locator
private concession:Locator
private concessionvalue:Locator

    constructor(page:Page)
    {
this.page=page
this.selctbus= this.page.locator("//div[text()='Select Berth']").nth(1)
this.seat = this.page.locator("//div[@class='seatlook']")
this.selectboarding = this.page.locator("//div[text()='Select Boarding Point']")
this.selectboardingpoint = this.page.locator("//div[@class='point-opt active']/div").nth(0)
this.selectdropping = this.page.locator("//div[text()='Select Dropping Point']")
this.providepassengerdetails = this.page.locator("//div[text()='Provide Passenger Details']")
this.mobileno = this.page.locator("//input[@name='mobileNo']")
this.email = this.page.locator("//input[@name='email']")
this.proceed = this.page.locator("//div[contains(text(),'PROCEED TO passenger detail as')]")
this.name = this.page.locator("[name='paxName[0]']")
this.gender = this.page.locator("[name='paxGender[0]']")
this.genderselection = this.page.locator("//div[text()='Male']")
this.age = this.page.locator("[name='paxAge[0]']")
this.concession = this.page.locator("[name='paxConcessionType[0]']")
this.concessionvalue = this.page.locator("//div[text()='GENERAL PUBLIC']")

    }

    async fillbookingdetailsandvalidate()
    {
await this.selctbus.click();
await this.page.waitForTimeout(3000)
 
for(let i=0;i<await this.seat.count();i++)
{
if(await this.seat.nth(i).getAttribute('color') === 'rgb(32, 32, 32)')
{

}else
{
    await this.seat.nth(i).click();
    break;
}
}

await this.selectboardingpoint.click();
await this.selectdropping.click()
await this.selectboardingpoint.click()
await this.providepassengerdetails.click()
await this.mobileno.fill('9874512548')
await this.email.fill('asdc@gmail.com')
await this.proceed.click();
await this.name.fill('TestUser');
await this.gender.click();
await this.genderselection.click();
await this.age.fill('24');
await this.concession.click();
await this.concessionvalue.click();
await this.page.getByText('Proceed to Checkout').click();
await this.page.waitForTimeout(3000)
const loc = path.join(__dirname,'../screenshot/snap.png')
await this.page.screenshot({path:loc , fullPage:true});
expect(await this.page.locator('.prcd--btn--wrap div').last().textContent()).toStrictEqual('PROCEED TO PAY')
    }
}