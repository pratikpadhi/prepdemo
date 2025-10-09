import {Locator,test,Page} from '@playwright/test'

export class home{

private leavingfrom: Locator
 private valueentryfieldfrom:Locator
private valueentryfieldto:Locator
 private goingto: Locator
 private choosedate:Locator
 private month1:Locator
  private month2:Locator
 private year1:Locator
   private year2:Locator
 private searchbus: Locator
 private next:Locator
 private page:Page

  constructor( page:Page) {
    this.page=page;
    this.leavingfrom = this.page.locator('#fromCity_chosen a')
    this.valueentryfieldfrom = this.page.locator('#fromCity_chosen div div input')
    this.goingto = this.page.locator('#toCity_chosen a')
   this. valueentryfieldto = this.page.locator('#toCity_chosen div div input')
     this.choosedate = this.page.locator('#departDate')
       this.month1 = this.page.locator('span.ui-datepicker-month').first()
       this.month2 = this.page.locator('span.ui-datepicker-month').last()
       this.year1 = this.page.locator('span.ui-datepicker-year').first()
          this.year2 = this.page.locator('span.ui-datepicker-year').last()
           this.searchbus = this.page.locator('#submitSearch')
           this.next =  this.page.getByText('Next',{exact:true})
}
async navigate()
{
  await this.page.goto('https://ksrtc.in/')
}

 async filldetails( fromplace:string,toplace:string,datevale:string,monthvalue:string,yearvalue:string)
{
  //span[text()='October']/ancestor::div[3]/descendant::a[text()='15']
  await this.leavingfrom.click();
 
  await this.page.waitForTimeout(2000);
await this.valueentryfieldfrom.fill(`${fromplace} `)
await this.page.keyboard.press('Space');
await this.page.locator('li.active-result em').first().click()
await this.goingto.click()
 await this.page.waitForTimeout(2000);
await this.valueentryfieldto.fill(`${toplace} `)
await this.page.keyboard.press('Space');
await this.page.locator('.chosen-results li em').last().click()
await this.choosedate.click()
while(true)
{
  if((await this.year1.textContent()===yearvalue) || (await this.year2.textContent()===yearvalue))
    break;
await this.next.click()
}

while(true)
{
  if((await this.month1.textContent()===monthvalue) || (await this.month2.textContent()===monthvalue))
    break;
await this.next.click()
}

await this.page.locator(`//span[text()='${monthvalue}']/ancestor::div[3]/descendant::a[text()='${datevale}']`).click()
await this.searchbus.click()
return this.page;
}
}

