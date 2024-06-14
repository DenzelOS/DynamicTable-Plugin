/**
 *  * Author: Denzel Ohene Sakyi
 * Contact: Denzel_ohenesakyi@student.uml.edu
 * //Source-addmethod:https://stackoverflow.com/questions/20803900/using-jquery-validation-greaterthan-function//
 */
$(document).ready(function(){
    $.validator.addMethod("greaterThan", function(value, element, param) {
        return this.optional(element) || parseInt(value) > parseInt($(param).val());
    }, "Please enter a value greater than the other value.");

    $("#multiplication-form").validate({
        rules: {
            MinMultiplican: {
            required: true,
            number:true,
            min:1,
            max:100

        },
        maxMultiplicand: {
            required: true,
            number:true,
            min:1,
            max:100,
            greaterThan: "#min-multiplicand"

        },
        minMultiplier : {
            required: true,
            number : true,
            min: 1,
            max : 100,
        
        },
        maxMultiplier : {
            required: true,
            number : true,
            min: 1,
            max : 100,
            greaterThan: "#min-multiplier"
        }
    },

messages: {
            minMultiplicand: {
                required: "Please enter a min multiplicand.",
                number: "Please enter a valid number.",
                min: "Please enter a number greater than or equal to 1.",
                max: "Please enter a number less than or equal to 100."
            },
            maxMultiplicand: {
                required: "Please enter a max multiplicand.",
                number: "Please enter a valid number.",
                min: "Please enter a number greater than or equal to 1.",
                max: "Please enter a number less than or equal to 100.",
                greaterThan: "Maximum multiplicand must be greater than minimum multiplicand."
            },
            minMultiplier: {
                required: "Please enter a min multiplier.",
                number: "Please enter a valid number.",
                min: "Please enter a number greater than or equal to 1.",
                max: "Please enter a number less than or equal to 100."
            },
            maxMultiplier: {
                required: "Please enter a max multiplier.",
                number: "Please enter a valid number.",
                min: "Please enter a number greater than or equal to 1.",
                max: "Please enter a number less than or equal to 100.",
                greaterThan: "Maximum multiplier must be greater than minimum multiplier."
            }
        },
        submitHandler: function(form) {
            const minMultiplicand = parseInt($('#min-multiplicand').val());
            const maxMultiplicand = parseInt($('#max-multiplicand').val());
            const minMultiplier = parseInt($('#min-multiplier').val());
            const maxMultiplier = parseInt($('#max-multiplier').val());

            generateTable(minMultiplicand, maxMultiplicand, minMultiplier, maxMultiplier);
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        }
    });



   
  });


  function generateTable(minMultiplicand, maxMultiplicand, minMultiplier, maxMultiplier) {
    const table = document.getElementById('multiplication-table');
    table.innerHTML = '';

    // Create table header
    let headerRow = '<tr><th></th>';
    for (let i = minMultiplier; i <= maxMultiplier; i++) {
        headerRow += `<th>${i}</th>`;
    }
    headerRow += '</tr>';
    table.innerHTML += headerRow;

    // Create table rows
    for (let i = minMultiplicand; i <= maxMultiplicand; i++) {
        let row = `<tr><th>${i}</th>`;
        for (let x = minMultiplier; x <= maxMultiplier; x++) {
            row += `<td>${i * x}</td>`;
        }
        row += '</tr>';
        table.innerHTML += row;
    }
}