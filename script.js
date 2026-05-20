/**
 * ==========================================================================
 * LOGIKA INTERAKTIF LANDING PAGE ENGCATO (script.js)
 * File ini berisi semua logika JavaScript untuk menu navigasi, efek scroll,
 * dan modal pop-up pendaftaran Free Trial yang interaktif.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. TOGGLE MENU HAMBURGER (RESPONSIVE MENU DI HP) ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      // Toggle class 'active' untuk menampilkan/menyembunyikan menu navigasi
      navMenu.classList.toggle('active');
      
      // Mengubah ikon hamburger (bars) menjadi ikon silang (xmark) ketika menu aktif
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // --- 2. MENUTUP NAV MENU SECARA OTOMATIS SAAT TAUTAN DIKLIK ---
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (menuToggle) {
          menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
      }
    });
  });

  // --- 3. EFEK NAVBAR SHADOW SAAT DI-SCROLL ---
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar-container');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // --- 4. LOGIKA MODAL POP-UP CANTIK (FREE TRIAL SUCCESS) ---
  const modal = document.getElementById('modal-free-trial');
  const closeModalBtn = document.getElementById('btn-close-modal');
  
  // Ambil tombol-tombol pemicu modal
  const heroCtaBtn = document.getElementById('hero-cta-btn');
  const freeTrialBtn = document.getElementById('free-trial-btn');
  const freeTrialCard = document.getElementById('price-free');

  // Fungsi untuk membuka modal
  const openModal = (e) => {
    e.preventDefault(); // Mencegah lompatan link default
    if (modal) {
      modal.classList.add('open');
    }
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    if (modal) {
      modal.classList.remove('open');
    }
  };

  // Pasang event listener ke tombol CTA Hero
  if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', openModal);
  }

  // Pasang event listener ke tombol Uji Coba di dalam kartu Free Trial
  if (freeTrialBtn) {
    freeTrialBtn.addEventListener('click', openModal);
  }

  // Pasang event listener tambahan jika pengguna mengklik area kartu Free Trial (opsional/menjawab instruksi "kartu Free Trial diklik")
  if (freeTrialCard) {
    freeTrialCard.addEventListener('click', (e) => {
      // Pastikan modal hanya terbuka jika bukan klik pada link lain di dalam kartu
      if (e.target.tagName !== 'A' && e.target.parentElement.tagName !== 'A') {
        openModal(e);
      }
    });
  }

  // Pasang event listener ke tombol Tutup di dalam modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Menutup modal jika pengguna mengklik area luar modal (backdrop abu-abu)
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // --- 5. LOGIKA INTERAKTIF SIMULATOR BELAJAR CATO (WIDGET GAYA DUOLINGO) ---
  const simOptionBtns = document.querySelectorAll('.sim-option-btn');
  const catoSimText = document.getElementById('cato-sim-text');
  const simCtaContainer = document.getElementById('sim-cta-container');
  const btnSimCta = document.getElementById('btn-sim-cta');

  if (simOptionBtns.length > 0 && catoSimText && simCtaContainer && btnSimCta) {
    const responses = {
      sleeping: "Good try! But look closer, it's jumping joyfully! It is hopping! Let's try again! 🌟",
      hopping: "Excellent! You are Fast, Careful, and Smart! Yes, the cat is hopping! Great job! 🎉 Segera tunjukkan kehebatanmu ke Ayah dan Bunda!",
      running: "Good try! But look closer, it's jumping joyfully! It is hopping! Let's try again! 🌟"
    };

    simOptionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const responseKey = btn.getAttribute('data-response');
        
        // Update dialog chat Cato dengan respon ceria
        if (responses[responseKey]) {
          // Transisi text halus
          catoSimText.style.opacity = 0;
          setTimeout(() => {
            catoSimText.textContent = responses[responseKey];
            catoSimText.style.opacity = 1;
          }, 150);
        }

        // Atur status kelas tombol (Terpilih vs Buram)
        simOptionBtns.forEach(b => {
          b.classList.remove('selected');
          b.classList.add('dimmed');
        });
        btn.classList.remove('dimmed');
        btn.classList.add('selected');

        // Munculkan tombol emas CTA hanya untuk respon sukses (jawaban benar: hopping)
        if (responseKey === 'hopping') {
          if (simCtaContainer.classList.contains('sim-cta-hidden')) {
            simCtaContainer.classList.remove('sim-cta-hidden');
            simCtaContainer.classList.add('sim-cta-visible');
          }
        } else {
          // Sembunyikan jika memilih jawaban salah
          simCtaContainer.classList.add('sim-cta-hidden');
          simCtaContainer.classList.remove('sim-cta-visible');
        }
      });
    });

    // Hubungkan tombol CTA simulator ke modal pendaftaran Free Trial
    btnSimCta.addEventListener('click', (e) => {
      openModal(e);
    });
  }
});
