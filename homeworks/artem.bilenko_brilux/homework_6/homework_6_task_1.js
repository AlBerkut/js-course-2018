function User() {
    let fullName;
    let phone;
    const capitalLetter = new RegExp('\\b\\w');
    const removeCharacters = new RegExp('[^\\d]', 'g');
    const removeCharactersLeavingPlus = new RegExp('[^+\\d]', 'g');
    Object.defineProperty(this, 'fullName', {
        get() {
            return fullName;
        },
        set(editedName) {
            fullName = editedName
                .toLowerCase()
                .replace(capitalLetter, l => l.toUpperCase());
        },
    });
    Object.defineProperty(this, 'phone', {
        get() {
            return phone;
        },
        set(editedPhone) {
            if (editedPhone[0] !== '+') {
                phone = editedPhone.replace(removeCharacters, '');
            } else {
                phone = editedPhone.replace(removeCharactersLeavingPlus, '');
            }
        },
    });
}

const user = new User();
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
