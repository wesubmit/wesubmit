// Function to ensure the page is scrollable
function ensureScrollable() {
    document.body.style.height = 'auto';
    document.body.style.overflow = 'auto';
    document.querySelector('.page-wrapper').style.overflow = 'visible';
}

// Function to check and adjust page height
function adjustPageHeight() {
    const pageWrapper = document.querySelector('.page-wrapper');
    const windowHeight = window.innerHeight;
    
    if (pageWrapper.offsetHeight < windowHeight) {
        pageWrapper.style.minHeight = windowHeight + 'px';
    } else {
        pageWrapper.style.minHeight = '100%';
    }
}

// Run on page load
window.addEventListener('load', function() {
    ensureScrollable();
    adjustPageHeight();
});

// Run on resize
window.addEventListener('resize', adjustPageHeight);

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion-button');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    
    contactButton.addEventListener('click', function() {
        window.open('https://x.com/umbertotancorre', '_blank');
    });
});

// Add this function at the end of the file
function scrollToPricing() {
    const pricingSection = document.querySelector('.pricing');
    if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const heroButtons = document.querySelectorAll('.hero-button');
    heroButtons.forEach(button => {
        button.addEventListener('click', scrollToPricing);
    });
});
