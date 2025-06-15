document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ДАНІ ПРО ПОСЛУГИ ТА РЕМОНТ ---
    const servicesData = {
        "iPhone": {
            image: "https://api.serviceinua.com.ua/file-manager-thumb/566/2024-11-06-iPhone16ProMax-300x300.webp",
            models: {
                "iPhone 16 Pro Max": { "Перепрошивка": 800, "Заміна дисплею (оригінал)": 18000, "Заміна корпусу": 9000 },
                "iPhone 16 Pro": { "Перепрошивка": 800, "Заміна дисплею (оригінал)": 17000, "Заміна корпусу": 8500 },
                "iPhone 16": { "Перепрошивка": 750, "Заміна дисплею (оригінал)": 15000, "Заміна корпусу": 8000 },
                "iPhone 16 Plus": { "Перепрошивка": 750, "Заміна дисплею (оригінал)": 15500, "Заміна корпусу": 8200 },
                "iPhone 15 Pro Max": { "Перепрошивка": 700, "Полірування скла": 1500, "Чистка після попадання рідини": 1200, "Заміна дисплею (оригінал)": 14999, "Усунення помилки при заміні дисплея": 2500, "Заміна корпусу": 7000, "Заміна скла задньої камери": 1800 },
                "iPhone 15 Pro": { "Перепрошивка": 700, "Полірування скла": 1400, "Чистка після попадання рідини": 1200, "Заміна дисплею (оригінал)": 13500, "Заміна корпусу": 6500 },
                "iPhone 15": { "Перепрошивка": 650, "Заміна дисплею (оригінал)": 9500, "Заміна акумулятора": 3200 },
                "iPhone 15 Plus": { "Перепрошивка": 650, "Заміна дисплею (оригінал)": 10500, "Заміна акумулятора": 3400 },
                "iPhone 14 Pro Max": { "Перепрошивка": 600, "Заміна дисплею (оригінал)": 12500, "Заміна акумулятора": 3000 },
                "iPhone 14 Pro": { "Перепрошивка": 600, "Заміна дисплею (оригінал)": 11500, "Заміна акумулятора": 2900 },
                "iPhone 14": { "Перепрошивка": 550, "Заміна дисплею (оригінал)": 8000, "Заміна акумулятора": 2800 },
                "iPhone 14 Plus": { "Перепрошивка": 550, "Заміна дисплею (оригінал)": 8500, "Заміна акумулятора": 2850 },
                "iPhone SE 3 (2022)": { "Перепрошивка": 500, "Заміна дисплею (оригінал)": 4500, "Заміна акумулятора": 1800 },
                "iPhone 13 Pro Max": { "Перепрошивка": 500, "Заміна дисплею (оригінал)": 9000, "Заміна акумулятора": 2500 },
                "iPhone 13 Pro": { "Перепрошивка": 500, "Заміна дисплею (оригінал)": 8500, "Заміна акумулятора": 2400 },
                "iPhone 13": { "Перепрошивка": 500, "Заміна дисплею (оригінал)": 7000, "Заміна акумулятора": 2300 },
                "iPhone 13 mini": { "Перепрошивка": 500, "Заміна дисплею (оригінал)": 6800, "Заміна акумулятора": 2200 },
                "iPhone 12 Pro Max": { "Перепрошивка": 450, "Заміна дисплею (оригінал)": 7500, "Заміна акумулятора": 2100 },
            }
        },
        "MacBook": {
            image: "https://api.serviceinua.com.ua/file-manager-thumb/299/2023-08-03-macbook_pro_14_M2_2022-300x300.webp",
            models: {
                "MacBook Pro 16 (M3/M2/M1)": { "Заміна дисплею": 28000, "Заміна акумулятора": 8000, "Ремонт клавіатури": 5500 },
                "MacBook Pro 14 (M3/M2/M1)": { "Заміна дисплею": 25000, "Заміна акумулятора": 7000, "Чистка системи охолодження": 1500 },
                "MacBook Pro 13 (M2/M1)": { "Заміна дисплею": 17000, "Заміна акумулятора": 5000, "Ремонт Touch Bar": 4000 },
                "MacBook Air 15 (M3/M2)": { "Заміна дисплею": 19000, "Заміна акумулятора": 6500, "Заміна трекпаду": 3500 },
                "MacBook Air 13 (M3/M2)": { "Заміна дисплею": 18000, "Заміна акумулятора": 5500, "Заміна клавіатури": 4500 },
                "MacBook Air 13 (M1)": { "Заміна дисплею": 16500, "Заміна акумулятора": 4800, "Заміна динаміків": 2500 },
                "MacBook Pro 16 (Intel, 2019)": { "Заміна дисплею": 22000, "Заміна акумулятора": 6000, "Ремонт відеокарти": 8000 },
                "MacBook Pro 13 (Intel, 2020)": { "Заміна дисплею": 15000, "Заміна акумулятора": 4500, "Ремонт клавіатури 'метелик'": 5000 },
                "MacBook 12 (2015-2017)": { "Заміна дисплею": 14000, "Заміна акумулятора": 4000, "Заміна USB-C порту": 2800 },
            }
        },
        "iPad": { 
            image: "https://api.serviceinua.com.ua/file-manager-thumb/572/2024-11-06-iPadPro112024-300x300.webp", 
            models: { "iPad Pro 12.9 (2022)": { "Заміна скла": 8000 } } 
        },
        "iMac": { 
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-cto-hero-202310?wid=1254&hei=1122&fmt=jpeg&qlt=90&.v=1696973957314", 
            models: { "iMac 24 (M3)": { "Ремонт блока живлення": 4500 } } 
        },
        "Apple Watch": { 
            image: "https://api.serviceinua.com.ua/file-manager-thumb/586/2025-03-03-Apple_Watch_Ultra_2-300x300.webp", 
            models: { "Apple Watch 9": { "Заміна дисплею": 5000 } } 
        },
        "AirPods": { 
            image: "https://api.serviceinua.com.ua/file-manager-thumb/578/2024-11-06-AppleAirPods4-300x300.webp", 
            models: { "AirPods Pro 2": { "Заміна акумулятора кейсу": 1200 } } 
        },
    };

    const steps = {
        1: document.getElementById('step1-device-type'),
        2: document.getElementById('step2-device-model'),
        3: document.getElementById('step3-repair-type'),
        4: document.getElementById('step4-result'),
    };
    
    const deviceCarousel = document.querySelector('.device-type-carousel');
    const modelGrid = document.querySelector('.model-grid');
    const repairGrid = document.querySelector('.repair-grid');
    const step2Title = document.querySelector('#step2-device-model .step-title');
    const step3Title = document.querySelector('#step3-repair-type .step-title');
    const resultImage = document.querySelector('.result-image img');
    const resultServiceName = document.querySelector('.result-service-name');
    const resultPrice = document.querySelector('.result-price');
    const benefitsList = document.querySelector('.result-benefits');
    const backButtons = document.querySelectorAll('.back-btn');
    const finalSubmitButton = document.querySelector('#step4-result .btn-dark');
    const modal = document.getElementById('modal');
    const openModalHeaderBtn = document.getElementById('open-modal-header-btn');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const requestForm = document.getElementById('request-form');

    let userSelection = {
        device: 'iPhone',
        model: null,
        repair: null,
    };

    function showStep(stepNumber) {
        Object.values(steps).forEach(stepEl => stepEl.classList.add('hidden'));
        if (steps[stepNumber]) {
            steps[stepNumber].classList.remove('hidden');
            window.scrollTo({ top: steps[stepNumber].closest('.calculator-section').offsetTop, behavior: 'smooth' });
        }
    }

    function updateModels() {
        modelGrid.innerHTML = '';
        const models = servicesData[userSelection.device]?.models;
        step2Title.textContent = `КРОК 2: Виберіть модель ${userSelection.device}`;
        if (models) {
            for (const modelName in models) {
                const button = document.createElement('button');
                button.className = 'model-button';
                button.textContent = modelName;
                modelGrid.appendChild(button);
            }
        }
    }

    function updateRepairs() {
        repairGrid.innerHTML = '';
        const repairs = servicesData[userSelection.device]?.models?.[userSelection.model];
        step3Title.textContent = `КРОК 3: Виберіть несправність для ${userSelection.model}`;
        if (repairs) {
            for (const repairName in repairs) {
                const button = document.createElement('button');
                button.className = 'repair-button';
                button.textContent = repairName;
                repairGrid.appendChild(button);
            }
        }
    }

    function updateResult() {
        const price = servicesData[userSelection.device]?.models?.[userSelection.model]?.[userSelection.repair];
        const image = servicesData[userSelection.device]?.image;

        resultImage.src = image || '';
        resultServiceName.textContent = `${userSelection.repair} для ${userSelection.model}`;
        resultPrice.textContent = price ? `${price.toLocaleString('uk-UA')} грн` : 'Ціну уточнюйте';

        benefitsList.innerHTML = `
            <li>✓ Відремонтуємо за 1 день</li>
            <li>✓ Працюємо без вихідних</li>
            <li>✓ Безкоштовна кур'єрська доставка в сервіс</li>
        `;
    }

    deviceCarousel.addEventListener('click', (e) => {
        const button = e.target.closest('.device-type-item');
        if (!button) return;

        deviceCarousel.querySelector('.active')?.classList.remove('active');
        button.classList.add('active');

        userSelection.device = button.querySelector('span').textContent.trim();
        updateModels();
        showStep(2);
    });

    modelGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('model-button')) {
            userSelection.model = e.target.textContent;
            updateRepairs();
            showStep(3);
        }
    });

    repairGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('repair-button')) {
            userSelection.repair = e.target.textContent;
            updateResult();
            showStep(4);
        }
    });
    
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = button.closest('.calc-step');
            if (currentStep.id === 'step4-result') showStep(3);
            else if (currentStep.id === 'step3-repair-type') showStep(2);
            else if (currentStep.id === 'step2-device-model') showStep(1);
        });
    });
        // --- ЛОГІКА МОДАЛЬНОГО ВІКНА (ОНОВЛЕНО) ---
        const allOpenModalButtons = document.querySelectorAll('.js-open-modal');

        function openModal() {
            modal.classList.remove('hidden');
        }
        function closeModal() {
            modal.classList.add('hidden');
        }

        allOpenModalButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); // Запобігаємо переходу по #modal
                openModal();
            });
        });

        closeModalBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

    requestForm.addEventListener('submit', () => {
        setTimeout(() => {
            closeModal();
            requestForm.reset();
        }, 500);
    });
    // --- ЛОГІКА СЛАЙДЕРА ВІДГУКІВ ---
    const track = document.querySelector('.testimonial-track');
    if (track) {
        const cards = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 30; // Значення gap з CSS
        let currentIndex = 0;

        const updateButtons = () => {
            if (currentIndex === 0) {
                prevButton.disabled = true;
            } else {
                prevButton.disabled = false;
            }
            // Показуємо 3 картки, тому остання можлива позиція - cards.length - 3
            if (currentIndex >= cards.length - 3) {
                nextButton.disabled = true;
            } else {
                nextButton.disabled = false;
            }
        };

        nextButton.addEventListener('click', () => {
            if (currentIndex < cards.length - 3) {
                currentIndex++;
                track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
                updateButtons();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
                updateButtons();
            }
        });

        // Ініціалізуємо стан кнопок при завантаженні
        updateButtons();
    }
});