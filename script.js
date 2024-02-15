

// step-1:get base value



function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);
   const triangleHeightInput = document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const height=parseFloat(triangleHeightText)

   console.log(height);

   const area = 0.5*base*height;
   console.log('area of the triangle is:', area);
   //display triangle
   const triangleAreaSpan=document.getElementById('triangle-area');
   triangleAreaSpan.innerText = area;
   //display another device
   const rectangleArea=document.getElementById('triangle-display');
   rectangleArea.innerText=area;

}
function calculateRectangleArea(){
    const triangleBaseInput = document.getElementById('rectangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const weight = parseFloat(triangleBaseText)
    console.log(weight);
   const triangleHeightInput = document.getElementById('rectangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const length=parseFloat(triangleHeightText)

   console.log(length);

   const area =weight*length;
   console.log('area of the Reatangle is:', area);
   //display triangle
   const triangleAreaSpan=document.getElementById('rectangle-area');
   triangleAreaSpan.innerText = area;
   //dispaly another space
   const rectangleArea=document.getElementById('rectangle-display');
   rectangleArea.innerText=area;

}
function calculateParallelogram()
{
    // width input
    const parallelogramWidthInput=document.getElementById('parallelogram-width');
    const parallelogramText=parallelogramWidthInput.value;
    const width=parseFloat(parallelogramText)
    console.log(width);

    // height input
    const parallelogramHeightInput=document.getElementById('parallelogram-height');
    const parallelogramHeightText=parallelogramHeightInput.value;
    const height=parseFloat(parallelogramHeightText)
    console.log(height);
    // calculate area
    const area=width*height;
    console.log('Area of parallelogram is:',area);
    //display value
    const parallelogramAreaSpan=document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText=area;

}

function calculateRhombusArea(){
    // input D1 value
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const rhombusD1Text=rhombusD1Input.value;
    const D1=parseFloat(rhombusD1Text);
    console.log(D1);
    // input D2 value
    const rhombusD2Input = document.getElementById('rhombus-d2');
    const rhombusD2Text=rhombusD2Input.value;
    const D2=parseFloat(rhombusD2Text);
    console.log(D2);
    //calculate Area
    const area=0.5*D1*D2;
    console.log('Area of Rhombus is:',area);
    // display area
    const rhombusArea=document.getElementById('rhombus-area');
    rhombusArea.innerText = area;

}
function pentagonAreaCalculate(){
    // input D1 value
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPText=pentagonPInput.value;
    const P=parseFloat(pentagonPText);
    console.log(P);
    // input D2 value
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBText=pentagonBInput.value;
    const B=parseFloat(pentagonBText);
    console.log(B);
    //calculate Area
    const area=0.5*P*B;
    console.log('Area of pentagon is:',area);
    // display area
    const pentagonArea=document.getElementById('pentagon-area');
    pentagonArea.innerText = area;

}
function calculateEllipseArea(){
    // input D1 value
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText=ellipseAInput.value;
    const A=parseFloat(ellipseAText);
    console.log(A);
    // input D2 value
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText=ellipseBInput.value;
    const B=parseFloat(ellipseBText);
    console.log(B);
    //calculate Area
    const area=3.1416*A*B;
    console.log('Area of Ellipse is:',area);
    // display area
    const ellipseArea=document.getElementById('ellipse-area');
    ellipseArea.innerText = area;

}