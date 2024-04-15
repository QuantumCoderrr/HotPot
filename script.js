    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup'); 
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    // document.querySelector('.btnLogin-popup').addEventListener('click', function() {
    //     document.querySelector('.description').style.display = 'none';
    //     document.querySelector('.login-popup').style.display = 'block';
    // });

    // document.querySelector('.description.login-popup .icon-close').addEventListener('click', function() {
    //     document.querySelector('.description').style.display = 'block';
    //     document.querySelector('.login-popup').style.display = 'none';
    // });

    // document.querySelector('.description.login-popup form').addEventListener('login', function() {
    //     document.querySelector('.description').style.display = 'block';
    //     document.querySelector('.login-popup').style.display = 'none';
    // });

    function filterCities() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        dropdown = document.getElementById("cityDropdown");
        items = dropdown.getElementsByTagName("a");

        // Hide dropdown if no filter is applied or input is empty
        if (filter === "") {
            dropdown.style.display = "none";
            return;
        }

        for (i = 0; i < items.length; i++) {
            if (items[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
        dropdown.style.display = "block";
    }
    

