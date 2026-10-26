import {test, expect} from '@playwright/test';

export const registerUserData = {
    weburl: 'https://automationexercise.com',
    name: 'Kunj',
    email: 'kunj@example.com',
    registerPassword: 'Kunj@123',
    invalidEmail: 'kunj@gmail.com',
    invalidPassword: 'Kunj@1234',
    
    rendomname: 'Rendom',
    rendomemail: 'rendom@example.com',
    rendomPassword: 'Rendom@123',

    rendome2: "Rendom2",
    rendome2email: "rendom2@example.com",
    rendome2Password: "Rendom2@123",

    rendome3: "Rendom3",
    rendome3email: "rendom3@example.com",
    rendome3Password: "Rendom3@123",

    day: '19',
    month: '6', 
    year: '2003',

    firstName: 'Kunj',
    lastName: 'Patel',
    company: 'ABC Company',
    address1: 'Himmatnagar, Gujarat',
    address2: 'Apartment 101',
    country: 'India',
    state: 'Gujarat',
    city: 'Himmatnagar',
    zipcode: '383001',
    mobileNumber: '+91 9876543210',
    url: 'https://automationexercise.com/login',
    homeUrl: 'https://automationexercise.com/',
    eSubject: 'Test Subject',
    eMessage: 'This is a test message.',
    eFilePath: 'tests/uploadfile/images (2).jpg',
    // eSuccessMessage: 'Success! Your details have been submitted successfully.',
    tCaseUrl: 'https://automationexercise.com/test_cases',

    productname: 'Blue Top', 
    firstproprice: 'Rs. 500',
    secondproprice: 'Rs. 400',
    firstproquantity: '1',
    secondproquantity: '1',
    quantity: '4', 

    text: 'For the Test', 
    nameOnCard: 'Kunj Patel',
    cardNumber: '1234 5678 9012 3456',
    cvc: '123',
    expMonth: '12',
    expYear: '2025'
    
};