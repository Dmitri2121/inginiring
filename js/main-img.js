const images = [

            'img/slider-image/01.jpg',
            'img/slider-image/02.jpg',
            'img/slider-image/03.jpg',
            'img/slider-image/04.jpg',
            'img/slider-image/05.jpg',
            'img/slider-image/06.jpg',
            'img/slider-image/07.jpg',
            'img/slider-image/08.jpg',
            'img/slider-image/09.jpg',
            'img/slider-image/10.jpg',

            

        ];

        let currentIndex = 0;

        const container = document.getElementById('galleryContainer');

        const indicatorsContainer = document.getElementById('indicators');

        let imageElements = [];

        // Создаем все изображения

        function createImages() {

            images.forEach((src, index) => {

                const img = document.createElement('img');

                img.className = `gallery-image ${index === 0 ? 'active' : ''}`;

                img.src = src;

                img.alt = `Gallery image ${index + 1}`;

                img.loading = index === 0 ? 'eager' : 'lazy';

                container.appendChild(img);

                imageElements.push(img);

            });

        }

        // Создаем индикаторы

        function createIndicators() {

            indicatorsContainer.innerHTML = '';

            images.forEach((_, index) => {

                const indicator = document.createElement('div');

                indicator.className = `indicator ${index === 0 ? 'active' : ''}`;

                indicatorsContainer.appendChild(indicator);

            });

        }

        // Обновляем активный индикатор

        function updateIndicators() {

            const indicators = document.querySelectorAll('.indicator');

            indicators.forEach((indicator, index) => {

                if (index === currentIndex) {

                    indicator.classList.add('active');

                } else {

                    indicator.classList.remove('active');

                }

            });

        }

        // Плавно меняем изображение

        function changeImage() {

            // Убираем активный класс у текущего изображения

            imageElements[currentIndex].classList.remove('active');

            

            // Переходим к следующему индексу

            currentIndex = (currentIndex + 1) % images.length;

            

            // Добавляем активный класс новому изображению

            imageElements[currentIndex].classList.add('active');

            

            // Обновляем индикаторы

            updateIndicators();

        }

        // Инициализация

        createImages();

        createIndicators();

        // Предзагружаем следующее изображение для плавности

        function preloadNextImage() {

            const nextIndex = (currentIndex + 1) % images.length;

            const nextImage = new Image();

            nextImage.src = images[nextIndex];

        }

        // Запускаем смену каждые 4 секунды

        setInterval(() => {

            changeImage();

            preloadNextImage(); // Подгружаем следующее

        }, 4000);

        // Сразу предзагружаем второе изображение

        preloadNextImage();




        
        