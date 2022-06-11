let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);
const validation = new JustValidate('#form');

validation
    .addField('#name', [
        {
            rule: 'minLength',
            value: 2,
        },
        {
            rule: 'maxLength',
            value: 30,
        },
    ])

    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Email is required',
        },
        {
            rule: 'email',
            errorMessage: 'Email is invalid!',
        },
    ])
    .addField('#tel', [
        {
            rule: 'required',
            value: 10,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }

        }
    ]);
