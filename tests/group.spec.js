const {test,expect}=require('@playwright/test');
test.describe('group 1',()=>{
test('Test 1',async({page})=>{
    console.log("This is test One");
})
test('Test 2',async({page})=>{
    console.log("This is test two");
})
})
test.describe('Group 2',()=>{


test('Test 3',async({page})=>{
    console.log("This is test three");
})
test('Test 4',async({page})=>{
    console.log("This is test four");
})
})
