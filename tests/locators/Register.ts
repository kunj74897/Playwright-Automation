import {test, expect} from '@playwright/test';

export const RegisterLocators = {

    home: "//a[normalize-space()='Home']",
    signupLogin: "//a[normalize-space()='Signup / Login']",

    newUserSignup: "//h2[normalize-space()='New User Signup!']",
    signupName: "//input[@placeholder='Name']",
    signupEmail: "//input[@data-qa='signup-email']",
    signupButton: "//button[normalize-space()='Signup']",

    enterAccountInformation:"//h2[normalize-space()='Enter Account Information']",

    titleMr: "//input[@value='Mr']",
    accountName: "//input[@id='name']",
    accountEmail: "//input[@id='email']",
    password: "//input[@id='password']",

    days: "//select[@id='days']",
    months: "//select[@id='months']",
    years: "//select[@id='years']",

    newsletter: "//input[@id='newsletter']",
    optin: "//input[@id='optin']",

    firstName: "//input[@id='first_name']",
    lastName: "//input[@id='last_name']",
    company: "//input[@id='company']",
    address1: "//input[@id='address1']",
    address2: "//input[@id='address2']",
    country: "//select[@id='country']",
    state: "//input[@id='state']",
    city: "//input[@id='city']",
    zipcode: "//input[@id='zipcode']",
    mobileNumber: "//input[@id='mobile_number']",

    createAccount: "//button[normalize-space()='Create Account']",
    accountCreated: "//b[normalize-space()='Account Created!']",
    continueButton: "//a[normalize-space()='Continue']",

    loggedInUser:`//a[text()=' Logged in as '] //b[text()='Kunj']/parent::a`,
    loggedInUser2:`//a[text()=' Logged in as '] //b[text()='Rendom']/parent::a`,
    loggedInUser3:`//a[text()=' Logged in as '] //b[text()='Rendom2']/parent::a`,


    deleteAccount: "//a[normalize-space()='Delete Account']",
    accountDeleted: "//h2[normalize-space()='Account Deleted!']",


    loginHeading: "//h2[normalize-space()='Login to your account']",
    emailInput: "//input[@data-qa='login-email']",
    passwordInput: "//input[@placeholder='Password']",
    loginButton: "//button[normalize-space()='Login']",

    errorMessage: "//p[text()='Your email or password is incorrect!']",
    eErrorMessage: "//div[@class='status alert alert-danger']",

    Logout : "//a[text()=' Logout']",
    existingEmailError: "//p[text()='Email Address already exist!']",

    contactUs: "//a[text()=' Contact us']",
    getInTouch: "//h2[text()='Get In Touch']",
    eName: "//input[@placeholder='Name']",
    eEmail: "//input[@placeholder='Email']",
    eSubject: "//input[@placeholder='Subject']",
    eMessage: "//textarea[@placeholder='Your Message Here']", 
    eFile: "//input[@type='file']",
    eSubmit: "//input[@type='submit']", 
    eSuccessMessage: "//div[text()='Success! Your details have been submitted successfully.' and @class='status alert alert-success']",
    eHome: "//span[text()=' Home']",

    testcase: "//a[text()=' Test Cases']",

    product: "//a[text()=' Products']",
    allproduct: "//h2[text()='All Products']",
    productlist: "//div[@class='features_items']",
    productfirst: "//a[@href='/product_details/1' and text()='View Product']", 
    firstproduct: "//h2[text()='Blue Top']",
    productinfo: "//div[@class='product-information']",

    searchProduct: "//input[@placeholder='Search Product']",
    searchbtn: "//button[@id='submit_search']", 
    searchedproduct: "//div[@class='productinfo text-center']// p",

    footer: "//footer[@id='footer']", 
    homeSubscription: "//h2[text()='Subscription']",
    inputemailsubscription: "//input[@id='susbscribe_email']",
    subbtn: "//button[@id='subscribe']", 
    submessage : "//div[text()='You have been successfully subscribed!']",

    cart: "//a[text()=' Cart']",
    // firstpro: "//div[@class='product-image-wrapper']//div[@class='productinfo text-center']//p[text()='Blue Top']",
    firstpro: "(//div[@class='product-image-wrapper'])[1]", 
    firstaddtocart: "//div[@class='overlay-content']// a[@data-product-id='1']",
    continuebtn: "//button[text()='Continue Shopping']",
    secondpro: "(//div[@class='product-image-wrapper'])[2]",
    secondaddtocart: "//div[@class='overlay-content']// a[@data-product-id='2']",
    viewcart: "//u[text()='View Cart']", 
    carttable: "//table[@id='cart_info_table']",
    profirst: "//tr[@id='product-1']",
    prosecond: "//tr[@id='product-2']",
    firstproprice: "//p[text()='Rs. 500']/parent::td[@class='cart_price']",
    secondproprice: "//p[text()='Rs. 400']/parent::td[@class='cart_price']",
    firstproquantity: "//tr[@id='product-1']//button[text()='1']",
    secondproquantity: "//tr[@id='product-2']//button[text()='1']",
    totalprice1: "//td[@class='cart_total']//p[text()='Rs. 500']", 
    totalprice2: "//td[@class='cart_total']//p[text()='Rs. 400']",


    homeviewproduct: "//a[@href='/product_details/2']",
    inputBox: "//input[@id='quantity']", 
    addtocart: "//button[normalize-space()='Add to cart']", 
    quantity: "//button[text()='4']", 

    homecart: "//a[@data-product-id='1']/parent::div[@class='productinfo text-center']/child::img[@src='/get_product_picture/1']",
    checkoutbtn: "//a[text()='Proceed To Checkout']",
    reglogin: "//u[text()='Register / Login']", 
    cartpage: "//a[text()=' Cart']", 
    textbox: "//textarea[@class='form-control']", 
    placeorder: "//a[text()='Place Order']", 
    nameonncard: "//input[@name='name_on_card']",
    cardnumber: "//input[@name='card_number']", 
    CVC: "//input[@name='cvc']",
    expmonth: "//input[@name='expiry_month']",
    expyear: "//input[@name='expiry_year']",
    conformbtn: "//button[text()='Pay and Confirm Order']", 
    conformorder: "//p[text()='Congratulations! Your order has been confirmed!']",
    contbtn: "//a[text()='Continue']",

    verifycartpage: "//li[text()='Shopping Cart']",
    removeproduct: "//a[@class='cart_quantity_delete']", 
    cartempty: "//b[text()='Cart is empty!']",
    Viewcategory: "//div[@id='accordian']",
    womencategory: "//a[normalize-space()='Women']",
    dresscategory: "//a[@href='/category_products/1']",
    verifydresscategory: "//h2[contains(text(),'Women -')]",
    mencategory: "//a[normalize-space()='Men']",

    brand: "//div[@class='brands_products']", 
    brandname: "//a[text()='H&M']",
    verifybrandname: "//h2[text()='Brand - H&M Products']",
    brandname2: "//a[text()='Mast & Harbour']", 
    verifybrandname2: "//h2[text()='Brand - Mast & Harbour Products']",

    searchedproducttitle: "//h2[text()='Searched Products']", 
    addtocartsearch: "//div[@class='overlay-content']//a[@data-product-id='1']",
    productviewproduct: "//a[text()='View Product' and @href='/product_details/1']",
    writereview: "//a[text()='Write Your Review']",
    yourname: "//input[@placeholder='Your Name']",
    emailaddress: "//input[@placeholder='Email Address']",
    cartreview: "//textarea[@placeholder='Add Review Here!']",
    cartsubmitbtn: "//button[normalize-space()='Submit']",
    reviewmessage: "//span[text()='Thank you for your review.']",
    recommendedHeading: "//h2[text()='recommended items']",
    recommendedproductaddtocart: "//div[@class='recommended_items']//div//div[@class='carousel-inner']//div[@class='productinfo text-center']//a[@data-product-id='4']",
    youdeliveryadd: "//ul[@class='address item box']",
    yourbillingadd: "//ul[@class='address alternate_item box']",
    registerBeforeCheckout: "//u[text()='Register / Login']",
    downloadinvoice: "//a[text()='Download Invoice']",
    scrollup: "//a[@id='scrollUp']",
    fullfleadge: "//div[@class='item active']//h2[contains(text(),'Full-Fledged practice website for Automation Engin')]",












    



}