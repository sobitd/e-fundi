const rangeInput = document.querySelectorAll(".ragnerInput input")

rangeInput.forEach(input =>{
    input.addEventListener('input', () => {
        let minval = parseInt(rangeInput[0].value)
        maxval = parseInt(rangeInput[1].value)
        console.log(minval, maxval)

    });
});