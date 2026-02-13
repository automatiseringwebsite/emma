// Emma's Creatieve Wereld - Main JavaScript

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('emma-theme');

if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀' : '🌞';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀' : '🌞';
    localStorage.setItem('emma-theme', newTheme);
    
    // Fun animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 500);
});

// Project Data for Modal
const projects = {
    'knutselen': {
        title: 'Papieren Bloemen & Dieren',
        category: '🧶 Knutselen',
        description: 'Ik maak de mooiste bloemen, dieren en figuren van kleurrijk papier! Met stiften en glitters maak ik alles extra speciaal.',
        duration: '1-2 uur',
        difficulty: 'Gemiddeld',
        images: [
            { emoji: '🌸', title: 'Papieren Roos' },
            { emoji: '🦋', title: 'Papieren Vlinder' },
            { emoji: '🐰', title: 'Papieren Konijn' },
            { emoji: '🌈', title: 'Regenboog' }
        ]
    },
    'tekenen': {
        title: 'Tekeningen van Dieren & Fantasy',
        category: '🎨 Tekenen',
        description: 'Met mijn gelpen en stiften maak ik hele werelden! Draken, eenhoorns, en andere magische wezens komen tot leven op papier.',
        duration: '2-4 uur',
        difficulty: 'Moeilijk',
        images: [
            { emoji: '🐉', title: 'Draken' },
            { emoji: '🦄', title: 'Eenhoorn' },
            { emoji: '🐴', title: 'Fantasy Paard' },
            { emoji: '🏰', title: 'Kasteel' }
        ]
    },
    'haken': {
        title: 'Handgehaakte Sjaals, Dekens & Knuffels',
        category: '🧵 Haken',
        description: 'Met mijn haaknaald en garen maak ik de warmste en zachtste dingen! Sjaals voor poppen, dekens voor poppen en knuffels voor mezelf.',
        duration: '3-6 uur',
        difficulty: 'Moeilijk',
        images: [
            { emoji: '🧶', title: 'Poppen Sjaal' },
            { emoji: '🌈', title: 'Regenboog Dekentje' },
            { emoji: '🐻', title: 'Beer Knuffel' },
            { emoji: '🌸', title: 'Roosje Knuffel' }
        ]
    }
};

// Modal Functions
const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');

function openModal(category) {
    const project = projects[category];
    if (!project) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalDifficulty').textContent = project.difficulty;
    
    // Update images
    const imagesContainer = document.getElementById('modalImages');
    imagesContainer.innerHTML = '';
    
    project.images.forEach((img, index) => {
        const imgDiv = document.createElement('div');
        const isActive = index === 0 ? 'active' : '';
        imgDiv.className = `modal-image ${isActive}`;
        imgDiv.innerHTML = `<span style="font-size: 2.5rem;">${img.emoji}</span>`;
        imgDiv.title = img.title;
        
        imgDiv.onclick = () => {
            document.querySelectorAll('.modal-image').forEach(el => el.classList.remove('active'));
            imgDiv.classList.add('active');
        };
        
        imagesContainer.appendChild(imgDiv);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const interest = document.getElementById('interest').value;
    
    // Fun confirmation message
    const messages = [
        '🎨 Bedankt voor je bericht, ' + name + '!',
        '✨ Emma vind het super leuk!',
        '💌 Het bericht is verstuurd!',
        '💖 We komen zo spoedig mogelijk terug!'
    ];
    
    let messageIndex = 0;
    
    // Create fun alert animation
    const showNextMessage = () => {
        if (messageIndex < messages.length) {
            alert(messages[messageIndex]);
            messageIndex++;
            setTimeout(showNextMessage, 1500);
        } else {
            // Reset form
            contactForm.reset();
            
            // Final celebration
            alert('🎉🎉🎉 TOT SIET! 🎉🎉🎉');
        }
    };
    
    setTimeout(showNextMessage, 500);
});

// Fun Facts Animation
const funFacts = document.querySelectorAll('.fact');
let currentFact = 0;

function rotateFunFacts() {
    // Hide current fact
    funFacts[currentFact].style.opacity = '0';
    funFacts[currentFact].style.transform = 'scale(0.8)';
    
    // Move to next fact
    currentFact = (currentFact + 1) % funFacts.length;
    
    // Show next fact
    setTimeout(() => {
        funFacts[currentFact].style.opacity = '1';
        funFacts[currentFact].style.transform = 'scale(1)';
    }, 300);
}

// Rotate facts every 5 seconds
setInterval(rotateFunFacts, 5000);

// Add hover effects to interest cards
const interestCards = document.querySelectorAll('.interest-card');

interestCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'none';
    });
    
    card.addEventListener('mouseleave', () => {
        setTimeout(() => {
            card.style.animation = '';
        }, 300);
    });
});

// Add bounce effect to emoji on click
const emojis = document.querySelectorAll('.interest-icon, .floating-emoji');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        emoji.style.animation = 'none';
        
        // Create bounce animation
        emoji.animate([
            { transform: 'translateY(0) scale(1)' },
            { transform: 'translateY(-30px) scale(1.3)' },
            { transform: 'translateY(0) scale(1)' }
        ], {
            duration: 600,
            easing: 'ease-out'
        });
        
        // Play sound effect (if browser supports)
        try {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(context.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAt(800, context.currentTime);
            gainNode.gain.setValueAt(0.3, context.currentTime);
            
            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + 0.1);
        } catch (e) {
            // Audio not supported, silently fail
        }
    });
});

// Gallery item hover effects
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const info = item.querySelector('.gallery-info');
        if (info) {
            info.style.transform = 'translateY(0)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const info = item.querySelector('.gallery-info');
        if (info) {
            info.style.transform = 'translateY(10px)';
        }
    });
});

// Initial animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Animate gallery items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all gallery items
    document.querySelectorAll('.gallery-item, .interest-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(item);
    });
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero-avatar');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
});

// Add sparkle effect to cursor movement
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = Math.random() * 15 + 10 + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'fadeOut 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS for fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-30px) scale(0.5); }
    }
`;
document.head.appendChild(style);

console.log('✨ Emma\'s Creatieve Wereld - Gepresenteerd!');
console.log('🧶 Knutselen, 🎨 Tekenen, 🧵 Haken');
