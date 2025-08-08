
            // Apply active class on click
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            });
            });




            // Button

const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');

  // Hover Effect for "Log in"
  loginBtn.addEventListener('mouseover', () => {
    loginBtn.classList.add('border');
    signupBtn.classList.remove('border');
  });

  // Hover Effect for "Sign up Free"
  signupBtn.addEventListener('mouseover', () => {
    signupBtn.classList.add('border');
    loginBtn.classList.remove('border');
  });

  // Click to Activate Button
  function activateButton(clickedBtn, otherBtn) {
    clickedBtn.classList.add('active-clicked');
    otherBtn.classList.remove('active-clicked');
  }

  loginBtn.addEventListener('click', () => activateButton(loginBtn, signupBtn));
  signupBtn.addEventListener('click', () => activateButton(signupBtn, loginBtn));



  // 4-card circular carousel

document.addEventListener('DOMContentLoaded', function () {
    const cardsTrack = document.getElementById('cardsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Function to update button states
    function updateButtonStates(activeButton) {
        if (activeButton === 'next') {
            // Next button becomes active, prev becomes inactive
            nextBtn.classList.add('active');
            nextBtn.classList.remove('inactive');
            prevBtn.classList.add('inactive');
            prevBtn.classList.remove('active');
        } else if (activeButton === 'prev') {
            // Prev button becomes active, next becomes inactive
            prevBtn.classList.add('active');
            prevBtn.classList.remove('inactive');
            nextBtn.classList.add('inactive');
            nextBtn.classList.remove('active');
        }
    }

    // Function to rearrange cards for circular effect
    function rearrangeCards() {
        // Move the first card to the end for next scroll
        const firstCard = cardsTrack.firstElementChild;
        cardsTrack.appendChild(firstCard);
    }

    // Function to rearrange cards backwards for previous scroll
    function rearrangeCardsBackward() {
        // Move the last card to the beginning for previous scroll
        const lastCard = cardsTrack.lastElementChild;
        cardsTrack.insertBefore(lastCard, cardsTrack.firstElementChild);
    }

    // Next button functionality
    nextBtn.addEventListener('click', () => {
        // Add transition class
        cardsTrack.style.transition = 'transform 0.5s ease-in-out';

        // Move left by 25% (one card width)
        cardsTrack.style.transform = 'translateX(-25%)';

        // After animation completes, rearrange DOM and reset position
        setTimeout(() => {
            cardsTrack.style.transition = 'none';
            rearrangeCards();
            cardsTrack.style.transform = 'translateX(0%)';

            // Re-enable transition for next animation
            setTimeout(() => {
                cardsTrack.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500);

        updateButtonStates('next');
    });

    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        // First rearrange DOM (move last card to first)
        cardsTrack.style.transition = 'none';
        rearrangeCardsBackward();
        cardsTrack.style.transform = 'translateX(-25%)';

        // Then animate back to normal position
        setTimeout(() => {
            cardsTrack.style.transition = 'transform 0.5s ease-in-out';
            cardsTrack.style.transform = 'translateX(0%)';
        }, 50);

        updateButtonStates('prev');
    });

    // Initialize button states (next button active by default)
    updateButtonStates('next');
});