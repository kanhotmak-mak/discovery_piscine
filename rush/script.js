document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active', 'btn-dark'));
            filterButtons.forEach(btn => btn.classList.add('btn-outline-dark'));
            
            button.classList.add('active', 'btn-dark');
            button.classList.remove('btn-outline-dark');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const spots = [
        { title: "วัดพระธาตุขามแก่น", desc: "ปูชนียสถานศักดิ์สิทธิ์คู่บ้านคู่เมืองขอนแก่น" },
        { title: "อุทยานแห่งชาติภูเวียง", desc: "ย้อนรอยตามหาฟอสซิลไดโนเสาร์ขอนแก่น" },
        { title: "ตลาดต้นตาน", desc: "ช็อป ชิม ชิล เดินตลาดสตรีทฟู้ดสุดฮิป" },
        { title: "บึงแก่นนคร", desc: "ชมวิวบรรยากาศพระอาทิตย์ตกริมน้ำสุดชิล" },
        { title: "วัดหนองแวง (พระมหาธาตุแก่นนคร)", desc: "ชมเมืองขอนแก่นแบบ 360 องศาจากยอดเจดีย์ 9 ชั้น" }
    ];

    const randomBtn = document.getElementById('randomBtn');
    if (randomBtn) {
        const randomModal = new bootstrap.Modal(document.getElementById('randomModal'));
        randomBtn.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * spots.length);
            const selectedSpot = spots[randomIndex];
            document.getElementById('spotTitle').innerText = selectedSpot.title;
            document.getElementById('spotDesc').innerText = selectedSpot.desc;
            randomModal.show();
        });
    }
});